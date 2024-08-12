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
      icon: 'account_tree',
    },
    {
      pageName: 'Structural Directive',
      pageImageUrl: '',
      pageRoute: '/structural-directive',
      icon: 'account_tree',
    },
    {
      pageName: 'Attribute Directive',
      pageImageUrl: '',
      pageRoute: '/attribute-directive',
      icon: 'account_tree',
    },
    {
      pageName: 'Pipes',
      pageImageUrl: '',
      pageRoute: '/pipes',
      icon: 'transform',
    },
    {
      pageName: 'Forms',
      pageImageUrl: '',
      pageRoute: '/forms',
      icon: 'list',
    },
    {
      pageName: 'HttpClient-CRUD',
      pageImageUrl: '',
      pageRoute: '/httpClient',
      icon: 'http',
    },
    {
      pageName: '@Input/@Output',
      pageImageUrl: '',
      pageRoute: '/inputOutput',
      icon: 'design_services',
    },
    {
      pageName: 'Lifecycle event',
      pageImageUrl: '',
      pageRoute: '/lifecycle-event',
      icon: 'compost',
    },
    {
      pageName: 'Ng-Template',
      pageImageUrl: '',
      pageRoute: '/ng-template',
      icon: 'edit_square',
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
  icon:string;
}
