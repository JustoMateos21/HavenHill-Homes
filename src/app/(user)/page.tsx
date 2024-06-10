import { Property } from "@/types";
import firstHome from "/public/assets/properties/home_1.png";
import secondHome_ from "/public/assets/properties/home_2.png";
import thirdHome from "/public/assets/properties/home_3.png";
import fourthHome from "/public/assets/properties/home_4.png";
import Image from "next/image";

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
    thumbnail: firstHome,
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
    thumbnail: secondHome_,
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
    thumbnail: thirdHome,
    images: ["image7.jpg", "image8.jpg", "image9.jpg"],
    amenities: ["Terrace", "Jacuzzi", "Concierge Service"],
    available: false,
  },
  {
    id: 4,
    title: "Luxury Penthouse with Panoramic Views",
    description: "Stunning penthouse with breathtaking views",
    price: 1000000,
    location: "Downtown",
    bedrooms: 4,
    bathrooms: 3,
    area: 300,
    thumbnail: fourthHome,
    images: ["image7.jpg", "image8.jpg", "image9.jpg"],
    amenities: ["Terrace", "Jacuzzi", "Concierge Service"],
    available: false,
  },
  // Add more properties as needed
];
export default function Home() {
  return (
    <section className="grid  grid-cols-4 p-10 ">
      {homes.map((home) => (
        <div className="flex p-4 h-[200px] w-[200px]" key={home.id}>
          <Image
            alt="home"
            src={home.thumbnail}
            className="flex object-cover"
          />
        </div>
      ))}
    </section>
  );
}
