import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

export default function LicenseSection() {
  return (
    <div className="conatiner mx-auto my-3">
      <div className="flex flex-col-reverse md:flex-row  md:items-center ">
        <div className="left_section flex-1 p-6">
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold ">
              Help your child reach for the stars.
            </h1>
            <p className="text-xl ">
              Every child’s journey is unique. Our specialized therapy sessions
              provide the tools and emotional support your little one needs to
              overcome hurdles and shine bright.
            </p>
            <a className="flex w-fit font-medium my-3 gap-2  px-6 py-2  rounded-3xl bg-green-color text-white items-center cursor-pointer hover:bg-white border border-green-color hover:text-green-color transition-all duration-200 hover:scale-95 shadow-lg shadow-green-500/40">
              <span href="#" className="">
                Start Their Journey
              </span>
              <FaArrowRight />
            </a>
          </div>
        </div>
        <div className="right_section flex-1  p-6">
          <Image
            src="/images/licenseImg.jpeg"
            width={500}
            height={400}
            alt="image-childern"
          />
        </div>
      </div>
    </div>
  );
}
