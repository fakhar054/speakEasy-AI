import React from "react";
import Image from "next/image";
import Ballon from "../ballon/Ballon";

export default function Hero() {
  return (
    <div className="container   hero   md:h-[95vh] py-2 mb-3">
      <div className="parenet_div flex flex-col-reverse gap-4 md:flex-row items-center h-full relative">
        <div className="left_side  md:w-1/2 px-4 ">
          <div className="absolute top-5 left-5">
            <Image
              src="/images/shooting-star.png"
              alt="Logo"
              width={100}
              height={100}
              className="animate-arrow-grow w-32 h-auto"
            />
          </div>

          <h1 className="text-3xl font-bold mb-4">
            Helping Little Hearts Find Big Words.
          </h1>
          <p className="text-xl mb-6">
            Watch your child flourish through guided play and emotional
            discovery.
          </p>
          <button
            className="bg-green-color text-white px-6 py-3 rounded-full font-semibold
          transition-transform duration-200 hover:scale-95 active:scale-90 shadow-lg shadow-green-500/40 cursor-pointer"
          >
            Find Your Child’s Guide
          </button>
        </div>
        <div className="right_side md:w-1/2 ">
          <img src="/images/hero-pic.png" alt="Hero pic" />
        </div>
      </div>
      <Ballon />
    </div>
  );
}
