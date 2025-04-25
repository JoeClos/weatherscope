import { Component, OnInit } from '@angular/core';
import { debounceTime, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { WeatherService } from '../../services/weather.service';
import { getOptionLabel, getUniqueCities } from 'src/app/utils/weather-utils';
import { getWeatherAnimation } from 'src/app/utils/weather-icons.util';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.scss'],
})
export class WeatherHomeComponent implements OnInit {
  cityInput = '';
  cityOptions: any[] = [];
  weatherData: any;
  private inputChanged: Subject<string> = new Subject();
  defaultLat = 20;
  defaultLon = 0;
  showMarker = false;


  constructor(
    private weatherService: WeatherService,
    private snackBar: MatSnackBar
  ) {
    this.inputChanged
      .pipe(
        debounceTime(300),
        switchMap((input) => this.weatherService.fetchCityOptions(input))
      )
      .subscribe((cities) => {
        this.cityOptions = getUniqueCities(cities);
      });
  }

  onCityInputChange(): void {
    const trimmedInput = this.cityInput.trim();

    if (trimmedInput.length >= 2) {
      this.inputChanged.next(trimmedInput);
    } else {
      // Input was cleared — reset everything
      this.cityOptions = [];
      this.showMarker = false; 
      // this.weatherData = null;
    }
  }

  clearInput(): void {
    this.cityInput = '';
    this.onCityInputChange(); // triggers reset logic
  }

  onCitySelected(event: any) {
    const selected = this.cityOptions.find(
      (c) => getOptionLabel(c) === event.option.value
    );
    if (selected) {
      this.getWeatherByCoords(selected.lat, selected.lon);
    }
  }

  getWeatherByCoords(lat: number, lon: number) {
    this.weatherData = null;
    this.showMarker = true;

    this.weatherService.getWeather(lat, lon).subscribe({
      next: (data: any) => {
        data.main.temp = Math.round(data.main.temp);
        this.weatherData = data;
      },
      error: () => {
        this.weatherData = null;
        this.showMarker = false;
      },
    });
  }

  useMyLocation(): void {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        this.getWeatherByCoords(lat, lon);

        this.weatherService.reverseGeocode(lat, lon).subscribe((res) => {
          if (res.length > 0) {
            const location = res[0];
            const city = location.name || '';
            const state = location.state ? `, ${location.state}` : '';
            const country = location.country || '';
            this.cityInput = `${city}${state}, ${country}`;
            console.log('Resolved location:', this.cityInput);

            this.cityOptions = [location]; // optional: update suggestions
          }
        });
      },

      (err) => {
        let message = 'Could not get your location.';
        if (err.code === 1) {
          message =
            'Location permission denied. Please allow it in your browser settings.';
        }

        this.snackBar.open(message, 'Close', {
          // duration: 4000,
          verticalPosition: 'top',
          panelClass: 'snackbar-error',
        });

        this.showMarker = false; 
      }
    );
  }

  getLabel(location: any): string {
    return getOptionLabel(location);
  }

  getAnimationPath(condition: string): string {
    return getWeatherAnimation(condition);
  }

  ngOnInit(): void {
    // Initialize the map or any other necessary setup
    this.useMyLocation();
  }
}
