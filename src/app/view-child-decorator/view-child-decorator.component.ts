import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-view-child-decorator',
  standalone: true,
  imports: [MatIcon, CommonModule],
  templateUrl: './view-child-decorator.component.html',
  styleUrl: './view-child-decorator.component.css',
})
export class ViewChildDecoratorComponent implements AfterViewInit {
  @ViewChild('exampleInputEmail1') inputField!: ElementRef;
  @ViewChild('btnChild') btn!: ElementRef;
  fieldval!:string;
  viewChildMainArr: string[] = [
    `In Angular, @ViewChild and @ViewChildren are decorators used to access child components, directives, or DOM elements from a parent component class.`,
    `They are commonly used to interact with elements rendered in the template. Here's a detailed explanation of each:`,
  ];

  viewChild: any = [
    `Purpose: To get a reference to a single child element or component.`,
    `Usage: When you need to access a single DOM element, component, or directive in the template.`,
    `Syntax:
      @ViewChild(selector: Type | string, options?: { static: boolean }): QueryList<T>`,
    `selector: The name of the component, directive, or template reference variable.`,
    `options: Optional configuration object. The static property can be set to true or false:
              true if you want to access the child component in ngOnInit.
              false if you want to access the child component in ngAfterViewInit`,
    `Example:Component Template`,
    `Syntax:
      Component template:
      <app-child-component #childComponent></app-child-component>
      <button #myButton>Click me</button>`,
    `Syntax:
      Parent component class:

      import { Component, ViewChild, AfterViewInit } from '@angular/core';
      import { ChildComponent } from './child.component';

      @Component({
        selector: 'app-parent',
        templateUrl: './parent.component.html'
      })
      export class ParentComponent implements AfterViewInit {
        @ViewChild('childComponent') childComponent!: ChildComponent;
        @ViewChild('myButton', { static: true }) myButton!: ElementRef;

        ngAfterViewInit() {
          console.log(this.childComponent);
          console.log(this.myButton.nativeElement);
        }
      }`,
  ];
  ngAfterViewInit(): void {
    console.log(this.inputField);
    console.log(this.btn);
  }
  onchangeInputField() {
    const fieldval = this.inputField.nativeElement.value;
    console.log(fieldval);
    this.fieldval=fieldval;
  }
}




















