import React from "react";
import { homes } from "../../../../../home";
import Image from "next/image";

type Props = {};

const Properties = (props: Props) => {
  return (
    <div className="flex h-full  sm:flex-row flex-col w-full items-center justify-around   gap-8  flex-wrap">
      {homes.map((home) => (
        <div className="flex p-4 h-[200px] w-[200px]" key={home.id}>
          <Image
            alt="home"
            src={home.thumbnail}
            className="flex object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Properties;
