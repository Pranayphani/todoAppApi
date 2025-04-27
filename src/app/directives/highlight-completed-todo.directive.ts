import { Directive, effect, ElementRef, inject, input} from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]',
  standalone: true
})
export class HighlightCompletedTodoDirective {
  isCompleted = input(false);
  el=inject(ElementRef);
  stylesEffect=effect(()=>{
    if(this.isCompleted()){
      this.el.nativeElement.style.textDecoration='line-through';
      this.el.nativeElement.style.backgroundColor='green';
      this.el.nativeElement.style.color='black';
    }
    else{
      this.el.nativeElement.style.textDecoration='none';
      this.el.nativeElement.style.backgroundColor='transparent';
      this.el.nativeElement.style.color='black';
    }
  });
}
