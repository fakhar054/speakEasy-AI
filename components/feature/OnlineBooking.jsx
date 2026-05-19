import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function OnlineBooking() {
  return (
    <div className="bg-green-color rounded-2xl">
      <div className="main_div flex flex-col md:flex-row p-6 items-center gap-6">
        <div className="left_side flex-1">
          <Image
            src="/images/calendar.png"
            alt="speaksEasy Calendar image"
            width={500}
            height={500}
          />
        </div>
        <div className="right_side flex-1 flex flex-col gap-5 text-white">
          <h1 className="text-3xl font-extrabold">
            Coordination Without the Chaos
          </h1>
          <p>
            Managing your child’s care shouldn't feel like a full-time job. Our
            Appointment Hub simplifies the journey, giving families a single,
            gentle space to sync sessions, track upcoming visits, and stay
            connected with their care team—leaving you more energy to focus on
            what matters most: your child.
          </p>
          <div className="flex items-center gap-2 border cursor-pointer border-white w-fit px-3 py-2 rounded-xl hover:bg-white hover:text-green-color duration-200 transition-all">
            <a href="#" className="">
              Simplify Your Schedule
            </a>
            <span>
              <FaArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
