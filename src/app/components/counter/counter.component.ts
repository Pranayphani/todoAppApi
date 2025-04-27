import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count: number=0;

  Increment(){
    this.count++;
  }

  Reset(){
    this.count=0;
  }

  Decrement(){
    this.count--;
  }
}
