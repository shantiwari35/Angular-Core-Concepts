import { Component, EventEmitter, Output } from '@angular/core';
import { OutgoingMessage } from 'http';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
})
export class Child1Component {
  @Output('clickevent') event = new EventEmitter<string>();

  emitEvent(){
    this.event.emit('child to parent event emitted successfully!')
  }
}
