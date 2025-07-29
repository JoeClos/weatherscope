import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

console.log('🔍 ENV in app:', environment);

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = environment.openWeatherApiKey;

  constructor(private http: HttpClient) {}

  fetchCityOptions(city: string): Observable<any[]> {
    const url = `${environment.openWeatherGeoUrl}?q=${city}&limit=5&appid=${this.apiKey}`;
    return this.http.get<any[]>(url);
  }

  getWeather(lat: number, lon: number): Observable<any> {
    const url = `${environment.openWeatherBaseUrl}?lat=${lat}&lon=${lon}&units=metric&appid=${this.apiKey}`;
    return this.http.get(url);
  }

  reverseGeocode(lat: number, lon: number): Observable<any[]> {
    const url = `${environment.openWeatherReverseGeoUrl}?lat=${lat}&lon=${lon}&limit=1&appid=${this.apiKey}`;
    return this.http.get<any[]>(url);
  }
}
