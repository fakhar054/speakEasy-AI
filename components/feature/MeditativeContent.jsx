import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function MeditativeContent() {
  return (
    <div className="bg-green-color text-white flex flex-col md:flex-row items-center rounded-2xl p-8 gap-8">
      <div className="flex flex-1  flex-col gap-4">
        <div className="card flex  items-center gap-4 border border-white rounded-xl px-4 py-2">
          <Image
            src="/images/moon.jpg"
            alt="moon image speaksEasy AI"
            width={100}
            height={100}
            className="rounded-xl"
          />
          <div>
            <h2 className="text-xl font-bold">Moonlit Rest & Sleep Stories</h2>
            <p className="text-sm">
              Helping children wind down after a long day of big emotions.
            </p>
          </div>
        </div>
        <div className="card flex  items-center gap-4 border border-white rounded-xl px-4 py-2 ml-4">
          <Image
            src="/images/river.jpg"
            alt="moon image speaksEasy AI"
            width={100}
            height={100}
            className="rounded-xl"
          />
          <div>
            <h2 className="text-xl font-bold">The Flow of Feelings</h2>
            <p className="text-sm">
              Just like a river, emotions are meant to move.
            </p>
          </div>
        </div>
      </div>
      <div className="content_sec flex-1 flex flex-col gap-4">
        <h1 className="text-3xl font-extrabold mb-3">
          Therapeutic Tales for Tiny Hearts
        </h1>
        <p>
          We’ve reimagined bedtime and "quiet time" into a restorative clinical
          tool. Each audio-visual journey uses trauma-informed narratives and
          rhythmic pacing to help children process big feelings, visualize
          safety, and anchor themselves in the present moment.
        </p>

        <div className="flex items-center gap-2 border border-white w-fit px-3 py-2 rounded-xl hover:bg-white hover:text-green-color duration-200 transition-all">
          <a href="#" className="">
            Start a Sensory Journey
          </a>
          <span>
            <FaArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
}
