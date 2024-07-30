import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgControlStatusGroup } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [NgFor, CommonModule, FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  interpolationVar: string = `Syntax: {{ expression }}
          <h1>{{ title }}</h1>`;

  propertyBindingArr: string[] = [
    'Binds data from the component to an HTML element property.',
    'Syntax: [property]="expression"',
    'Basic Property Binding: [property]="expression"',
    `// component.ts
    Syntax:export class AppComponent {
      imageUrl = 'https://example.com/image.jpg';
      }
      <img [src]='imageUrl' />`,
    'Attribute Binding: [attr.attributeName]="expression"',
    `// component.ts
      Syntax:export class AppComponent {
        colSpan = 2;
      }
      <!-- component.html -->
      <td [attr.colspan]="colSpan">Cell content</td>`,
    'Class Binding: [class.className]="expression"',
    `You can dynamically add or remove CSS classes to an element using class binding.`,
    ` Syntax : component.ts
    export class AppComponent {
      isActive = true;
    }
    <!-- component.html -->
    <div [class.active]="isActive">Content</div>`,
    'Style Binding: [style.styleName]="expression"',
    `// component.ts
Syntax: export class AppComponent {
  isSpecial = true;
}
<!-- component.html -->
<div [style.color]="isSpecial ? 'red' : 'green'">
Styled text</div>`,
    'Binding to an Object Property: [attr.data-id]="object.property"',
    `// component.ts
Syntax: export class AppComponent {
  item = {
    id: 1,
    name: 'Item 1'
  };
}
<!-- component.html -->
<div [attr.data-id]="item.id">{{ item.name }}</div>`,
    'Property Binding with Expressions: [property]="complexExpression"',
    `// component.ts
Syntax: export class AppComponent {
  baseUrl = 'https://example.com/';
  imageId = '12345';
}
<!-- component.html -->
<img [src]="baseUrl + 'images/' + imageId + '.jpg'" />`,
    `Binding to Component Properties: <child-component [property]="expression">
    </child-component>`,
    `// child.component.ts
    Syntax:
@Component({
  selector: 'app-child',
  template: <p>{{childTitle}}</p>
})
export class ChildComponent {
  @Input() childTitle: string;
}

// parent.component.ts
@Component({
  selector: 'app-parent',
  template: '<app-child [childTitle]="parentTitle">
  </app-child>'
})
export class ParentComponent {
  parentTitle = 'Title from Parent';
}`,
  ];

  eventbinding: string[] = [
    ` html --> .ts`,
    `Event binding in Angular is a powerful way to handle user interactions in your application. It allows you to bind events such as clicks, keypresses, and more to methods in your component. This helps you to respond to user actions and update the application state accordingly.`,
    `// app.component.ts
Syntax :import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  handleClick() {
    console.log('Button clicked!');
  }
}
html
Copy code
<!-- app.component.html -->
<button (click)="handleClick()">Click me</button>`,
  ];

  twoWayBinding: string[] = [
    `Two-way binding in Angular allows you to synchronize data between the component and the view. This means that any changes made in the view are automatically reflected in the component and vice versa. This is especially useful for form inputs, where you need to keep the data model in sync with the user interface.`,
    `Syntax :
    // app.component.ts
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'John Doe';
}
<!-- app.component.html -->
<input [(ngModel)]="name" />
<p>Hello, {{ name }}!</p>`,
    `Syntax: for below example
      For example:
      <br>
      <label for="inputText">
            Enter Any text</label>
      <input type="text"
      id="inputText"
      name='inputText'
      [(ngModel)]='text'/>
      <br>
      <span>Entered Text : {{text}}</span>
      <br>
      <span>{{text|json}}</span>`,
  ];

  signalBinding: string[] = [
    `A signal is a wrapper around a value that notifies interested consumers when that value changes. Signals can contain any
        value, from primitives to complex data structures.`,
    `You read a signal's value by calling its getter function, which allows Angular to track where the signal is used.`,
    ` Signals may be either writable or read-only.`,
    `Syntax:
    To set signal
    count:number=signal(0);
    `,
    `To change the value of a writable signal, either .set() it directly:`,
    `Syntax:
    To update signal
    count.set(1);`,
    `or use the .update() operation to compute a new value from the previous one:`,
    `Syntax:
    // Increment the count by 1.
count.update(value => value + 1);`,
  ];

  text: any = '';
  selectedDropdown: string = 'ReactJS';
  firstName: string = '';
  firstnameSignal = signal('Initial Value');

  onClick() {
    alert('Hello there! This is a click event binding example!');
  }
}
