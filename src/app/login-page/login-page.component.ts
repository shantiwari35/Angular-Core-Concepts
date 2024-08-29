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
    firstName: ['', Validators.required],
    middleName: [''],
    lastName: ['', Validators.required],
    mobileNo: ['', Validators.required],
    emailId: ['', Validators.required],
    altMobileNo: ['', Validators.required],
    password: ['', Validators.required],
    userAddress: this._fb.group({
      city: ['Nagpur'],
      state: ['MH'],
      pincode: ['411028'],
      addressLine: [''],
    }),
    userSocialDetails: this._fb.group({
      facebookProfileUrl: ['string'],
      linkdinProfileUrl: ['string'],
      instagramHandle: ['string'],
      twitterHandle: ['string'],
    }),
  });

  onSignupClick() {
    const userDetails = this.createUserFormData.value;
    if (this.createUserFormData.valid) {
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
      });
    }
  }
}
