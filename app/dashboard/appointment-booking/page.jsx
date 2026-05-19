"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TbFileLike } from "react-icons/tb";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

export default function page() {
  const [activeTab, setActiveTab] = useState("one");

  const tabs = ["one", "all", "upcoming"];

  const data = {
    one: [
      {
        name: "Dr. John Smith",
        date: "20 May 2026",
        time: "10:30 AM",
        img: "/images/parent1.jpeg",
        status: "completed",
      },
    ],
    all: [
      {
        name: "Dr. Alice Brown",
        date: "21 May 2026",
        time: "11:00 AM",
        img: "/images/parent1.jpeg",
        status: "completed",
      },
      {
        name: "Dr. Mark Lee",
        date: "22 May 2026",
        time: "09:30 AM",
        img: "/images/parent1.jpeg",
        status: "completed",
      },
    ],
    upcoming: [
      {
        name: "Dr. Sarah Khan",
        date: "25 May 2026",
        time: "02:00 PM",
        img: "/images/parent1.jpeg",
        status: "completed",
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen ">
      <h1 className="text-3xl font-extrabold ">Appointments</h1>
      <p className="mt-2 text-gray-500">View and manage your appointments</p>

      <div className="bg-white border border-green-color rounded-2xl p-4 my-5">
        <div className="flex border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-3 text-sm font-semibold capitalize transition-all
              ${
                activeTab === tab
                  ? "border-b-2 border-green-600 text-green-600"
                  : "text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-4 space-y-3 bg-gray-100 p-3">
          {data[activeTab].map((doc, i) => (
            <div
              key={i}
              className="flex items-center justify-between border border-gray-200 rounded-xl overflow-hidden bg-white px-4"
            >
              <div className="flex items-center gap-3 p-3 w-full cursor-pointer hover:shadow-md transition">
                <div className="w-[60px] h-[60px] rounded-lg overflow-hidden">
                  <Image
                    src={doc.img}
                    width={60}
                    height={60}
                    className="object-cover w-full h-full"
                    alt={doc.name}
                  />
                </div>

                <div className="flex flex-col">
                  <h3 className="font-bold text-base">{doc.name}</h3>

                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <FaCalendarAlt className="text-xs" />
                    <span>{doc.date}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <FaClock className="text-xs" />
                    <span>{doc.time}</span>
                  </div>
                </div>
              </div>

              <button className="bg-green-color text-white px-4 py-2 h-full cursor-pointer rounded-3xl">
                {doc.status}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
