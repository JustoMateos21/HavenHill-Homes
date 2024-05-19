export type Property = {
  id: number;
  title: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number; // Area in square meters
  images: string[]; // Array of image URLs
  amenities: string[]; // Array of amenity names
  available: boolean;
};
