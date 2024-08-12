import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PageInfo, PagesInfoArrService } from './services/pages-info-arr.service';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    AsyncPipe,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('sidenavState', [
      state(
        'collapsed',
        style({
          width: '60px',
        })
      ),
      state(
        'expanded',
        style({
          width: '200px',
        })
      ),
      transition('collapsed <=> expanded', [animate('300ms ease-in-out')]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  title = 'angular_core';
  isCollapsed = true;
  pagesInfoObservable!: Observable<PageInfo[]>;
  constructor(private pgService: PagesInfoArrService) {}

  ngOnInit(): void {
    this.pagesInfoObservable = this.pgService.getPageInformation();
    // console.log(this.pagesInfoObservable);
  }
  toggleMenu() {
    // On desktop/tablet, the menu can never be fully closed
    this.isCollapsed = !this.isCollapsed;
  }
  onMouseEnter() {
    this.isCollapsed = false;
  }

  onMouseLeave() {
    this.isCollapsed = true;
  }
}
