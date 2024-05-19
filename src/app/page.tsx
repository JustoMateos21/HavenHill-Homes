import NavBar from "@/components/NavBar";
import Image from "next/image";
import homeHeader from "/public/assets/home_header_background.png";
export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col">
      <header className="w-full flex-col bg-white h-[400px] flex">
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
