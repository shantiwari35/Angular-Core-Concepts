import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { HighlightTextDirective } from '../../styleDirective/highlight-text.directive';

@Component({
  selector: 'app-attribute',
  standalone: true,
  imports: [CommonModule, HighlightTextDirective],
  templateUrl: './attribute.component.html',
  styleUrl: './attribute.component.css',
})
export class AttributeComponent {
  ngClassDirective: string[] = [
    `Adds and removes a set of CSS classes.`,
    `Syntax :
    <div [ngClass]="{'active': isActive, 'disabled': isDisabled}">
      This is a div.
    </div>`,
    'Adds and removes CSS classes on an HTML element.',
    `The CSS classes are updated as follows, depending on the type of the expression evaluation:`,
    `string - the CSS classes listed in the string (space delimited) are added`,
    `Array - the CSS classes declared as Array elements are added`,
    `Object - keys are CSS classes that get added when the expression given in the value evaluates to a truthy value, otherwise they are removed.`,
    `Syntax:
    <some-element
      [ngClass]="'first second'">...</some-element>
    <some-element
      [ngClass]="['first', 'second']">...</some-element>
    <some-element
      [ngClass]="{'first': true, 'second': true, 'third': false}">
      ...</some-element>
    <some-element
      [ngClass]="stringExp|arrayExp|objExp">
      ...</some-element>
    <some-element
      [ngClass]="{'class1 class2 class3' : true}">
      ...</some-element>`,
  ];

  ngStyleDirective: string[] = [
    `An attribute directive that updates styles for the containing HTML element. Sets one or more style properties, specified as colon-separated key-value pairs.`,
    `The key is a style name, with an optional .<unit> suffix (such as 'top.px', 'font-style.em').`,
    `The value is an expression to be evaluated. The resulting non-null value, expressed in the given unit, is assigned to the given style property. If the result of evaluation is null, the corresponding style is removed.`,
    `Set the font of the containing element to the result of an expression.`,
    `Syntax:
    <some-element [ngStyle]="{'font-style': styleExp}">...</some-element>`,
    `Set the width of the containing element to a pixel value returned by an expression.`,
    `Syntax:
    <some-element [ngStyle]="{'max-width.px': widthExp}">...</some-element>`,
    `Set a collection of style values using an expression that returns key-value pairs.`,
    `Syntax:
    <some-element [ngStyle]="objExp">...</some-element>`,
  ];

  randomColor: string = '';
  disabled: boolean = false;
  divStyle: any = {
    height: '10rem',
    width: '30rem',
    'background-color': this.randomColor || '#e0b55d',
  };
  toHideinput() {
    // debugger;
    this.disabled = !this.disabled;
  }

  getRandomColor(): string {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  changeToRandomColor() {
    // debugger;
    this.randomColor = this.getRandomColor();
    this.divStyle['background-color'] = this.randomColor;
  }
}
