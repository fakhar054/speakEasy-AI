"use client";
import Sidebar from "@/components/dahboardsidebar/Sidebar";
import React, { useEffect, useRef, useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { FaCalendar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { GrGallery } from "react-icons/gr";
import { RiSaveLine } from "react-icons/ri";
import { BsCalendar2CheckFill } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";
import Image from "next/image";
import { VscHome } from "react-icons/vsc";

export default function page() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      

      <div className="container mx-auto p-6">
        <div className="welcom">
          <h1 className="text-3xl font-extrabold text-gray-800">
            Welcome to Dashboard
          </h1>
          <p className="mt-2 text-gray-500">
            Here is a quick look at your current status.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="group flex items-center justify-between p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-green-color/30 transition-all cursor-pointer">
            <div className="flex items-center gap-5">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-green-color/10 text-green-color transition-colors group-hover:bg-green-color group-hover:text-white">
                <FaCalendar className="text-2xl " />
              </div>

              <div className="flex flex-col">
                <span className="text-3xl font-bold text-gray-900 leading-none">
                  4
                </span>
                <span className="text-sm font-medium text-gray-500 mt-1 uppercase tracking-wider">
                  Upcoming Appointments
                </span>
              </div>
            </div>

            <div className="text-gray-300 group-hover:text-green-color transition-colors translate-x-0 group-hover:translate-x-1">
              <FaArrowRight className="text-xl text-black" />
            </div>
          </div>

          <div className="group flex items-center justify-between p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-green-color/30 transition-all cursor-pointer">
            <div className="flex items-center gap-5">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-green-color/10 text-green-color transition-colors group-hover:bg-green-color group-hover:text-white">
                <IoIosHeart className="text-2xl" />
              </div>

              <div className="flex flex-col">
                <span className="text-3xl font-bold text-gray-900 leading-none">
                  2
                </span>
                <span className="text-sm font-medium text-gray-500 mt-1 uppercase tracking-wider">
                  Favourite Doctors
                </span>
              </div>
            </div>

            <div className="text-gray-300 group-hover:text-green-color transition-colors translate-x-0 group-hover:translate-x-1">
              <FaArrowRight className="text-xl text-black" />
            </div>
          </div>
        </div>

        <div className="actions_div mt-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-green-color pl-4">
            Quick Actions
          </h2>

          <div className="parent_div grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Box 1: Favourite Doctors */}
            <div className="group flex flex-col items-center justify-center p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-green-color/10 text-gray-600 mb-4 group-hover:bg-green-color group-hover:text-white transition-all duration-300 shadow-inner">
                <RiSaveLine className="text-3xl" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 group-hover:text-green-color transition-colors">
                Favourite Doctors
              </h3>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                Access your saved medical experts
              </p>
            </div>

            {/* Box 2: Edit Profile */}
            <div className="group flex flex-col items-center justify-center p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-green-color/10 text-gray-600 mb-4 group-hover:bg-green-color group-hover:text-white transition-all duration-300 shadow-inner">
                <FaUserEdit className="text-3xl" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 group-hover:text-green-color transition-colors">
                Edit Profile
              </h3>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                Update your personal account details
              </p>
            </div>

            {/* Box 3: Gallery */}
            <div className="group flex flex-col items-center justify-center p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-green-color/10 text-gray-600 mb-4 group-hover:bg-green-color group-hover:text-white transition-all duration-300 shadow-inner">
                <BsCalendar2CheckFill className="text-3xl" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 group-hover:text-green-color transition-colors">
                Gallery
              </h3>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                View your images and medical uploads
              </p>
            </div>

            <div className="group flex flex-col items-center justify-center p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-green-color/10 text-gray-600 mb-4 group-hover:bg-green-color group-hover:text-white transition-all duration-300 shadow-inner">
                <BsCalendar2CheckFill className="text-3xl" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 group-hover:text-green-color transition-colors">
                Appointment Booking
              </h3>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                Schedule and manage your upcoming visits with specialists.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
