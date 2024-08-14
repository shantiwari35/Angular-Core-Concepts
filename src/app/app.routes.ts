import { Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StructuralComponent } from './directive/structural/structural.component';
import { AttributeComponent } from './directive/attribute/attribute.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { LifeCycleEventComponent } from './life-cycle-event/life-cycle-event.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { DecoratorsComponent } from './decorators/decorators.component';
import { ViewChildDecoratorComponent } from './view-child-decorator/view-child-decorator.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'home',
  },
  {
    path: 'data-binding',
    component: DataBindingComponent,
    title: 'Data Binding',
  },
  {
    path: 'structural-directive',
    component: StructuralComponent,
    title: 'Structural Directive',
  },
  {
    path: 'attribute-directive',
    component: AttributeComponent,
    title: 'Attribute Directive',
  },
  {
    path: 'pipes',
    component: PipesComponent,
    title: 'Pipes',
  },
  {
    path: 'forms',
    component: FormsComponent,
    title: 'Forms',
  },
  {
    path: 'httpClient',
    component: HttpClientComponent,
    title: 'Http Client CRUD',
  },
  {
    path: 'inputOutput',
    component: InputOutputComponent,
    title: '@Input/@Output',
  },
  {
    path: 'lifecycle-event',
    component: LifeCycleEventComponent,
    title: 'life Cycle Event',
  },
  {
    path: 'ng-template',
    component: NgTemplateComponent,
    title: 'Ng-Template',
  },
  {
    path: 'decorators',
    component: DecoratorsComponent,
    title: '@ Decorator',
  },
  {
    path: 'viewChild',
    component: ViewChildDecoratorComponent,
    title: 'View Child/Children',
  },
];
