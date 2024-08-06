import { Component, inject, OnInit } from '@angular/core';
import { HttpClientService } from '../services/http-client.service';
import { map, Observable, pipe, tap, timestamp } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

interface course {
  courseId: number;
  courseName: string;
  createdDate: string;
  totalHours: string;
  totalVideos: number;
  courseDescription: string;
}

@Component({
  selector: 'app-http-client',
  standalone: true,
  imports: [
    AsyncPipe,
    CommonModule,
    MatTableModule,
    ReactiveFormsModule,
    MatButton,
  ],
  templateUrl: './http-client.component.html',
  styleUrl: './http-client.component.css',
})
export class HttpClientComponent implements OnInit {
  _fb = inject(FormBuilder);
  course!: course;
  courseForm: FormGroup = this._fb.group({
    courseId: [0],
    courseName: ['', Validators.required],
    createdDate: [new Date().toISOString()],
    totalHours: ['', Validators.required],
    totalVideos: [0, Validators.required],
    courseDescription: ['', Validators.required],
  });

  displayedColumns: string[] = [
    'userId',
    'userName',
    'emailId',
    'fullName',
    'role',
    'createdDate',
    'password',
    'projectName',
  ];

  displayColumnsCourse: string[] = [
    'courseId',
    'courseName',
    'createdDate',
    'totalHours',
    'totalVideos',
    'courseDescription',
    'actions',
  ];

  coursesList: any = [];
  constructor(
    private httpService: HttpClientService,
    private toastrService: ToastrService
  ) {}
  httpClientArr: string[] = [
    `The HttpClient is a service in Angular that provides an HTTP client for making HTTP requests to servers.`,
    `It is a part of the @angular/common/http package and is designed to replace the older Http module, offering a more modern and feature-rich API for working with HTTP requests.`,
    `Key Features of HttpClient`,
    `Syntax:
        export class ApiService {
      private apiUrl = 'https://api.example.com';

      constructor(private http: HttpClient) { }

      getData(): Observable<any> {
        return this.http.get<any>('endpoint/data');
      }
    `,
    `Syntax :
      getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>('baseUrl/customers');
  }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>("baseUrl/customers", customer);
  }

  updateCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>('baseUrl/customers/{id}', customer);
  }

  deleteCustomer(id: number): Observable<void> {
    return this.http.delete<void>('baseUrl/customers/{id}');
  }`,
  ];
  httpkeyFeatures: string[] = [
    `Type Safety: HttpClient supports strong typing of request and response bodies, which helps catch errors at compile time.`,
    `Interceptors: Allows you to intercept and modify requests or responses globally before they reach the application code`,
    `Error Handling: Provides a consistent way to handle HTTP errors.`,
    `Testing: Easier to test HTTP requests using Angular's HttpTestingController.`,
    `Response Handling: Automatically parses JSON responses and supports other response types like text and blobs.`,
    `Observables: Uses RxJS Observables, allowing you to take advantage of powerful operators for handling asynchronous data streams.`,
  ];

  customersList: any[] = [];

  ngOnInit(): void {
    this.getCoursesList();
  }

  getCoursesList() {
    // debugger;
    this.httpService.getAllCourses().subscribe((res: any) => {
      if (res.result) {
        this.coursesList = res.data;
      } else {
        this.toastrService.error('everything is broken', 'Major Error', {
          timeOut: 3000,
        });
      }
    });
  }

  onGetCustomerList() {
    this.httpService.getAllCustomers().subscribe((res: any) => {
      if (res.result) {
        this.customersList = res.data;
        this.toastrService.success('list Loaded Successfully', 'Success !', {
          timeOut: 3000,
        });
      } else {
        this.toastrService.error('everything is broken', 'Major Error', {
          timeOut: 3000,
        });
      }
    });
  }

  OnCourseFormSubmit() {
    // debugger;
    this.course = this.courseForm.value;
    if (this.course.courseId == 0 || this.course.courseId == null) {
      this.httpService.postNewCourse(this.course).subscribe((res: any) => {
        if (res.result) {
          this.courseForm.reset();
          this.toastrService.success(res?.message, 'Success !', {
            timeOut: 3000,
          });
          this.ngOnInit();
        } else {
          this.toastrService.error(res?.message, 'Error !', {
            timeOut: 3000,
          });
        }
      });
    } else {
      this.httpService.updateCourse(this.course).subscribe((res: any) => {
        if (res.result) {
          this.courseForm.reset();
          this.toastrService.success(res?.message, 'Success !', {
            timeOut: 3000,
          });
          this.ngOnInit();
        } else {
          this.toastrService.error(res?.message, 'Error !', {
            timeOut: 3000,
          });
        }
      });
    }
  }
  getRowData(data: any) {
    this.courseForm.setValue(data);
  }
  deleteRow(data: any) {
    const id = data.courseId;
    if (id) {
      this.httpService.deleteCourse(id).subscribe((res: any) => {
        if (res.result) {
          this.ngOnInit();
          this.toastrService.success(res?.message, 'Success !', {
            timeOut: 3000,
          });
        } else {
          this.toastrService.error(res?.message, 'Error !', {
            timeOut: 3000,
          });
        }
      });
    }
  }
}
