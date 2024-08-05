import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PageInfo, PagesInfoArrService } from './services/pages-info-arr.service';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule,AsyncPipe,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'angular_core';
  pagesInfoObservable!: Observable<PageInfo[]>;
  constructor(private pgService: PagesInfoArrService) {}

  ngOnInit(): void {
    this.pagesInfoObservable = this.pgService.getPageInformation();
    // console.log(this.pagesInfoObservable);
  }
}
