import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { TodoItemsComponent } from '../components/todo-items/todo-items.component';
import { FilterTodosPipe } from '../pipes/filter-todos.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos',
  imports: [TodoItemsComponent,FilterTodosPipe,FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit{
  todoService=inject(TodosService);
  
  todoItems: Todo[]=[];
  ngOnInit(){
    this.todoService.getTodosFromApi()
    .subscribe((todos)=>{
      console.log(todos);
      this.todoItems=todos;
    });
  }
}
