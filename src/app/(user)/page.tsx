import { Property } from "@/types";
 
import Image from "next/image";
import { homes } from "../../../home";

 
export default function Home() {
  return (
    <section className=" flex h-full  sm:flex-row flex-col w-full items-center justify-around sm:px-[20%] gap-8 pt-10 flex-wrap ">
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
