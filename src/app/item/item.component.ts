import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `<p class="todo-title"> {{ todoItem.title }} <button (click)="removeItem()">
  remove
</button></p>`,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() todoItem: any;
  @Output() remove: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  removeItem() {
  this.remove.emit(this.todoItem);
}
}
