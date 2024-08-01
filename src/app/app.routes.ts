import { Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StructuralComponent } from './directive/structural/structural.component';
import { AttributeComponent } from './directive/attribute/attribute.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path:'',
    pathMatch: 'prefix',
    redirectTo:'home',
  },
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
  {
    path: 'pipes',
    component: PipesComponent,
  },
  {
    path: 'forms',
    component: FormsComponent,
  },
];
