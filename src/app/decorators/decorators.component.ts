import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-decorators',
  standalone: true,
  imports: [CommonModule,MatIcon],
  templateUrl: './decorators.component.html',
  styleUrl: './decorators.component.css',
})
export class DecoratorsComponent {
  decoratorMainArr: any = [
    `In Angular, decorators are special functions that are prefixed with an @ symbol and are used to attach metadata to classes, methods, properties, or parameters. `,
    `They play a crucial role in Angular by defining the structure and behavior of Angular components, services, modules, etc.`,
    `Types of Decorators in Angular:Class Decorators, Property Decorators, Method Decorators, Parameter Decorators`,
  ];
  classDecoratorArr: any = [
    `Class decorators are used to define metadata for classes. The most common class decorators in Angular are:`,
    `@Component: Defines a component in Angular.`,
    `@Directive: Defines a directive in Angular.`,
    `@Pipe: Defines a pipe in Angular.`,
    `@NgModule: Defines a module in Angular.`,
    `@Injectable: Defines a service or other injectable class in Angular.`,
    `Example:
      Syntax
      @Component

        import { Component } from '@angular/core';

        @Component({
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        })
        export class AppComponent {
          title = 'my-app';
        }`,
    `Example:
      Syntax
      @Directive

      import { Directive, ElementRef, Renderer2 } from '@angular/core';

      @Directive({
        selector: '[appHighlight]'
      })
      export class HighlightDirective {
        constructor(el: ElementRef, renderer: Renderer2) {
          renderer.setStyle(el.nativeElement, 'backgroundColor', 'yellow');
        }
      }`,
    `Example:
      Syntax
      @Pipe

        import { Pipe, PipeTransform } from '@angular/core';

        @Pipe({
          name: 'capitalize'
        })
        export class CapitalizePipe implements PipeTransform {
          transform(value: string): string {
            return value.charAt(0).toUpperCase() + value.slice(1);
          }
        }`,
    `Example:
        Syntax
        @NgModule

        import { NgModule } from '@angular/core';
        import { BrowserModule } from '@angular/platform-browser';
        import { AppComponent } from './app.component';

        @NgModule({
          declarations: [AppComponent],
          imports: [BrowserModule],
          providers: [],
          bootstrap: [AppComponent]
        })
        export class AppModule {}`,
    `Example:
      Syntax
      @Injectable

      import { Injectable } from '@angular/core';

      @Injectable({
        providedIn: 'root'
      })
      export class DataService {
        getData() {
          return ['data1', 'data2', 'data3'];
        }
      }`,
  ];
  PropertyDecoratorArr: any = [
    `Property decorators are used to define metadata for properties inside a class. The common property decorators in Angular are:`,
    `@Input: Binds a property to an input property of a component.`,
    `Example Syntax:
    @Input

      import { Component, Input } from '@angular/core';

      @Component({
        selector: 'app-child',
        template: '<p>{{ data }}</p>'
      })
      export class ChildComponent {
        @Input() data: string;
      }
    `,
    `@Output: Binds a property to an output property of a component.`,
    `Example Syntax:
    @Output

    import { Component, Output, EventEmitter } from '@angular/core';

    @Component({
      selector: 'app-child',
      template: '<button (click)="sendData()">Send Data</button>'
    })
    export class ChildComponent {
      @Output() dataEvent = new EventEmitter<string>();

      sendData() {
        this.dataEvent.emit('data from child');
      }
    }
    `,
    `@ViewChild: Binds a property to a view child (a child component or directive within the component’s view).`,
    `Example Syntax:
      @ViewChild

      import { Component, ViewChild, AfterViewInit } from '@angular/core';
      import { ChildComponent } from './child.component';

      @Component({
        selector: 'app-parent',
        template: '<app-child></app-child>'
      })
      export class ParentComponent implements AfterViewInit {
        @ViewChild(ChildComponent) childComponent: ChildComponent;

        ngAfterViewInit() {
          console.log(this.childComponent.data);
        }
      }
    `,
    `@ViewChildren: Binds a property to multiple view children.`,
    `Example Syntax:
      @ViewChildren

      import { Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
      import { ChildComponent } from './child.component';

      @Component({
        selector: 'app-parent',
        template: '<app-child></app-child><app-child></app-child>'
      })
      export class ParentComponent implements AfterViewInit {
        @ViewChildren(ChildComponent) children: QueryList<ChildComponent>;

        ngAfterViewInit() {
          this.children.forEach(child => console.log(child.data));
        }
      }`,
  ];
  methodDecoratorsArr: string[] = [
    `Method decorators are used to define metadata for methods inside a class. The common method decorators in Angular are:`,
    `@HostListener: Listens to events on the host element of the directive/component.`,

    `Example Syntax:
    @HostListener

      import { Directive, HostListener } from '@angular/core';

      @Directive({
        selector: '[appClick]'
      })
      export class ClickDirective {
        @HostListener('click', ['$event'])
        onClick(event: Event) {
          console.log('Element clicked', event);
        }
      }
    `,
    `@HostBinding: Binds a host element property to a directive/component property.`,
    `Example Syntax:
    @HostBinding

    import { Directive, HostBinding } from '@angular/core';

    @Directive({
      selector: '[appBackground]'
    })
    export class BackgroundDirective {
      @HostBinding('style.backgroundColor') backgroundColor = 'blue';
    }`,
  ];
  parameterDecoratorsArr: string[] = [
    `Parameter decorators are used to define metadata for parameters in the constructor of a class. The common parameter decorator in Angular is:`,
    `@Inject: Specifies a custom provider to use when injecting a dependency.`,
    `Example Syntax:
      @Inject

        import { Component, Inject } from '@angular/core';
        import { DataService } from './data.service';

        @Component({
          selector: 'app-root',
          template: '<p>Check the console</p>'
        })
        export class AppComponent {
          constructor(@Inject(DataService) private dataService) {
            console.log(this.dataService.getData());
          }
        }
    `,
  ];
}
