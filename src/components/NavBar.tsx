import { CircleUserRound } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

interface Link {
  title: string;
  src: string;
}

const links: Link[] = [
  {
    title: "Home",
    src: "/",
  },
  {
    title: "Properties",
    src: "/properties",
  },
  {
    title: "Map",
    src: "/map",
  },
];

const NavBar = (props: Props) => {
  return (
    <div className="h-16  p-4 items-center justify-evenly w-full flex flex-column sm:flex-row ">
      <Link className="text-black" href={"/"}>
        <h1>HavenHill Homes</h1>
      </Link>
      <div className="flex w-[50%] justify-evenly">
        {links.map((l) => (
          <Link
            className="text-black hover:scale-105 duration-1000"
            key={l.src}
            href={l.src}
          >
            {l.title}
          </Link>
        ))}
      </div>
      <Link href={"/profile"}>
        <CircleUserRound color="black" size={25} />
      </Link>
    </div>
  );
};

export default NavBar;
