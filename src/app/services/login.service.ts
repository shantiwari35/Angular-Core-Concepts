import { inject, Injectable } from '@angular/core';
import { environment } from '../../environment';
import { HttpClient } from '@angular/common/http';
import { apiEndpoint } from '../../api-endpoint';
import { ToastrService } from 'ngx-toastr';
import { pipe, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseUrl = environment.apiBaseUrlv2;
  constructor() {}

  https = inject(HttpClient);
  toastrService = inject(ToastrService);

  addUser(user: any) {
    return this.https.post<any>(
      `${this.baseUrl}${apiEndpoint.createNewUser}`,
      user
    );
  }

  loginUser(user:any){
    return this.https.post<any>(`${this.baseUrl}${apiEndpoint.login}`, user);
  }
}
