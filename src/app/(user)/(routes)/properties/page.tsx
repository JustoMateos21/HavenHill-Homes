import React from "react";
import { homes } from "../../../../../home";
import Image from "next/image";
import { Search } from "lucide-react";

type Props = {};

const Properties = (props: Props) => {
  return (
    <section className="flex flex-col items-center">
      <div className="flex  items-center h-8 pb-20">
        <input type="text" className="flex text-black  mr-2" />
        <Search size={20} color="black" cursor={"pointer"} />
      </div>
      <div className="flex h-full  sm:flex-row flex-col w-full items-center justify-around px-[20%]  gap-8  flex-wrap">
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
    </section>
  );
};

export default Properties;
