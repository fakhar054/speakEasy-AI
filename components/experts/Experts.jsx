"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    job: "Physical Therapist",
    img: "/images/parent1.jpeg",
  },
  {
    id: 2,
    name: "Dr. Alex Reed",
    job: "Manual Specialist",
    img: "/images/parent2.jpeg",
  },
  {
    id: 3,
    name: "Dr. Elena Rossi",
    job: "Sports Therapy",
    img: "/images/parent3.jpeg",
  },
  {
    id: 4,
    name: "Mark Thompson",
    job: "Recovery Coach",
    img: "/images/parent1.jpeg",
  },
  {
    id: 5,
    name: "Dr. Jane Doe",
    job: "Pediatric PT",
    img: "/images/parent2.jpeg",
  },
];

export default function Experts() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">Our Specialists</h2>

      {/* Viewport (The Ref) */}
      <div className="overflow-hidden" ref={emblaRef}>
        {/* Container (The Flex wrapper) */}
        <div className="flex">
          {/* 2. The Loop */}
          {doctors.map((doc) => (
            <div
              key={doc.id}
              // className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%] min-w-0 px-3"
              className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] min-w-0 px-3"
            >
              {/* 3. The Card UI */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src={doc.img}
                    alt={doc.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-bold text-gray-900 truncate">
                    {doc.name}
                  </h3>
                  <p className="text-sm text-green-color mb-4">{doc.job}</p>
                  <Link
                    href={`/book/${doc.id}`}
                    className="block w-full border py-2 bg-green-color text-white rounded-2xl text-sm hover:bg-white hover:border-green-color  hover:text-green-color transition"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
              {/* End Card UI */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
