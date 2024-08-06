import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { apiEndpoint } from '../../api-endpoint';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  private baseUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) {
    console.log(this.baseUrl);
  }

  getAllCustomers(){
    return this.http.get<any>(`${this.baseUrl}${apiEndpoint.GetAllCustomers}`);
  }

  getAllCourses(){
    return this.http.get<any>(`${this.baseUrl}${apiEndpoint.GetAllCourse}`);
  }

  postNewCourse(course:any){
    return this.http.post<any>(`${this.baseUrl}${apiEndpoint.AddNewCourse}`,course);
  }

  updateCourse(course:any){
    return this.http.put<any>(`${this.baseUrl}${apiEndpoint.UpdateCourse}`,course);
  }

  deleteCourse(id:number){
    return this.http.delete<any>(
      `${this.baseUrl}${apiEndpoint.DeleteCourseById}?courseId=${id}`
    );
  }
}
