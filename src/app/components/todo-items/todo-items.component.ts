import { Component, input, output } from '@angular/core';
import { Todo } from '../../model/todo.type';
import { HighlightCompletedTodoDirective } from '../../directives/highlight-completed-todo.directive';


@Component({
  selector: 'app-todo-items',
  imports: [HighlightCompletedTodoDirective],
  templateUrl: './todo-items.component.html',
  styleUrl: './todo-items.component.css'
})
export class TodoItemsComponent{
  todo=input.required<Todo>();
  todoToggled=output<Todo>();

  todoClicked(){
    this.todoToggled.emit(this.todo());
  }
}
