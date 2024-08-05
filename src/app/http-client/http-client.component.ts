import { Component } from '@angular/core';

@Component({
  selector: 'app-http-client',
  standalone: true,
  imports: [],
  templateUrl: './http-client.component.html',
  styleUrl: './http-client.component.css',
})
export class HttpClientComponent {
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
  ];
  httpkeyFeatures: string[] = [
    `Type Safety: HttpClient supports strong typing of request and response bodies, which helps catch errors at compile time.`,
    `Interceptors: Allows you to intercept and modify requests or responses globally before they reach the application code`,
    `Error Handling: Provides a consistent way to handle HTTP errors.`,
    `Testing: Easier to test HTTP requests using Angular's HttpTestingController.`,
    `Response Handling: Automatically parses JSON responses and supports other response types like text and blobs.`,
    `Observables: Uses RxJS Observables, allowing you to take advantage of powerful operators for handling asynchronous data streams.`,
  ];
}
