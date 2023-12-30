import 'dart:developer';

import 'package:chatgpt_app/constants/constants.dart';
import 'package:chatgpt_app/models/chat_model.dart';
import 'package:chatgpt_app/services/api_services.dart';
import 'package:chatgpt_app/widgets/chat_widget.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
import "../services/assets_manager.dart";

class ChatScreen extends StatefulWidget {
  const ChatScreen({super.key});

  @override
  State<ChatScreen> createState() => _ChatScreenState();
}

class _ChatScreenState extends State<ChatScreen> {
  bool _isTyping = false;

  late TextEditingController textEditingController;
  late ScrollController _listScrollController;
  late FocusNode focusNode;
  Map<String, List<ChatModel>> chatThreads = {'Thread 1': []};
  String currentThread = 'Thread 1';
  List<ChatModel> chatList = [];
  @override
  void initState() {
    super.initState();
    textEditingController = TextEditingController();
    _listScrollController = ScrollController();
    focusNode = FocusNode();
  }

  @override
  void dispose() {
    textEditingController.dispose();
    _listScrollController.dispose();
    focusNode.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      drawer: Drawer(
        child: ListView(
          padding: EdgeInsets.zero,
          children: [
            DrawerHeader(
              child: Image.asset(AssetsManager.openaiLogo),
              decoration: BoxDecoration(
                color: Colors.blue,
              ),
            ),
            for (var thread in chatThreads.keys)
              ListTile(
                title: Text(thread),
                onTap: () {
                  setState(() {
                    chatList = chatThreads[thread]!;
                  });
                  switchThread(thread);
                  Navigator.pop(context);
                },
              ),
            ListTile(
              title: Text('Create New Thread'),
              onTap: () {
                var newThreadName = 'Thread ${chatThreads.length + 1}';
                addThread(newThreadName);
                switchThread(newThreadName);
                Navigator.pop(context);
              },
            ),
          ],
        ),
      ),
      appBar: AppBar(
        // elevation: 2,
        // leading: Padding(
        //     padding: const EdgeInsets.all(8.0),
        //     child: Image.asset(AssetsManager.openaiLogo)),
        title: Text("Chat GPT - $currentThread"),
        // actions: [
        //   IconButton(
        //       onPressed: () {},
        //       icon: const Icon(
        //         Icons.more_vert_rounded,
        //         color: Colors.white,
        //       ))
        // ],
      ),
      body: SafeArea(
          child: Column(
        children: [
          Flexible(
            child: ListView.builder(
                controller: _listScrollController,
                itemCount: chatList.length,
                itemBuilder: (context, index) {
                  return ChatWidget(
                    msg: chatList[index].msg,
                    chatIndex: chatList[index].chatIndex,
                  );
                }),
          ),
          if (_isTyping) ...[
            const SpinKitThreeBounce(
              color: Colors.white,
              size: 18,
            ),
          ],
          const SizedBox(
            height: 15,
          ),
          Material(
              color: cardColor,
              child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: Row(
                  children: [
                    Expanded(
                      child: TextField(
                        style: const TextStyle(color: Colors.white),
                        controller: textEditingController,
                        onSubmitted: (value) async {
                          await sendMessageFCT();
                        },
                        decoration: const InputDecoration.collapsed(
                            hintText: "How can I help you",
                            hintStyle: TextStyle(color: Colors.grey)),
                      ),
                    ),
                    IconButton(
                        onPressed: () async {
                          await sendMessageFCT();
                        },
                        icon: const Icon(
                          Icons.send,
                          color: Colors.white,
                        ))
                  ],
                ),
              ))
        ],
      )),
    );
  }

  void scrollToBottom() {
    _listScrollController.animateTo(
      _listScrollController.position.maxScrollExtent,
      duration: const Duration(milliseconds: 300),
      curve: Curves.easeOut,
    );
  }

  void addThread(String threadName) {
    chatThreads[threadName] = [];
  }

  void switchThread(String threadName) {
    setState(() {
      currentThread = threadName;
      chatList = chatThreads[threadName]!;
    });
  }

  Future<void> sendMessageFCT() async {
    try {
      setState(() {
        _isTyping = true;
        chatList.add(ChatModel(
            role: ResponseType.user.name,
            msg: textEditingController.text,
            chatIndex: 0));
        textEditingController.clear();
        focusNode.unfocus();
      });
      chatList.addAll(await ApiServices.sendMessage(
          message: textEditingController.text, chatsList: chatList));
    } catch (error) {
      print(error);
    } finally {
      setState(() {
        scrollToBottom();
        _isTyping = false;
      });
    }
  }
}
