import { Component, OnInit, Output, EventEmitter, NgModule } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {
  @Output() clickEvent = new EventEmitter<string>();

  constructor() { }
  todoData = '클릭 이벤트 발생!';
  ngOnInit() {
  }

  sendTodoItem(e) {
    e.preventDefault();
    const todoItemTextEl = document.getElementById('todoItemText') as HTMLInputElement;
    if(todoItemTextEl.value.length > 0) {
      this.clickEvent.emit(todoItemTextEl.value);
      console.log(todoItemTextEl.value);
    } else {
      
    }
    // todoInputTextEl.value = this.todoData;
    console.log(todoItemTextEl.value);
  }

}
