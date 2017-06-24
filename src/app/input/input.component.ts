import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
<input
 (keyup.enter)="changeTitle($event.target.value)"
 #inputElement
 >
<button (click)="changeTitle(inputElement.value)">Save</button>
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

changeTitle(newTitle: string): void {
  this.submit.emit(newTitle);
}

}
