import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  standalone: true,
  imports: [],
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
}
