import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoItem = 'material디자인 입히기';
  constructor() { }

  ngOnInit() {
  }

  sendItem(txt) {
    this.todoItem = txt;
    alert(txt);
  }

}
