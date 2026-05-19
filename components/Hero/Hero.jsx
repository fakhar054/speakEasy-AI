// import React from "react";
// import Image from "next/image";
// import Ballon from "../ballon/Ballon";
// import Heroslider from "../heroslider/Heroslider";

// export default function Hero() {
//   return (
//     <div className="container hero   md:h-[95vh] py-2 mb-3 relative">
//       <div className="parenet_div flex flex-col-reverse gap-4 md:flex-row items-center h-full relative">
//         <div className="left_side  md:w-1/2 px-4 ">
//           <div className="absolute top-5 left-5">
//             <Image
//               src="/images/shooting-star.png"
//               alt="Logo"
//               width={100}
//               height={100}
//               className="animate-arrow-grow w-32 h-auto"
//             />
//           </div>

//           <h1 className="text-3xl font-extrabold mr-2 mb-4 text-center text-green-color">
//             SpeakEasy AI
//           </h1>

//           <h1 className="text-3xl font-bold mb-4">
//             Helping Little Hearts Find Big Words.
//           </h1>

//           <p className="text-xl mb-6">
//             Watch your child flourish through guided play and emotional
//             discovery.
//           </p>
//           <button
//             className="bg-green-color text-white px-6 py-3 rounded-full font-semibold
//           transition-transform duration-200 hover:scale-95 active:scale-90 shadow-lg shadow-green-500/40 cursor-pointer"
//           >
//             Find Your Child’s Guide
//           </button>
//         </div>
//         <div className="right_side md:w-1/2 ">
//           {/* <img src="/images/hero-pic.png" alt="Hero pic" /> */}
//           <Heroslider />
//         </div>
//       </div>
//       {/* <Ballon /> */}
//     </div>
//   );
// }

import React from "react";
import Image from "next/image";
import Ballon from "../ballon/Ballon";
import Heroslider from "../heroslider/Heroslider";

export default function Hero() {
  return (
    <div className="container hero min-h-[90vh] md:h-[95vh] py-6 mb-3 relative flex items-center">
      {/* 1. Adjusted mobile padding and layout alignment */}
      <div className="parenet_div flex flex-col-reverse gap-6 md:flex-row items-center justify-center w-full h-full relative z-10">
        {/* Left Side (Text & Download Button) */}
        <div className="left_side w-full md:w-1/2 px-4 text-center md:text-left flex flex-col items-center md:items-start">
          {/* Shooting Star Image - Made absolute to the section instead of breaking text layout */}
          <div className="absolute top-2 left-2 md:top-5 md:left-5 opacity-70 md:opacity-100">
            <Image
              src="/images/shooting-star.png"
              alt="Logo"
              width={100}
              height={100}
              className="animate-arrow-grow w-20 md:w-32 h-auto"
            />
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-green-600">
            SpeakEasy AI
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 leading-tight">
            Helping Little Hearts Find Big Words.
          </h2>

          <p className="text-base md:text-xl text-gray-600 mb-6 max-w-md md:max-w-none">
            Watch your child flourish through guided play and emotional
            discovery.
          </p>

          {/* 2. Integrated your styled APK Download Link here */}
          <a
            href="/speekEasyAI.apk"
            download
            className="flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-full font-semibold whitespace-nowrap shadow-lg shadow-green-500/30 text-sm md:text-base transition-transform duration-200 hover:scale-95 active:scale-90 cursor-pointer"
          >
            Download App
          </a>
        </div>

        {/* Right Side (Slider) */}
        {/* 3. Scaled down the slider container on mobile so it doesn't swallow the viewport */}
        <div className="right_side w-full max-w-[320px] sm:max-w-[400px] md:max-w-none md:w-1/2 px-4">
          <Heroslider />
        </div>
      </div>
      {/* <Ballon /> */}
    </div>
  );
}
