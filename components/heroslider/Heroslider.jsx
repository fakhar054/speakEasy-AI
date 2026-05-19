"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const images = [
  "/slider_images/one.jpg",
  "/slider_images/two.jpg",
  "/slider_images/three.jpg",
  "/slider_images/four.jpg",
  "/slider_images/five.jpg",

  "/slider_images/six.jpg",
  "/slider_images/seven.jpg",
  "/slider_images/eight.jpg",
  "/slider_images/nine.jpg",
  "/slider_images/ten.jpg",

  "/slider_images/elven.jpg",
  "/slider_images/twelve.jpg",
  "/slider_images/thirteen.jpg",
];

export default function Heroslider() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
      }),
    ],
  );

  return (
    <div>
      <div className="w-full max-w-5xl mx-auto py-10">
        <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
          <div className="flex">
            {images.map((img, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <div className="relative w-full h-[400px] md:h-[500px]">
                  <Image
                    src={img}
                    alt={`slide-${index}`}
                    fill
                    className=""
                    priority={index === 0}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
