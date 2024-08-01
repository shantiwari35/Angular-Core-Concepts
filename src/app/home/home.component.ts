import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SwiperComponent } from '../ui/swiper/swiper.component';
import { SwiperOptions } from 'swiper/types';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SwiperComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
