import { CircleUserRound, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className={`${
        isMenuOpen && "h-full bg-gray-200 z-[200] absolute"
      }  sm:h-16  p-4 items-center justify-around w-full flex flex-col sm:flex-row `}
    >
      <div className="flex w-full sm:w-1/6 items-center justify-evenly">
        <Link className="text-black" href={"/"}>
          <h1>HavenHill Homes</h1>
        </Link>
        {isMenuOpen ? (
          <X
            color="black"
            className="sm:hidden"
            cursor={"pointer"}
            size={20}
            onClick={() => setIsMenuOpen(false)}
          />
        ) : (
          <Menu
            color="black"
            className="sm:hidden"
            cursor={"pointer"}
            size={20}
            onClick={() => setIsMenuOpen(true)}
          />
        )}
      </div>

      <div className="hidden sm:flex w-[50%] justify-evenly">
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

      {isMenuOpen && (
        <div className="flex sm:hidden h-full w-full flex-col items-center justify-evenly">
          {links.map((link, index) => (
            <Link
              href={link.src}
              onClick={() => setIsMenuOpen(false)}
              className="text-black hover:scale-105 duration-1000"
              key={index}
            >
              {link.title}
            </Link>
          ))}
          <Link
            className="flex sm:hidden"
            href={"/profile"}
            onClick={() => setIsMenuOpen(false)}
          >
            <CircleUserRound color="black" size={25} />
          </Link>
        </div>
      )}
      <Link className="hidden sm:flex" href={"/profile"}>
        <CircleUserRound color="black" size={25} />
      </Link>
    </div>
  );
};

export default NavBar;
