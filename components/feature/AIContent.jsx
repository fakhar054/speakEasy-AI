import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function AIContent() {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className=" p-6 rounded-xl border-l-4 bg-green-color text-white">
          <div className="flex flex-col md:flex-row items-center ">
            <div className="left_side flex-1">
              <Image
                src="/images/therpatic.png"
                width={300}
                height={250}
                alt="speaksEasy Ai image"
              />
            </div>

            <div className="right_side flex-1">
              <div className="flex flex-col gap-4">
                <h1 className="font-extrabold text-3xl mb-3">
                  Bridging the Gap with Heart-Led AI
                </h1>
                <p>
                  Empowering counselors to focus on the child while our
                  Emotional AI Assistant handles the data. Understory provides a
                  holistic AI Mental Health Report that maps a child's progress,
                  ensuring no emotional nuance is missed in the journey toward
                  healing.
                </p>
                <div className="flex items-center gap-2 border border-white w-fit px-3 py-2 rounded-xl hover:bg-white hover:text-green-color duration-200 transition-all">
                  <a href="#" className="">
                    Discover the Human-AI Bond
                  </a>
                  <span>
                    <FaArrowRight />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
