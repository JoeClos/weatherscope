import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { LottieModule } from 'ngx-lottie';

import { WeatherHomeComponent } from './pages/weather-home/weather-home.component';
import { MaterialModule } from '../../shared/material/material.module';
import { MapViewComponent } from './components/map-view/map-view.component';

const routes: Routes = [
  { path: '', component: WeatherHomeComponent }, // this is for /weather
];

@NgModule({
  declarations: [WeatherHomeComponent, MapViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    LottieModule,
    RouterModule.forChild(routes), // this is for lazy loading
  ],
})
export class WeatherModule {}
