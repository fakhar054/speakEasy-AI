import React from "react";
import { RiContactsFill } from "react-icons/ri";
import { FaCalendar } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default function page() {
  return (
    <div className="container mx-auto bg-gray-50 min-h-screen rounded-2xl text-black p-6">
      <div className="mb-5">
        <h1 className="text-5xl font-extrabold mb-2">Reports</h1>
        <p>View and download your consultation reports</p>
      </div>
      <div className="group bg-white rounded-2xl border border-green-color px-4 py-3 text-black flex items-center justify-between cursor-pointer hover:group-text-green-color">
        <div className="patient_div">
          <h3 className="text-lg font-semibold mb-1">Mr Patient</h3>
          <div className="flex items-center gap-1">
            <span>
              <RiContactsFill />
            </span>
            <p>Fakhir Ali</p>
          </div>
          <div className="flex items-center gap-1">
            <span>
              <FaCalendar />
            </span>
            <p>May 15, 2026, 07:35 P:M</p>
          </div>
        </div>
        <div className="icon_div">
          <IoIosArrowForward className="text-2xl" />
        </div>
      </div>
    </div>
  );
}
