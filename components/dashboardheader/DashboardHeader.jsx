"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { FaUserEdit } from "react-icons/fa";
import { VscHome } from "react-icons/vsc";
import { FaArrowRight } from "react-icons/fa";

export default function DashboardHeader() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  return (
    <div>
      <header className=" bg-green-color text-white px-8 py-6 shadow-lg flex justify-end">
        <div className="relative" ref={menuRef}>
          <div
            onClick={() => setOpen(!open)}
            className="img_name_div cursor-pointer hover:bg-white hover:text-green-color flex items-center gap-2 rounded w-fit px-4 py-2 transition-all duration-200"
          >
            <Image
              src="/images/human.png"
              alt="profile"
              width={50}
              height={50}
            />

            <div className="name_div">
              <h3 className="text-lg font-extrabold">Mr.Patient</h3>
              <p>1213234</p>
            </div>
          </div>

          {open && (
            <div className="absolute right-0 mt-3 w-56 bg-white text-black shadow-lg rounded-lg p-3 z-50">
              <button className="w-full text-left px-2 py-2 hover:bg-gray-100 rounded flex items-center gap-2">
                <FaUserEdit />
                <h5>Edit Profile</h5>
              </button>

              <button className="w-full text-left px-2 py-2 hover:bg-gray-100 rounded flex items-center gap-2">
                <VscHome />
                <h5>Back to Home</h5>
              </button>

              <button className="w-full text-left px-2 py-2 text-red-500 hover:bg-gray-100 rounded flex items-center gap-2">
                <FaArrowRight />
                <h5>Logout</h5>
              </button>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
