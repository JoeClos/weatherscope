import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
} from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
})
export class MapViewComponent implements AfterViewInit, OnChanges {
  @Input() latitude!: number;
  @Input() longitude!: number;
  @Input() zoom: number = 2;
  @Input() showMarker: boolean = false;

  private map!: L.Map;
  private marker: L.Marker | null = null;

  ngAfterViewInit(): void {
    this.initMap();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.map && changes['latitude'] && changes['longitude']) {
      this.setMapView(this.latitude, this.longitude);
    }
  }

  private initMap(): void {
    this.map = L.map('map').setView(
      [this.latitude || 20, this.longitude || 0],
      this.zoom || 2
    );

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(this.map);

    // ✅ Only add marker if allowed
    if (this.showMarker) {
      this.marker = L.marker([this.latitude, this.longitude]).addTo(this.map);
    }
  }

  private setMapView(lat: number, lon: number): void {
    this.map.setView([lat, lon], 10);

    if (this.showMarker) {
      if (this.marker) {
        this.marker.setLatLng([lat, lon]);
      } else {
        this.marker = L.marker([lat, lon]).addTo(this.map);
      }
    } else if (this.marker) {
      this.map.removeLayer(this.marker);
      this.marker = null;
    }
  }
}
