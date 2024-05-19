import NavBar from "@/components/NavBar";
import Image from "next/image";
import homeHeader from "/public/assets/home_header_background.png";
import { Property } from "@/types";

const homes: Property[] = [
  {
    id: 1,
    title: "Modern Apartment in City Center",
    description: "Spacious apartment with stunning city views",
    price: 200000,
    location: "City Center",
    bedrooms: 2,
    bathrooms: 1,
    area: 100,
    images: ["image1.jpg", "image2.jpg", "image3.jpg"],
    amenities: ["Balcony", "Gym", "Swimming Pool"],
    available: true,
  },
  {
    id: 2,
    title: "Cozy House in Suburbs",
    description: "Charming house with a large backyard",
    price: 300000,
    location: "Suburbs",
    bedrooms: 3,
    bathrooms: 2,
    area: 150,
    images: ["image4.jpg", "image5.jpg", "image6.jpg"],
    amenities: ["Garden", "Fireplace", "Garage"],
    available: true,
  },
  {
    id: 3,
    title: "Luxury Penthouse with Panoramic Views",
    description: "Stunning penthouse with breathtaking views",
    price: 1000000,
    location: "Downtown",
    bedrooms: 4,
    bathrooms: 3,
    area: 300,
    images: ["image7.jpg", "image8.jpg", "image9.jpg"],
    amenities: ["Terrace", "Jacuzzi", "Concierge Service"],
    available: false,
  },
  // Add more properties as needed
];

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col bg-white">
      <header className="w-full flex-col  h-[400px] flex">
        <NavBar />
        <div className="h-[200px] flex w-full relative items-center justify-center">
          <Image
            src={homeHeader}
            className="h-full flex object-cover"
            alt="Home header"
          />
          <h2 className="absolute flex text-xl">
            Discover Your Dream Home with HavenHill Homes
          </h2>
        </div>
      </header>
    </main>
  );
}
