export function getWeatherAnimation(weatherMain: string): string {
    const lower = weatherMain.toLowerCase();
    if (lower.includes('cloud')) return 'assets/lottie/cloud.json';
    if (lower.includes('clear')) return 'assets/lottie/sun.json';
    if (lower.includes('rain')) return 'assets/lottie/rain.json';
    if (lower.includes('snow')) return 'assets/lottie/snow.json';
    if (lower.includes('storm')) return 'assets/lottie/storm.json';
    if (lower.includes('haze')) return 'assets/lottie/haze.json';
    return 'assets/lottie/weather.json';
  }
  