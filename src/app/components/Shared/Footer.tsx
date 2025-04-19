"use client";

import { Facebook, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import image from "../../../../public/assest/backgroundImage/Vector.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 relative overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0 bg-[url('/assest/backgroundImage/footer.jpg')] bg-cover bg-center opacity-15" />

      {/* Main content grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Newsletter */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-purple-400">DaeVnt</h2>
          <p className="text-sm text-gray-300 leading-relaxed pr-6">
            Pellentesque nec tempor sapien. Pellentesque vel placerat nibh.
            Suspendisse venenatis.
          </p>
          <div className="flex border-b border-[#7546FF] w-full max-w-sm">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="bg-transparent text-white text-sm px-2 py-2 w-full focus:outline-none placeholder:text-gray-400"
            />
            <button className="text-sm px-4 py-2 text-white hover:text-purple-400">
              Subscribe →
            </button>
          </div>
        </div>

        <div className="hidden md:flex justify-center items-start pt-4 relative">
          <Image
            src={image}
            alt="Mic Illustration"
            width={220}
            height={220}
            className="mask-image-fade object-contain opacity-80"
          />
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#">About Events</a>
            </li>
            <li>
              <a href="#">Future Events</a>
            </li>
            <li>
              <a href="#">Top Speakers</a>
            </li>
            <li>
              <a href="#">FAQ Pages</a>
            </li>
            <li>
              <a href="#">Get Ticket</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Address</h3>
          <p className="text-sm text-gray-300 leading-relaxed mb-3">
            827 Roxanne Rd, Toronto,
            <br />
            ON M3A 1K5, Canada
          </p>
          <p className="text-sm mb-1">
            Phone:{" "}
            <span className="text-white font-medium">+1-416-8241228</span>
          </p>
          <p className="text-sm">
            Email:{" "}
            <span className="text-white font-medium">info@email.com</span>
          </p>
        </div>
      </div>

      {/* Bottom Bar (Dimmer Look) */}
      <div className="relative z-10 mt-8 px-4  mx-auto flex flex-col md:flex-row justify-between items-center border-t border-[#7546FF] pt-6 ">
        <p className="text-xs text-gray-400">
          © 2025 ThemeMarch. All Rights Reserved.
        </p>
        <div className="flex gap-4 mt-4 md:mt-0 pr-36">
          <a
            href="#"
            className="p-2 border border-gray-600 rounded-full hover:bg-gray-700 transition"
          >
            <Facebook size={16} className="text-gray-300" />
          </a>
          <a
            href="#"
            className="p-2 border border-gray-600 rounded-full hover:bg-gray-700 transition"
          >
            <Linkedin size={16} className="text-gray-300" />
          </a>
          <a
            href="#"
            className="p-2 border border-gray-600 rounded-full hover:bg-gray-700 transition"
          >
            <Twitter size={16} className="text-gray-300" />
          </a>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button className="fixed bottom-6 right-6 bg-white text-black px-4 py-2 rounded-4xl shadow-md hover:bg-gray-200 z-50">
        ↑
      </button>
    </footer>
  );
}
