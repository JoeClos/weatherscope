const { writeFileSync, mkdirSync } = require('fs');

const envConfig = `
export const environment = {
  production: true,
  openWeatherApiKey: '${process.env.openWeatherApiKey}',
  openWeatherBaseUrl: '${process.env.openWeatherBaseUrl}',
  openWeatherGeoUrl: '${process.env.openWeatherGeoUrl}',
  openWeatherReverseGeoUrl: '${process.env.openWeatherReverseGeoUrl}'
};
`;

mkdirSync('./src/environments', { recursive: true });
writeFileSync('./src/environments/environment.prod.ts', envConfig.trim() + '\n');

console.log('environment.prod.ts created successfully');
console.log('🔍 Netlify environment variables at build time:');
console.log('API Key:', process.env.openWeatherApiKey);
console.log('Base URL:', process.env.openWeatherBaseUrl);
console.log('Geo URL:', process.env.openWeatherGeoUrl);
console.log('Reverse Geo URL:', process.env.openWeatherReverseGeoUrl);
