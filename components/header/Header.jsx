"use client";
import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import TranslateWrapper from "../google-translator/TranslaterWrapper";

import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  const handleGlobeClick = () => {
    const googleTeCombo =
      document.querySelector(".goog-te-gadget-simple") ||
      document.querySelector("#google_translate_element select");

    if (googleTeCombo) {
      googleTeCombo.click();
    } else {
      console.log("Google Translate widget is still loading...");
    }
  };

  return (
    <>
      <nav className="fixed top-2 left-0 w-full z-50">
        <div className="header_margin_top flex justify-center w-full relative z-30 ">
          <div className="container header_section rounded-2xl shadow-lg shadow-green-500/50 bg-white">
            <div className="flex items-center justify-between py-2 px-4">
              <div className="left_section flex items-center gap-6">
                <div className="log_div h-12 flex items-center gap-3">
                  {/* Hamburger Button - Toggles isOpen */}
                  <div
                    className="menu_div md:hidden text-2xl cursor-pointer"
                    onClick={() => setIsOpen(true)}
                  >
                    <IoMenu />
                  </div>
                  <img
                    src="/images/logo.png"
                    alt="Logo"
                    className="w-12 h-12 object-contain"
                  />
                </div>

                {/* Desktop Menu */}
                <ul className="list md:flex items-center gap-5 list-none font-medium text-lg m-0 p-0 hidden ">
                  <li>
                    <Link href="/" className="hover:text-green-600 transition">
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/blog"
                      className="hover:text-green-600 transition"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact-us"
                      className="hover:text-green-600 transition"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about-us"
                      className="hover:text-green-600 transition"
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="right_section flex flex-1 items-center justify-end gap-4 relative">
                <span
                  onClick={handleGlobeClick}
                  style={{
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                  title="Select Language"
                >
                  <CiGlobe size={20} />
                  <TranslateWrapper />
                </span>

                <Link
                  href="/dashboard"
                  className="hidden sm:flex items-center justify-center px-4 py-2 border border-green-600 text-green-600 rounded-md transition-all hover:bg-green-600 hover:text-white font-medium"
                >
                  Dashboard
                </Link>
                <a
                  href="#"
                  className="flex items-center justify-center px-6 py-2 bg-green-600 text-white rounded-md whitespace-nowrap font-medium hover:bg-opacity-90 shadow-sm text-sm md:text-base"
                >
                  Download App
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 1. Backdrop Overlay */}
        <div
          className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 md:hidden ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={closeMenu}
        />

        {/* 2. Sidebar Panel */}
        <aside
          className={`fixed  top-0 left-0 h-full w-[280px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-5 flex flex-col gap-6 give_padding">
            <div className="flex items-center justify-between">
              <img src="/images/logo.png" alt="Logo" className="w-10 h-10" />
              <button onClick={closeMenu} className="text-3xl text-gray-600">
                <IoClose />
              </button>
            </div>

            <nav>
              <ul className="flex flex-col gap-5 list-none font-medium text-xl">
                <li>
                  <Link
                    href="/"
                    onClick={closeMenu}
                    className="block py-2 hover:text-green-600"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/blog"
                    onClick={closeMenu}
                    className="block py-2 hover:text-green-600"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    onClick={closeMenu}
                    className="block py-2 hover:text-green-600"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={closeMenu}
                    className="block py-2 hover:text-green-600"
                  >
                    About
                  </a>
                </li>
              </ul>
            </nav>

            <div className="mt-auto border-t pt-6">
              <Link
                href="/dashboard"
                onClick={closeMenu}
                className="block w-full text-center py-3 border border-green-600 text-green-600 rounded-md font-medium"
              >
                Dashboard
              </Link>
            </div>
          </div>
        </aside>
      </nav>
    </>
  );
}
