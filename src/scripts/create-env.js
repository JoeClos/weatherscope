// import { writeFileSync } from 'fs';
// const envConfig = `
// export const environment = {
//   production: false,
//   openWeatherApiKey: '${process.env.OPEN_WEATHER_API_KEY}',
//   openWeatherBaseUrl: '${process.env.OPEN_WEATHER_BASE_URL}',
//   openWeatherGeoUrl: '${process.env.OPEN_WEATHER_GEO_URL}',
//   openWeatherReverseGeoUrl: '${process.env.OPEN_WEATHER_REVERSE_GEO_URL}',
// };
// `;
// writeFileSync('./src/environments/environment.ts', envConfig);

const { writeFileSync, mkdirSync } = require('fs');

const envConfig = `
export const environment = {
  production: true,
  openWeatherApiKey: '${process.env.OPEN_WEATHER_API_KEY}',
  openWeatherBaseUrl: '${process.env.OPEN_WEATHER_BASE_URL}',
  openWeatherGeoUrl: '${process.env.OPEN_WEATHER_GEO_URL}',
  openWeatherReverseGeoUrl: '${process.env.OPEN_WEATHER_REVERSE_GEO_URL}'
};
`;

mkdirSync('./src/environments', { recursive: true });
writeFileSync('./src/environments/environment.ts', envConfig.trim() + '\n');

console.log('environment.ts created successfully');