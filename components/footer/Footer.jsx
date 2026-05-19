import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <footer className="bg-green-color text-white border-t border-gray-100 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Column 1: Brand/About */}
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-bold text-white">Little Hearts</h2>
              <p className="text-white text-sm leading-relaxed">
                Empowering children to express their emotions through the magic
                of play therapy. Helping families grow closer, one session at a
                time.
              </p>
              <Image
                src="/images/play-store.png"
                alt="speakEasy Ai playstore"
                width={150}
                height={150}
                className="cursor-pointer"
              />
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-white">
                <li>
                  <a href="#">How it Works</a>
                </li>
                <li>
                  <a href="#">Find a Therapist</a>
                </li>
                <li>
                  <a href="#">Pricing Plans</a>
                </li>
                <li>
                  <a href="#">Play Therapy FAQ</a>
                </li>
              </ul>
            </div>

            {/* Column 3: Support */}
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-white">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact/Newsletter */}
            <div>
              <h3 className="font-semibold text-white mb-4">Stay Connected</h3>
              <p className="text-sm text-white mb-4">
                Join our newsletter for tips on child emotional health.
              </p>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none  text-sm"
                />
                <button className="bg-green-color text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-all text-left border w-fit cursor-pointer hover:border-black">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-50 text-center text-xs text-white">
            <p>
              &copy; {new Date().getFullYear()} Little Hearts Therapy App. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
