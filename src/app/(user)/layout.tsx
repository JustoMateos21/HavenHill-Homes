"use client";

import NavBar from "@/components/NavBar";
import Image, { StaticImageData } from "next/image";
import { Property } from "@/types";
import homeHeader from "/public/assets/home_header_background.png";
import { useEffect, useRef, useState } from "react";
import propertiesHeader from "/public/assets/properties_header.png";
import { useRouter } from "next/navigation";
export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isPropertiesScreen, setisPropertiesScreen] = useState<Boolean>(false);
  const router = useRouter();
  useEffect(() => {
    if (window.location.href.match("properties")) {
      setisPropertiesScreen(true);
    } else {
      setisPropertiesScreen(false);
    }
  }, [router.push]);

  return (
    <main className="flex h-screen w-screen flex-col bg-white">
      <header className="w-full flex-col  h-[400px] flex">
        <NavBar />
        <div className="h-[200px] flex w-full relative items-center justify-center">
          <Image
            src={isPropertiesScreen ? propertiesHeader : homeHeader}
            className="h-full flex object-cover"
            alt="Home header"
          />
          <h2 className="absolute flex text-xl">
            Discover Your Dream Home with HavenHill Homes
          </h2>
        </div>
      </header>
      {children}
    </main>
  );
}
