import { animate, state, style, transition, trigger } from '@angular/animations';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PageInfo, PagesInfoArrService } from '../services/pages-info-arr.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout',
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
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  animations: [
    trigger('sidenavState', [
      state(
        'collapsed',
        style({
          transform: 'translate3d(100%, 0, 0)',
          width: '60px',
        })
      ),
      state(
        'expanded',
        style({
          transform: 'translate3d(0,0,0)',
          width: '200px',
        })
      ),
      transition('collapsed <=> expanded', [animate('400ms ease-in-out')]),
    ]),
  ],
})
export class LayoutComponent {
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
