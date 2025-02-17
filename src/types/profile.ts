// Frontend-only type
export interface Location {
  city: string;
  cityNames?: {
    ru: string;
    en: string;
  };
  coordinates: {
    lat: number;
    lon: number;
  };
}
