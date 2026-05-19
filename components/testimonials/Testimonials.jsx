// "use client";
// import React from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import Image from "next/image";

// const testimonials = [
//   {
//     name: "Sarah Jenkins",
//     role: "Parent",
//     text: "The progress my son has made in just three months is incredible. The therapists here truly care.",
//     image: "/images/parent1.jpeg",
//   },
//   {
//     name: "David Miller",
//     role: "Parent",
//     text: "A warm, welcoming environment. The AI tools helped us track milestones we didn't even know existed!",
//     image: "/images/parent2.jpeg",
//   },
//   {
//     name: "Emily Chen",
//     role: "Guardian",
//     text: "Finally, a place where my daughter feels understood. The shooting star theme is so encouraging for her.",
//     image: "/images/parent3.jpeg",
//   },

//   {
//     name: "Sarah Jenkins",
//     role: "Parent",
//     text: "The progress my son has made in just three months is incredible. The therapists here truly care.",
//     image: "/images/parent1.jpeg",
//   },
//   {
//     name: "David Miller",
//     role: "Parent",
//     text: "A warm, welcoming environment. The AI tools helped us track milestones we didn't even know existed!",
//     image: "/images/parent2.jpeg",
//   },
//   {
//     name: "Emily Chen",
//     role: "Guardian",
//     text: "Finally, a place where my daughter feels understood. The shooting star theme is so encouraging for her.",
//     image: "/images/parent3.jpeg",
//   },
// ];

// export default function Testimonials() {
//   const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

//   return (
//     <div className="container mx-auto my-3 bg-green-color p-8 rounded-lg">
//       <h1 className="text-3xl font-bold text-center mb-8 text-white">
//         Testimonials
//       </h1>

//       <div
//         className="overflow-hidden cursor-grab active:cursor-grabbing"
//         ref={emblaRef}
//       >
//         <div className="flex">
//           {testimonials.map((item, index) => (
//             <div
//               key={index}
//               className="flex-[0_0_100%] min-w-0 px-4 md:flex-[0_0_50%]"
//             >
//               <div className="flex flex-col text-center md:flex-col items-center bg-white p-8 rounded-2xl shadow-sm border border-slate-100 h-full gap-3">
//                 <Image
//                   src={item.image}
//                   width={200}
//                   height={200}
//                   alt="client views"
//                 />
//                 <div className=" flex flex-col justify-between">
//                   <p className="text-slate-600 italic mb-6">"{item.text}"</p>
//                   <div>
//                     <h4 className="font-bold text-green-color">{item.name}</h4>
//                     <p className="text-sm text-slate-400">{item.role}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Parent",
    text: "The progress my son has made in just three months is incredible. The therapists here truly care.",
    image: "/images/parent1.jpeg",
  },
  {
    name: "David Miller",
    role: "Parent",
    text: "A warm, welcoming environment. The AI tools helped us track milestones we didn't even know existed!",
    image: "/images/parent2.jpeg",
  },
  {
    name: "Emily Chen",
    role: "Guardian",
    text: "Finally, a place where my daughter feels understood. The shooting star theme is so encouraging for her.",
    image: "/images/parent3.jpeg",
  },
  {
    name: "Sarah Jenkins",
    role: "Parent",
    text: "The progress my son has made in just three months is incredible. The therapists here truly care.",
    image: "/images/parent1.jpeg",
  },
  {
    name: "David Miller",
    role: "Parent",
    text: "A warm, welcoming environment. The AI tools helped us track milestones we didn't even know existed!",
    image: "/images/parent2.jpeg",
  },
  {
    name: "Emily Chen",
    role: "Guardian",
    text: "Finally, a place where my daughter feels understood. The shooting star theme is so encouraging for her.",
    image: "/images/parent3.jpeg",
  },
];

export default function Testimonials() {
  // 1. Pass 'align: "center"' options object alongside Autoplay
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  // 2. Callback logic to get the exact center slide index from Embla
  const onSelect = useCallback((api) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    // Check index on load and whenever a new selection snap happens
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="container mx-auto my-3 bg-green-color p-8 rounded-lg overflow-hidden">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">
        Testimonials
      </h1>

      <div
        className="overflow-hidden cursor-grab active:cursor-grabbing"
        ref={emblaRef}
      >
        <div className="flex -ml-4 py-4">
          {" "}
          {/* Added padding so scaling doesn't clip top/bottom card shadows */}
          {testimonials.map((item, index) => {
            // Check if this card matches the visible snapped index
            const isCenter = index === selectedIndex;

            return (
              <div
                key={index}
                // Mobile: 100% width, Tablet: 50% width, Desktop: 33.33% width (Exactly 3 cards)
                className="flex-[0_0_100%] min-w-0 px-4 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] transition-all duration-500 ease-out"
                style={{
                  transform: isCenter ? "scale(1)" : "scale(0.85)",
                  opacity: isCenter ? "1" : "0.65",
                }}
              >
                <div className="flex flex-col text-center items-center bg-white p-8 rounded-2xl shadow-md border border-slate-100 h-full gap-3 transition-shadow duration-300">
                  <div className="relative w-[120px] h-[120px] mb-2 overflow-hidden rounded-full border-2 border-slate-100">
                    <Image
                      src={item.image}
                      fill
                      className="object-cover"
                      alt={item.name}
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-grow">
                    <p className="text-slate-600 italic mb-6">"{item.text}"</p>
                    <div>
                      <h4 className="font-bold text-green-color">
                        {item.name}
                      </h4>
                      <p className="text-sm text-slate-400">{item.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
