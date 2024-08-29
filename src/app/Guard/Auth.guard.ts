import { inject } from '@angular/core';
import { Router, type CanActivateChildFn } from '@angular/router';
import { Session } from 'inspector';

export const authGuard: CanActivateChildFn = (childRoute, state) => {
  let sessionData =sessionStorage.getItem('loginData');
  let router=inject(Router);
  let sessionObj=sessionData != null ? JSON.parse(sessionData):null;
  if(sessionObj?.userId){
    return true;
  }else{
    router.navigateByUrl('/login');
    sessionStorage.removeItem('loginData');
    return false;
  }
};
