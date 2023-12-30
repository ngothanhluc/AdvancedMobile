import 'dart:convert';
import 'dart:developer';
import 'dart:io';

import "package:chatgpt_app/constants/api_constants.dart";
import 'package:chatgpt_app/constants/constants.dart';
import 'package:chatgpt_app/models/chat_model.dart';
import 'package:http/http.dart' as http;
import 'package:chatgpt_app/models/chat_model.dart';

class ApiServices {
  static Future<List<ChatModel>> sendMessage({
    required String message,
    required List<ChatModel> chatsList,
  }) async {
    try {
      final memChats = List<Map<String, String>>.empty(growable: true);
      memChats.addAll(chatsList.map((chat) => {
            "role": chat.role,
            "content": chat.msg,
          }));
      var response = await http.post(
        Uri.parse("$BASE_URL/chat/completions"),
        headers: {
          'Authorization': 'Bearer $API_KEY',
          "Content-Type": "application/json"
        },
        body: jsonEncode(
          {
            "model": "gpt-3.5-turbo",
            "messages": memChats,
            "max_tokens": 300,
          },
        ),
      );
      // Map jsonResponse = jsonDecode(response.body);

      Map jsonResponse = json.decode(utf8.decode(response.bodyBytes));
      if (jsonResponse['error'] != null) {
        // print("jsonResponse['error'] ${jsonResponse['error']["message"]}");
        throw HttpException(jsonResponse['error']["message"]);
      }
      List<ChatModel> chatList = [];
      if (jsonResponse["choices"].length > 0) {
        // log("jsonResponse[choices]text ${jsonResponse["choices"][0]["text"]}");
        chatList = List.generate(
          jsonResponse["choices"].length,
          (index) => ChatModel(
              msg: jsonResponse["choices"][index]["message"]["content"],
              chatIndex: 1,
              role: ResponseType.assistant.name),
        );
      }
      return chatList;
    } catch (error) {
      log("error $error");
      rethrow;
    }
  }
}
