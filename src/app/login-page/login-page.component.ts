import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginService } from '../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  loginService = inject(LoginService);
  _fb = inject(FormBuilder);
  toastrService = inject(ToastrService);
  router = inject(Router);
  isLogin: boolean = true;

  loginForm: FormGroup = this._fb.group({
    EmailId: ['', Validators.required],
    Password: ['', Validators.required],
  });

  createUserFormData: FormGroup = this._fb.group({
    userId:0,
    firstName: ['', Validators.required],
    middleName: [''],
    lastName: ['', Validators.required],
    emailId: ['', Validators.required],
    password: ['', Validators.required],
    fullName:[''],
  });

  onSignupClick() {

    if (this.createUserFormData.valid) {
      this.createUserFormData.patchValue({
        fullName: `${this.createUserFormData.get('firstName')?.value} ${this.createUserFormData.get('middleName')?.value} ${this.createUserFormData.get('lastName')?.value} `,
      });
      // debugger;
      let userDetails = this.createUserFormData.value;
      this.loginService.addUser(userDetails).subscribe((res: any) => {
        console.log(res);
        if (res.result) {
          this.toastrService.success(res?.message, 'Success !', {
            timeOut: 3000,
          });
          this.isLogin = true;
          this.createUserFormData.reset();
        } else {
          this.toastrService.error(res?.message, 'Error !', {
            timeOut: 3000,
          });
        }
      });
    }
  }

  onLoginClick() {
    // debugger;
    const loginDetails = this.loginForm.value;
    console.log(this.loginForm.valid);
    if (this.loginForm.valid) {
      this.loginService.loginUser(loginDetails).subscribe((res: any) => {
        // debugger;
        if (res.result) {
          this.toastrService.success(res?.message, 'Success !', {
            timeOut: 3000,
          });
          sessionStorage.setItem('loginData', JSON.stringify(res.data));
          this.loginForm.reset();
          this.router.navigateByUrl('home');
        } else {
          this.toastrService.error(res?.message, 'Error !', {
            timeOut: 3000,
          });
          this.loginForm.reset();
        }
      },
    (err:any)=>{
       this.toastrService.error(err, 'Error !', {
         timeOut: 3000,
       });
    });
    }
  }
}
