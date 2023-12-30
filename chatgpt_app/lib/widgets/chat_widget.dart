import "package:chatgpt_app/constants/constants.dart";
import 'package:flutter/material.dart';

import "../services/assets_manager.dart";

class ChatWidget extends StatelessWidget {
  const ChatWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Material(
          color: cardColor,
          child: Padding(
              padding: const EdgeInsets.all(8.0),
              child: Row(
                children: [
                  Image.asset(
                    AssetsManager.userImage,
                    height: 30,
                    width: 30,
                  ),
                  Text("Hello who are you?")
                ],
              )),
        )
      ],
    );
  }
}
