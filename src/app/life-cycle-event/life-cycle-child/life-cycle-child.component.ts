import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './life-cycle-child.component.html',
  styleUrl: './life-cycle-child.component.css',
})
export class LifeCycleChildComponent implements OnChanges {
  @Input() color: string = '';
  styleObj: any;
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.styleObj = {
      'background-color': this.color,
    };
  }
}
