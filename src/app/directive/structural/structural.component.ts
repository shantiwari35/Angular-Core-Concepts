import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structural.component.html',
  styleUrl: './structural.component.css',
})
export class StructuralComponent {
  ngIfDirective: string[] = [
    'Adds or removes an element based on a Boolean expression.',
    `Syntax: <div *ngIf="isVisible">This will be displayed
    if isVisible is true.</div>`,
    'For more Understanding, go through the code.',
  ];

  ngForDirective: string[] = [
    'Iterates over a collection and renders a template for each item.',
    `Syntax:
      <ul>
        <li *ngFor="let item of items">{{ item }}</li>
      </ul>`,
    `Go through the code to see example`,
  ];
  ngSwitchDirective: string[] = [
    'Conditionally includes a set of elements based on a switch expression.',
    `Syntax:
      <div [ngSwitch]="condition">
        <div *ngSwitchCase="'A'">Case A</div>
        <div *ngSwitchCase="'B'">Case B</div>
        <div *ngSwitchDefault>Default Case</div>
      </div>`,
  ];

  selectedMeme: string = '';
  isVisible: string = 'false';

  onVisibilityChange(event: any) {
    this.isVisible = event.target.value;
  }

  changeMEME(event:any){
    this.selectedMeme=event.target.value;
    console.log(this.selectedMeme);
  }
}
