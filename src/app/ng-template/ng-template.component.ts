import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ng-template',
  standalone: true,
  imports: [CommonModule, MatIcon, RouterModule],
  templateUrl: './ng-template.component.html',
  styleUrl: './ng-template.component.css',
})
export class NgTemplateComponent {
  ngTemplateArr: string[] = [
    '`<ng-template>` is an Angular element for rendering HTML.',
    'It is used for defining template content that can be rendered later in the view',
    `Unlike other HTML elements, <ng-template> does not render anything by itself.`,
    `Instead, it acts as a container for a block of HTML that can be displayed based on certain conditions or dynamically inserted into the DOM using structural directives such as ngIf, ngFor, and ngSwitch.`,
  ];

  exampleNgTemplate: string[] = [
    `Let's consider a basic example using *ngIf.`,
    `Basic Example with *ngIf`,
    `Here we use <ng-template> to conditionally display a message.`,
    `Syntax:
      <!-- app.component.html -->
      <div *ngIf="isLoggedIn; else loggedOutTemplate">
        Welcome back, user!
      </div>
      <ng-template #loggedOutTemplate>
        <p>Please log in.</p>
      </ng-template>
    `,
    `In the above example, if isLoggedIn is true, "Welcome back, user!" is displayed. If isLoggedIn is false, the content inside the <ng-template> with the #loggedOutTemplate reference is displayed, which is "Please log in."`,
    `Using ng-template with ngFor
      This example shows how to use <ng-template> with ngFor.`,
    `Syntax:
    <!-- app.component.html -->
      <ul>
        <ng-container *ngFor="let item of items; let i = index">
          <ng-template [ngTemplateOutlet]="itemTemplate"
          [ngTemplateOutletContext]="{ $implicit: item, index: i }">
          </ng-template>
        </ng-container>
      </ul>

      <ng-template #itemTemplate let-item let-i="index">
        <li>{{ i + 1 }}. {{ item }}</li>
      </ng-template>`,
    `Syntax:
      // app.component.ts
      import { Component } from '@angular/core';

      @Component({
        selector: 'app-root',
        templateUrl: './app.component.html'
      })
      export class AppComponent {
        items = ['Item 1', 'Item 2', 'Item 3'];
      }
      `,
  ];

  ngContainerArr: string[] = [
    `<ng-container> is an Angular directive used to group a set of elements without adding an extra node to the DOM.`,
    `It is especially useful when you want to apply structural directives (like *ngIf, *ngFor, etc.) to multiple elements without introducing an additional wrapper element, which could interfere with the CSS styling or layout.`,
  ];
  ngContainerDiscription: string[] = [
    `No Rendered Output: <ng-container> does not get rendered in the DOM, meaning it does not appear as an extra element in the DOM structure.`,
    `Structural Directive Host: It acts as a host for structural directives, allowing you to conditionally render a group of elements or repeat a group of elements without adding extra nodes.`,
    `Example:

    Syntax:
    <!-- app.component.html -->
      <ng-container *ngIf="isLoggedIn; else loggedOutTemplate">
        <ng-container *ngFor="let item of items">
          <div>
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
          </div>
        </ng-container>
      </ng-container>
      <ng-template #loggedOutTemplate>
        <div>
          <h1>Please log in</h1>
          <p>You need to log in to access this content.</p>
        </div>
      </ng-template>`,

    `Syntax:
    // app.component.ts
      import { Component } from '@angular/core';

      @Component({
        selector: 'app-root',
        templateUrl: './app.component.html'
      })
      export class AppComponent {
        isLoggedIn = true;
        items = [
          { title: 'Item 1', description: 'Description 1' },
          { title: 'Item 2', description: 'Description 2' },
          { title: 'Item 3', description: 'Description 3' }
        ];
      }`,
  ];
  ngTemplateDiv = false;
  customer = [
    { name: 'Item 1', description: 'Description 1' },
    { name: 'Item 2', description: 'Description 2' },
    { name: 'Item 3', description: 'Description 3' },
  ];

  toggleTemplateDiv() {
    this.ngTemplateDiv = !this.ngTemplateDiv;
  }
}
