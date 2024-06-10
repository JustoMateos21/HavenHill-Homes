"use client";

import NavBar from "@/components/NavBar";
import Image, { StaticImageData } from "next/image";
import { Property } from "@/types";
import homeHeader from "/public/assets/header/home_header_background.png";
import { useEffect, useRef, useState } from "react";
import propertiesHeader from "/public/assets/header/properties_header.png";
import mapHeader from "/public/assets/header/map_header.png";

import { usePathname, useRouter } from "next/navigation";
export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <main className="flex h-screen w-screen flex-col  bg-gradient-to-r from-slate-50 to-slate-300">
      <header className="w-full flex-col  h-[400px] flex">
        <NavBar />
        <div className="h-[200px] flex w-full relative items-center justify-center bg-black">
          <Image
            src={
              pathname.match("properties")
                ? propertiesHeader
                : pathname.match("map")
                ? mapHeader
                : homeHeader
            }
            className={`h-full w-full flex object-cover ${
              pathname.match("properties") && "opacity-35"
            }
          `}
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
