export function getOptionLabel(location: any): string {
    const state = location.state ? `, ${location.state}` : '';
    return `${location.name}${state}, ${location.country}`;
  }
  
  export function getUniqueCities(cities: any[]): any[] {
    const seen = new Set<string>();
    return cities.filter((city) => {
      const key = `${city.name}-${city.state ?? ''}-${city.country}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }
  