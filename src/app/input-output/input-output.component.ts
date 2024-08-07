import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { Child1Component } from './child1/child1.component';

@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [CommonModule, ChildComponent, FormsModule, Child1Component],
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.css',
})
export class InputOutputComponent {
  parentInput: string = '';
  childData: string = '';
  inputOutputArr: string[] = [
    `In Angular, @Input and @Output are decorators that are used for communication between components.`,
    `They allow data to be passed from a parent component to a child component and vice versa.`,
  ];

  inputArr: string[] = [
    `The @Input decorator allows a parent component to bind to a property of a child component and pass data to it.`,
    `Syntax :
        parent.component.html

        <app-child [childProperty]="parentProperty"></app-child>`,
    `Syntax:
        parent.component.ts

        import { Component } from '@angular/core';

        @Component({
          selector: 'app-parent',
          templateUrl: './parent.component.html',
          styleUrls: ['./parent.component.css']
        })
        export class ParentComponent {
          parentProperty = 'Data from parent';
        }`,
    `Syntax:
        child.component.ts

        import { Component, Input } from '@angular/core';

        @Component({
          selector: 'app-child',
          templateUrl: './child.component.html',
          styleUrls: ['./child.component.css']
        })
        export class ChildComponent {
          @Input() childProperty: string;`,
    `Syntax:
        child.component.html

        <p>{{ childProperty }}</p>
      `,
    `In this example, the parentProperty from ParentComponent is passed to ChildComponent via the childProperty input.`,
  ];

  outputArr: string[] = [
    `The @Output decorator allows a child component to emit events that a parent component can listen to and respond to.`,
    `
    Syntax:
      parent.component.html

      <app-child (childEvent)="handleChildEvent($event)"></app-child>
    `,
    `Syntax:
      parent.component.ts

      import { Component } from '@angular/core';

      @Component({
        selector: 'app-parent',
        templateUrl: './parent.component.html',
        styleUrls: ['./parent.component.css']
      })
      export class ParentComponent {
        handleChildEvent(event: string): void {
          console.log('Event received from child:', event);
        }
      }`,
    `Syntax:
      child.component.ts

      import { Component, Output, EventEmitter } from '@angular/core';

      @Component({
        selector: 'app-child',
        templateUrl: './child.component.html',
        styleUrls: ['./child.component.css']
      })
      export class ChildComponent {
        @Output() childEvent = new EventEmitter<string>();

        sendEvent(): void {
          this.childEvent.emit('Hello from Child');
        }
      }`,
    `Syntax:
      child.component.html
      <button (click)="sendEvent()">Send Event</button>`,
    `In this example, when the button in ChildComponent is clicked, the sendEvent method emits an event with the message "Hello from Child".`,
    `The ParentComponent listens for this event and handles it with the handleChildEvent method.`,
  ];

  handleChildEvent(event: string) {
    this.childData=event;
  }
}
