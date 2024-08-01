import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { interval, map, Observable } from 'rxjs';
import { ExponentialStrengthPipe } from '../exponential-strength.pipe';


@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule, FormsModule,ExponentialStrengthPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})
export class PipesComponent {
  pipeString: string = '';
  testDatePipe: any = '';
  numberPipeTest: number = 0;
  mainNum: number = 0;
  exponentNum:number=0;

  pipeArr: string[] = [
    `In Angular, pipes are a way to transform data in templates`,
    `They can be used to format dates, numbers, strings, and other data types in a declarative way`,
    `Pipes can be built-in or custom, and they can be used in template expressions to enhance the readability and maintainability of your code`,
  ];

  builtInArr: string[] = [
    `DatePipe: Formats a date value according to locale rules.`,
    `Syntax:
    {{ today | date:'yyyy-MM-dd' }}`,
    `UpperCasePipe: Transforms text to uppercase.`,
    `Syntax:
    {{ 'hello' | uppercase }}`,
    `LowerCasePipe: Transforms text to lowercase.`,
    `Syntax:
    {{ 'HELLO' | lowercase }}`,
    `CurrencyPipe: Formats a number as currency.`,
    `Syntax:
    {{ 1234.56 | currency:'USD':true }}`,
    `DecimalPipe: Formats a number as decimal.`,
    `Syntax:
    {{ 3.14159 | number:'1.2-2' }}`,
    `PercentPipe: Formats a number as a percentage.`,
    `Syntax:
    {{ 0.75 | percent }}`,
    `JsonPipe: Converts a value into a JSON string.`,
    `Syntax:
    {{ {name: 'John', age: 30} | json }}`,
    `SlicePipe: Slices an array or a string.`,
    `Syntax:
    {{ [1, 2, 3, 4, 5] | slice:1:3 }}`,
    `AsyncPipe: Unwraps a value from an asynchronous primitive (Promise or Observable).`,
    `Syntax:
    {{ observableData | async }}`,
  ];

  customPipeArr: string[] = [
    `Custom pipes can be created to transform data in a way that suits your specific requirements.`,
    `Example: Creating a custom exponentialStrength pipe that raises a number to a power.`,
    `Generate a new pipe using Angular CLI:`,
    `Syntax:
      ng generate pipe exponentialStrength`,
    `Use the custom pipe in a template:`,
    `Syntax:
    {{ 2 | exponentialStrength:'10' }} <!-- Output: 1024 -->`,
  ];
}
