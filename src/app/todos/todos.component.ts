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
  todoItems=signal<Array<Todo>>([]);
  searchTerm=signal('');

  ngOnInit(){
    this.todoService.getTodosFromApi()
    .pipe(
      catchError((err)=>{
        console.log(err);
        throw err;
      })
    )
    .subscribe((todos)=>{
      console.log(todos);
      this.todoItems.set(todos);
    });
  }

  updateTodoItem(todoItem: Todo){
    this.todoItems.update((todos)=>{
      return todos.map(todo=>{
        if(todo.id===todoItem.id){
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      });
    });
  }
}
