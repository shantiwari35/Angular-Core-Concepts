import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PagesInfoArrService {
  page: PageInfo[] = [
    {
      pageName: 'Data-Binding',
      pageImageUrl: '',
      pageRoute: '/data-binding',
    },
    {
      pageName: 'Structural Directive',
      pageImageUrl: '',
      pageRoute: '/structural-directive',
    },
    {
      pageName: 'Attribute Directive',
      pageImageUrl: '',
      pageRoute: '/attribute-directive',
    },
    {
      pageName: 'Pipes',
      pageImageUrl: '',
      pageRoute: '/pipes',
    },
    {
      pageName: 'Forms',
      pageImageUrl: '',
      pageRoute: '/forms',
    },
    {
      pageName: 'HttpClient-API',
      pageImageUrl: '',
      pageRoute: '/httpClient',
    },
  ];
  constructor() {}

  getPageInformation(): any {
    return of(this.page);
  }
}

export interface PageInfo {
  pageName: string;
  pageImageUrl: string;
  pageRoute: string;
}
