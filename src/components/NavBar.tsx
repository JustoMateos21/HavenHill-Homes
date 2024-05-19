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
    <div className="h-16 w-full flex flex-column sm:flex-row ">
      <Link href={"/"}>
        <h1>HavenHill Homes</h1>
      </Link>
      {links.map((l) => (
        <Link key={l.src} href={l.src}>
          {l.title}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
