import React from "react";
import Image from "next/image";
import { IoMdArrowDown } from "react-icons/io";

export default function Join() {
  return (
    <div>
      <section className="flex flex-col md:flex-row w-full min-h-[400px] gap-8 px-6 py-12">
        {/* LEFT SECTION (Smaller - 1/3 width) */}
        <div className="md:w-1/3 flex flex-col justify-center bg-slate-50 p-8 rounded-2xl">
          <Image
            src="/images/mobile-screen.png"
            width={600}
            height={400}
            alt="Mobile"
          />
        </div>

        {/* RIGHT SECTION (Larger - 2/3 width) */}
        <div className="md:w-2/3 bg-white border border-slate-100 shadow-sm rounded-2xl p-8 flex items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <div className=" flex flex-col gap-2">
              <div>
                <h3 className="text-2xl font-bold text-black">Join the</h3>
                <h1 className="text-4xl font-extrabold text-green-color">
                  SpeakEasy AI
                </h1>
              </div>
              <p>
                The UnderstoryKids journey doesn't end when the session is over.
                Our mobile app keeps you connected to your child's progress,
                anywhere, anytime.
              </p>
              {/* <Image
                src="/images/play-store.png"
                width={170}
                height={170}
                alt="play store image"
                className="cursor-pointer"
              /> */}

              <a
                href="/speekEasyAI.apk"
                download
                className="bg-green-color text-white py-2 px-4 rounded-2xl w-fit"
              >
                <div className="flex items-center gap-2 ">
                  <p>Downloand APK</p>
                  <IoMdArrowDown />
                </div>
              </a>
            </div>
            <div className="p-4 border-l-4 border-green-color bg-green-50/30">
              <h3 className="text-lg font-bold flex flex-col md:flex-row items-center gap-4 mb-3">
                Why Join
                <span className="text-3xl font-extrabold text-green-color">
                  SpeakEasy AI
                </span>
                ?
              </h3>
              <div className="text-black">
                <ul className="list-disc list-inside marker:text-green-color flex flex-col gap-2">
                  <li>AI-Powered Assessment</li>
                  <li> Progress Tracking & Reporting</li>
                  <li>Online & Offline Accessibility</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
