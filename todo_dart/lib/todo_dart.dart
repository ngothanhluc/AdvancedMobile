import 'dart:convert';

import 'package:todo_dart/todo_interface.dart' as classes;
import "dart:io";

void todoApp() {
  var todoList = <classes.Task>[];

  while (true) {
    print('\x1B[2J\x1B[0;0H');
    var choice = menu(todoList);
    switch (choice) {
      case "1":
        print('\x1B[2J\x1B[0;0H');
        printTodoList(todoList);
        print("Nhấn Enter để tiếp tục");
        stdin.readLineSync();
        break;
      case "2":
        print('\x1B[2J\x1B[0;0H');
        addTasks(todoList);
        print("Nhấn Enter để tiếp tục");
        stdin.readLineSync();
        break;
      case "3":
        print('\x1B[2J\x1B[0;0H');
        markIsDone(todoList);
        print("Nhấn Enter để tiếp tục");
        stdin.readLineSync();
        break;
      case "4":
        print('\x1B[2J\x1B[0;0H');
        removeTask(todoList);
        print("Nhấn Enter để tiếp tục");
        stdin.readLineSync();
        break;
      case "5":
        print('\x1B[2J\x1B[0;0H');
        filterTask(todoList);
        print("Nhấn Enter để tiếp tục");
        stdin.readLineSync();
        break;
      case "6":
        print("Đã thoát ứng dụng");
        return;

      default:
        print("Lựa chọn không hợp lệ");
        print("Nhấn Enter để tiếp tục");
        stdin.readLineSync();
    }
  }
}

String? menu(tasks) {
  print("Chọn chức năng: \n"
      "1. Xem danh sách công việc\n"
      "2. Thêm công việc\n"
      "3. Đánh dấu công việc là hoàn thành/chưa hoàn thành\n"
      "4. Xóa công việc\n"
      "5. Lọc công việc\n"
      "6. Thoát\n");
  print("Nhập lựa chọn của bạn: ");
  var choice = stdin.readLineSync();
  return choice;
}

//1 Xem danh sách công việc
void printTodoList(List<classes.Task> tasks) {
  if (tasks.isEmpty) {
    print("Danh sách trống");
    return;
  }
  print("\nDanh sách công việc:");
  for (var i = 0; i < tasks.length; i++) {
    print(
        "${i + 1}. ${tasks[i].name} - ${tasks[i].isDone ? "Hoàn thành" : "Chưa hoàn thành"}");
  }
}

//2 Thêm công việc
void addTasks(List<classes.Task> tasks) {
  print("THÊM CÔNG VIỆC");
  print("Nhập tên công việc: ");
  var name = stdin.readLineSync(encoding: utf8)!;
  print("Nhập trạng thái công việc: ");
  print("Nhập số 1. Đã hoàn thành\n"
      "Nhập số 2. Chưa hoàn thành");
  var isDone = stdin.readLineSync();

  switch (isDone) {
    case "1":
      tasks.add(classes.Task(name, true));
      break;
    case "2":
      tasks.add(classes.Task(name, false));
      break;
    default:
      tasks.add(classes.Task(name, false));
  }
  print("Thêm công việc thành công!");
}
//3 Đánh dấu công việc là hoàn thành/chưa hoàn thành

void markIsDone(tasks) {
  if (tasks.isEmpty) {
    print("Không có công việc nào để chỉnh sửa");
    return;
  }
  print("Đánh dấu công việc là hoàn thành/chưa hoàn thành");
  var index = getTaskIndex(tasks);
  if (index != null) {
    tasks[index].isDone = !tasks[index].isDone;
    print(
        "Đã cập nhật trạng thái công việc ${tasks[index].name}: ${tasks[index].isDone ? "Hoàn thành" : "Chưa hoàn thành"}");
  } else {
    print("Không tìm thấy công việc");
  }
}

// 4 Xóa công việc
void removeTask(tasks) {
  if (tasks.isEmpty) {
    print("Không có công việc nào để xoá");
    return;
  }
  var index = getTaskIndex(tasks);
  if (index != null) {
    var removed = tasks.removeAt(index);
    print("Đã xóa công việc ${removed.name}");
  } else {
    print("Không tìm thấy công việc");
  }
}

bool test(classes.Task t) {
  return t.isDone;
}

//5 Lọc công việc
void filterTask(tasks) {
  if (tasks.isEmpty) {
    print("Không có công việc nào để lọc");
    return;
  }
  print("Lọc công việc: ");
  print("1. Hoàn thành");
  print("2. Chưa hoàn thành");
  var filterInput = stdin.readLineSync();

  if (filterInput == "1") {
    List<classes.Task> doneTasks = tasks.where((t) => test(t)).toList();
    printTodoList(doneTasks);
  } else if (filterInput == "2") {
    var notDoneTasks = tasks.where((t) => !t.isDone);
    printTodoList(notDoneTasks.toList());
  } else {
    print("Lựa chọn không hợp lệ");
  }
}

int? getTaskIndex(List<classes.Task> tasks) {
  printTodoList(tasks);
  print("Nhập số thứ tự công việc: ");
  var input = stdin.readLineSync();

  if (input == null || input.isEmpty) {
    return null;
  }

  var index = int.tryParse(input);
  return (index != null && index > 0 && index <= tasks.length)
      ? index - 1
      : null;
}
