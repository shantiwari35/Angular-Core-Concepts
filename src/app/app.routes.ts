import { Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StructuralComponent } from './directive/structural/structural.component';
import { AttributeComponent } from './directive/attribute/attribute.component';

export const routes: Routes = [
  {
    path: 'data-binding',
    component: DataBindingComponent,
  },
  {
    path: 'structural-directive',
    component: StructuralComponent,
  },
  {
    path: 'attribute-directive',
    component: AttributeComponent,
  },
];
