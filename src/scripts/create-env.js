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
writeFileSync('./src/environments/environment.prod.ts', envConfig.trim() + '\n');

console.log('environment.prod.ts created successfully');
console.log('🔍 Netlify environment variables at build time:');
console.log('API Key:', process.env.OPEN_WEATHER_API_KEY);
console.log('Base URL:', process.env.OPEN_WEATHER_BASE_URL);
console.log('Geo URL:', process.env.OPEN_WEATHER_GEO_URL);
console.log('Reverse Geo URL:', process.env.OPEN_WEATHER_REVERSE_GEO_URL);
