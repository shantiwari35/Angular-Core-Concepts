import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  RequiredValidator,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule, JsonPipe],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
})
export class FormsComponent {
  userForm!: NgForm;
  userFormReactive!: FormGroup;
  reactiveformValue: any;
  constructor(private _fb: FormBuilder) {
    this.userFormReactive = this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      age: ['', Validators.required],
      mobile: ['', [Validators.required]],
      address: ['', [Validators.required]],
      gender: ['', Validators.required],
      tc: ['', Validators.required],
    });
  }

  templateFormArr: string[] = [
    `Template-driven forms are simple to use and suitable for simple form scenarios`,
    `They rely heavily on Angular directives and are defined in the template.`,
    `Syntax:
    import { Component } from '@angular/core';
    @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css']
    })
    export class AppComponent {
      user = {
        name: '',
        email: ''
      };

      onSubmit() {
        console.log('Form submitted:', this.user);
      }
    }`,
    `Syntax:
     <form #userForm="ngForm" class="formG" (submit)="onUserFormSubmit()">
        <div class="row">
          <div class="col-6">
            <label for="firstName">First Name</label>
            <input type="text" name="firstName" class="form-control" #firstN="ngModel" [(ngModel)]="user.firstName"
              required>
            <div *ngIf="firstN.errors?.['required'] && firstN.touched" class="alert alert-danger">
              First Name is required
            </div>
          </div>`,
    `Syntax:
      Declare this in .ts
      userForm!: NgForm;`,
  ];

  reactiveFormArr: string[] = [
    `Reactive forms are more powerful and suitable for complex scenarios.`,
    `They provide more control and are defined in the component class.`,
    `Import 'ReactiveFormsModule' in the component`,
    `Syntax:
      imports: [BrowserModule, ReactiveFormsModule],`,
    `html template of reactive form`,
    `Syntax:
     <form [formGroup]="userFormReactive" class="formG" (ngSubmit)="onUserFromReactive()">
        <div class="row">
          <div class="col-6">
            <label for="firstName">First Name</label>
            <input type="text" name="firstName" class="form-control" formControlName="firstName">
            <div
              *ngIf="userFormReactive.controls['firstName'].errors?.['required']
               &&
               userFormReactive.controls['firstName'].touched"
              class="alert alert-danger">
              First Name is required
            </div>
          </div>`,
    `component.ts file`,
    `Syntax:
      userFormReactive!: FormGroup;
      reactiveformValue: any;
      constructor(private _fb: FormBuilder) {
        this.userFormReactive = this._fb.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          dob: ['', Validators.required],
          age: ['', Validators.required],
          mobile: ['', [Validators.required]],
          address: ['', [Validators.required]],
          gender: ['', Validators.required],
          tc: ['', Validators.required],
        });
      }

       onUserFromReactive() {
        this.reactiveformValue = this.userFormReactive.value;
        this.userFormReactive.reset();
      }
      `,
  ];
  user: any = {
    firstName: '',
    lastName: '',
    age: '',
    dob: '',
    mob: '',
    address: '',
    gender: '',
    tc: '',
  };

  onUserFormSubmit() {
    alert(this.user);
    this.userForm.reset;
  }

  onUserFromReactive() {
    this.reactiveformValue = this.userFormReactive.value;
    this.userFormReactive.reset();
  }
}
