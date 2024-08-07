import { CommonModule } from '@angular/common';
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { LifeCycleChildComponent } from './life-cycle-child/life-cycle-child.component';

@Component({
  selector: 'app-life-cycle-event',
  standalone: true,
  imports: [CommonModule, LifeCycleChildComponent],
  templateUrl: './life-cycle-event.component.html',
  styleUrl: './life-cycle-event.component.css',
})
export class LifeCycleEventComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  executionOrderArr: string[] = [
    `Constructor: Called when the component is instantiated.`,
    `ngOnChanges: Called when any data-bound input property changes.`,
    `ngOnInit: Called once after the first ngOnChanges.`,
    `ngDoCheck: Called during every change detection run.`,
    `ngAfterContentInit: Called once after projecting external content into the component's view.`,
    `ngAfterContentChecked: Called after every check of the component's projected content.`,
    `ngAfterViewInit: Called once after initializing the component's views and child views.`,
    `ngAfterViewChecked: Called after every check of the component's views and child views.`,
    `ngOnDestroy: Called once just before the component is destroyed.`,
  ];
  colorString: string = '';
  constructor() {
    console.log('Constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  changeChildColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    this.colorString = color;
  }
}
