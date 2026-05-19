import React from "react";
import Image from "next/image";
import { TbFileLike } from "react-icons/tb";

export default function page() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-extrabold">Favorite Doctors</h1>
      <p className="mt-2 text-gray-500">
        Manage your favorite healthcare providers
      </p>

      <div className="card_parent grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-3">
        <div className="card border border-green-color rounded-2xl p-4 flex items-center justify-between cursor-pointer hover:bg-white hover:text-green-color duration-200 transition-all ">
          <div className="flex items-center gap-3">
            <div className="w-[80px] h-[80px] rounded-full overflow-hidden">
              <Image
                src="/images/parent1.jpeg"
                width={80}
                height={80}
                className="object-cover w-full h-full"
                alt="James Smith"
              />
            </div>

            <div className="text-div flex flex-col">
              <h3 className="text-lg font-extrabold">James Smith</h3>
              <p className="text-gray-500">Speech Therapist</p>
            </div>
          </div>

          <div className="like_div">
            <TbFileLike className="text-3xl" />
          </div>
        </div>

        <div className="card border border-green-color rounded-2xl p-4 flex items-center justify-between cursor-pointer hover:bg-white hover:text-green-color duration-200 transition-all ">
          <div className="flex items-center gap-3">
            <div className="w-[80px] h-[80px] rounded-full overflow-hidden">
              <Image
                src="/images/parent1.jpeg"
                width={80}
                height={80}
                className="object-cover w-full h-full"
                alt="James Smith"
              />
            </div>

            <div className="text-div flex flex-col">
              <h3 className="text-lg font-extrabold">James Smith</h3>
              <p className="text-gray-500">Speech Therapist</p>
            </div>
          </div>

          <div className="like_div">
            <TbFileLike className="text-3xl" />
          </div>
        </div>

        <div className="card border border-green-color rounded-2xl p-4 flex items-center justify-between cursor-pointer hover:bg-white hover:text-green-color duration-200 transition-all ">
          <div className="flex items-center gap-3">
            <div className="w-[80px] h-[80px] rounded-full overflow-hidden">
              <Image
                src="/images/parent1.jpeg"
                width={80}
                height={80}
                className="object-cover w-full h-full"
                alt="James Smith"
              />
            </div>

            <div className="text-div flex flex-col">
              <h3 className="text-lg font-extrabold">James Smith</h3>
              <p className="text-gray-500">Speech Therapist</p>
            </div>
          </div>

          <div className="like_div">
            <TbFileLike className="text-3xl" />
          </div>
        </div>

        <div className="card border border-green-color rounded-2xl p-4 flex items-center justify-between cursor-pointer hover:bg-white hover:text-green-color duration-200 transition-all ">
          <div className="flex items-center gap-3">
            <div className="w-[80px] h-[80px] rounded-full overflow-hidden">
              <Image
                src="/images/parent1.jpeg"
                width={80}
                height={80}
                className="object-cover w-full h-full"
                alt="James Smith"
              />
            </div>

            <div className="text-div flex flex-col">
              <h3 className="text-lg font-extrabold">James Smith</h3>
              <p className="text-gray-500">Speech Therapist</p>
            </div>
          </div>

          <div className="like_div">
            <TbFileLike className="text-3xl" />
          </div>
        </div>

        <div className="card border border-green-color rounded-2xl p-4 flex items-center justify-between cursor-pointer hover:bg-white hover:text-green-color duration-200 transition-all ">
          <div className="flex items-center gap-3">
            <div className="w-[80px] h-[80px] rounded-full overflow-hidden">
              <Image
                src="/images/parent1.jpeg"
                width={80}
                height={80}
                className="object-cover w-full h-full"
                alt="James Smith"
              />
            </div>

            <div className="text-div flex flex-col">
              <h3 className="text-lg font-extrabold">James Smith</h3>
              <p className="text-gray-500">Speech Therapist</p>
            </div>
          </div>

          <div className="like_div">
            <TbFileLike className="text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
