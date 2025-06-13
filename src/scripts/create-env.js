import { writeFileSync } from 'fs';
const envConfig = `
export const environment = {
  production: false,
  openWeatherApiKey: '${process.env.OPEN_WEATHER_API_KEY}',
  openWeatherBaseUrl: '${process.env.OPEN_WEATHER_BASE_URL}',
  openWeatherGeoUrl: '${process.env.OPEN_WEATHER_GEO_URL}',
  openWeatherReverseGeoUrl: '${process.env.OPEN_WEATHER_REVERSE_GEO_URL}',
};
`;
writeFileSync('./src/environments/environment.ts', envConfig);