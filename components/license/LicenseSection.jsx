// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { FaArrowRight } from "react-icons/fa";
// import Image from "next/image";

// export default function LicenseSection() {
//   const videoRef = useRef(null);
//   // Set default to English video
//   const [videoSrc, setVideoSrc] = useState("/english_video.mp4");

//   useEffect(() => {
//     const checkLanguage = () => {
//       const match = document.cookie.match(/(^| )googtrans=([^;]+)/);
//       if (match) {
//         const value = match[2];
//         if (value.endsWith("/lv")) {
//           setVideoSrc("/lativian_video.mp4");
//           return;
//         }
//       }

//       setVideoSrc("/english_video.mp4");
//     };

//     checkLanguage();

//     const handleGlobalClick = () => {
//       setTimeout(checkLanguage, 300);
//     };

//     document.addEventListener("click", handleGlobalClick);

//     return () => {
//       document.removeEventListener("click", handleGlobalClick);
//     };
//   }, []);

//   useEffect(() => {
//     if (videoRef.current && videoSrc) {
//       videoRef.current.load();
//     }
//   }, [videoSrc]);

//   return (
//     <div className="container mx-auto my-3">
//       <div className="flex flex-col-reverse md:flex-row md:items-center">
//         <div className="left_section flex-1 p-6">
//           <div className="flex flex-col gap-6">
//             <h1 className="text-3xl font-bold">
//               Help your child reach for the stars.
//             </h1>
//             <p className="text-xl">
//               Every child’s journey is unique. Our specialized therapy sessions
//               provide the tools and emotional support your little one needs to
//               overcome hurdles and shine bright.
//             </p>
//             <a className="flex w-fit font-medium my-3 gap-2 px-6 py-2 rounded-3xl bg-green-color text-white items-center cursor-pointer hover:bg-white border border-green-color hover:text-green-color transition-all duration-200 hover:scale-95 shadow-lg shadow-green-500/40">
//               <span href="#" className="">
//                 Start Their Journey
//               </span>
//               <FaArrowRight />
//             </a>
//           </div>
//         </div>

//         <div className="right_section flex-1 p-6">
//           {videoSrc ? (
//             <video
//               ref={videoRef}
//               src={videoSrc}
//               autoPlay
//               loop
//               playsInline
//               muted
//               controls
//               preload="auto"
//               className="w-full h-[400px] rounded-lg object-cover"
//             />
//           ) : (
//             <div className="w-full h-[400px] bg-gray-100 rounded-lg flex items-center justify-center text-gray-400"></div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

export default function LicenseSection() {
  const videoRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState("/english_video.mp4");

  useEffect(() => {
    const checkLanguage = () => {
      // Method 1: Check Google Translate Cookie
      const match = document.cookie.match(/(^| )googtrans=([^;]+)/);
      if (match) {
        const value = match[2];
        if (value.endsWith("/lv")) {
          setVideoSrc("/lativian_video.mp4"); // Fixed typo from your state config
          return;
        }
      }

      // Method 2: Fallback check of the HTML lang attribute set by Google Translate
      const htmlLang = document.documentElement.getAttribute("lang");
      if (htmlLang === "lv") {
        setVideoSrc("/lativian_video.mp4");
        return;
      }

      // Default back to English
      setVideoSrc("/english_video.mp4");
    };

    // 1. Run check immediately when component mounts
    checkLanguage();

    // 2. Setup MutationObserver to watch the <html> tag for language changes
    const observer = new MutationObserver(() => {
      checkLanguage();
    });

    observer.observe(document.documentElement, {
      attributes: true, // Watch for attribute changes
      attributeFilter: ["lang", "class"], // Specifically watch lang or google class changes
    });

    // 3. Keep the global click listener as a backup safety net
    const handleGlobalClick = () => {
      setTimeout(checkLanguage, 300);
    };
    document.addEventListener("click", handleGlobalClick);

    // Cleanup observer and event listener
    return () => {
      observer.disconnect();
      document.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current && videoSrc) {
      videoRef.current.load();
    }
  }, [videoSrc]);

  return (
    <div className="container mx-auto my-3">
      <div className="flex flex-col-reverse md:flex-row md:items-center">
        <div className="left_section flex-1 p-6">
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold">
              Help your child reach for the stars.
            </h1>
            <p className="text-xl">
              Every child’s journey is unique. Our specialized therapy sessions
              provide the tools and emotional support your little one needs to
              overcome hurdles and shine bright.
            </p>
            <a className="flex w-fit font-medium my-3 gap-2 px-6 py-2 rounded-3xl bg-green-color text-white items-center cursor-pointer hover:bg-white border border-green-color hover:text-green-color transition-all duration-200 hover:scale-95 shadow-lg shadow-green-500/40">
              <span href="#" className="">
                Start Their Journey
              </span>
              <FaArrowRight />
            </a>
          </div>
        </div>

        <div className="right_section flex-1 p-6">
          {videoSrc ? (
            <video
              ref={videoRef}
              src={videoSrc}
              autoPlay
              loop
              playsInline
              muted
              controls
              preload="auto"
              className="w-full h-[400px] rounded-lg object-cover"
            />
          ) : (
            <div className="w-full h-[400px] bg-gray-100 rounded-lg flex items-center justify-center text-gray-400"></div>
          )}
        </div>
      </div>
    </div>
  );
}
