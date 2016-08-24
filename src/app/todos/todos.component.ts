import { Component, OnInit } from '@angular/core';
import {TodoService} from '../services/todo.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-todos',
  templateUrl: 'todos.component.html',
  styleUrls: ['./todos.component.scss'],
  providers: [TodoService]
})

export class TodosComponent implements OnInit { 

  todos = [];
  id: number;
  
  constructor(private todoService: TodoService) {}
  
  ngOnInit() {
    this.todoService.getTodos()
      .map(res => res.json())
      .subscribe(todos => this.todos = todos);
  }
  
  addTodo($event, todoText) {
    if ($event.which === 1) {
      let result;
      let newTodo = {
        text: todoText.value,
        isCompleted: false
      };
      
      result = this.todoService.saveTodo(newTodo);
      result.subscribe(x => {
        this.todos.push(newTodo);
        todoText.value = '';
      });
    }
  }
  
  updateStatus(todo) {
    let _todo = {
      _id: todo._id,
      text: todo.text,
      isCompleted: !todo.isCompleted
    };
    
    this.todoService.updateTodo(_todo)
      .map(res => res.json())
      .subscribe(data => {
        todo.isCompleted = !todo.isCompleted;
      });
  }
  
  setEditState(todo, state) {
    if (state) {
      todo.isEditMode = state;
    } else {
      delete todo.isEditMode;
    }
  }
  
  updateTodoText($event, todo) {
    if ($event.which === 13) {
      todo.text = $event.target.value;
      let _todo = {
        _id: todo._id,
        text: todo.text,
        isCompleted: todo.isCompleted
      };
      
      this.todoService.updateTodo(_todo)
      .map(res => res.json())
      .subscribe(data => {
        this.setEditState(todo, false);
      });
    }
  }
  
  deleteTodo(todo) {
    let todos = this.todos;
    this.todoService.deleteTodo(todo._id)
      .map(res => res.json())
      .subscribe(data => {
        if (data.n === 1) {
          for (let i = 0; i < todos.length; i++) {
            if (todos[i].id === todo._id) {
              todos.splice(i, 1);
            }
          }
        }
      });
  }
}
