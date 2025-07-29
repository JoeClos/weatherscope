# WeatherScope

![Angular](https://img.shields.io/badge/Angular-15-red?logo=angular&logoColor=white)
![Leaflet](https://img.shields.io/badge/Leaflet-Map-green?logo=leaflet&logoColor=white)
![OpenWeather](https://img.shields.io/badge/API-OpenWeather-blue?logo=openweathermap&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
<!--[![Live Preview](https://img.shields.io/badge/Live-Preview-blue?logo=vercel)](https://your-deployment-url.com) --- -->

> A smart and responsive weather application built with **Angular**, integrating **OpenWeatherMap API** and **Leaflet.js** to display real-time weather data and interactive maps.

---

##  Features

🌐 **City Search with Autocomplete** – Get accurate suggestions as you type  
📍 **Use My Location** – Fetch weather using your current geolocation  
🗺️ **Interactive Map** – Visualize weather locations on Leaflet-powered maps  
🧭 **Fallback View** – Graceful default map display if geolocation is blocked  
🌡️ **Live Weather Details** – Temperature, humidity, wind, and weather condition  
🎞️ **Animated Weather Icons** – Rich animations powered by Lottie  
🔔 **Snackbars for Feedback** – User-friendly notifications for denied location or errors  
📱 **Responsive UI** – Works great on desktop and mobile

---

## Tech Stack

- **Angular** (v15)
- **Angular Material**
- **Leaflet.js** (with OpenStreetMap tiles)
- **Lottie/ngx-lottie** for animated weather icons
- **OpenWeatherMap API** – [https://openweathermap.org/api](https://openweathermap.org/api)

---

## Getting Started

### Clone the repo
```bash
git clone https://github.com/JoeClos/weatherscope.git
cd weatherscope
```

### Install dependencies
```bash
npm install
```

### Set up environment variables
Create `src/environments/environment.ts` file with your API keys:
```ts
export const environment = {
  production: false,
  openWeatherApiKey: '<YOUR_API_KEY_HERE>',
  openWeatherGeoUrl: '<YOUR_GEO_URL_HERE>',
  openWeatherBaseUrl: '<YOUR_BASE_URL_HERE>',
  openWeatherReverseGeoUrl: '<YOUR_REVERSE_GEO_URL_HERE>',
};
```

### Run the app locally
```bash
ng serve
```
Visit: [http://localhost:4200](http://localhost:4200)

---

<!-- ## 📸 Screenshots

_Screenshots here once your the is deployed or styled._

--- -->

## Inspiration & Purpose

This project was created as a learning journey into:

- Using **HTTPClient** in Angular
- Building **responsive layouts** with Angular Material
- Handling APIs, geolocation, and map rendering
- Writing clean, modular, and intuitive Angular code

---

## Author

Made with 💙 by Josephine
> Find me on [LinkedIn](https://www.linkedin.com/in/josephine-closan/) • [GitHub](https://github.com/JoeClos)

