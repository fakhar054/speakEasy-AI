import Ballon from "@/components/ballon/Ballon";
import React from "react";

export default function page() {
  return (
    <div className="min-h-screen w-full welcome_page flex flex-col items-center justify-center gap-4 welcome_page">
      <div className="mb-5 pic_sec">
        <div className="img_div w-48 h-48 mt-10">
          <img src="/images/logo.png" />
        </div>
        <div className="logo_div flex items-center gap-1">
          <p className="welcome text-lg text-black ">Welcom To</p>
          <h1 className="text-green-color text-2xl text-center logo_text ">
            SpeakEasy AI
          </h1>
        </div>
      </div>
      <button
        className="w-[80%] max-w-md bg-green-color text-white font-bold 
       rounded-full text-center "
      >
        Login
      </button>

      <div>
        <a
          href="#"
          className="text-xl font-bold border-b-black text-green-color"
        >
          Register
        </a>
      </div>
      <div className="bar_div flex items-center gap-2 w-[80%] max-w-md">
        <div className="flex-1 h-px bg-gray-600"></div>
        <p>Or Continue With</p>
        <div className="flex-1 h-px bg-gray-600"></div>
      </div>

      <div className="flex items-center justify-between gap-5 w-[80%] max-w-md">
        <button className="px-2 py-2 border flex flex-1 gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 transition duration-150">
          <img
            className="w-6 h-6"
            src="https://www.svgrepo.com/show/475656/google.svg"
            loading="lazy"
            alt="google logo"
          />
          <span>Login with Google</span>
        </button>
        <button className="flex items-center flex-1 justify-center gap-2 w-full px-4 py-2 bg-[#1877F2] text-white rounded-md hover:bg-[#166fe5] transition">
          <img
            src="https://www.svgrepo.com/show/475647/facebook.svg"
            className="w-5 h-5 invert"
            alt="Facebook"
          />
          <span>Continue with Facebook</span>
        </button>
      </div>
      <Ballon />
    </div>
  );
}
