"use client";

import Image from "next/image";
import Link from "next/link";
import { AiOutlineX } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { RiFacebookLine } from "react-icons/ri";
import { RxInstagramLogo } from "react-icons/rx";
import image from "../../../../public/assest/backgroundImage/Vector.png";
import imageOne from "../../../../public/assest/logoImage/logo.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 relative overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0 bg-[url('/assest/backgroundImage/footer.jpg')] bg-cover bg-center opacity-15" />

      {/* Main content grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left">
        {/* Logo + Image in flex */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:col-span-2">
          {/* Logo & Newsletter */}
          <div className="space-y-6 w-full md:w-1/2 text-center md:text-left">
            <div className="flex gap-4">
              <div>
                <Image
                  src={imageOne}
                  alt="Mic Illustration"
                  width={50}
                  height={50}
                  className="mask-image-fade object-contain opacity-80"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-purple-400">DaeVnt</h2>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed md:pr-6">
              Pellentesque nec tempor sapien. Pellentesque vel placerat nibh.
              Suspendisse venenatis.
            </p>
            <div className="flex flex-col sm:flex-row border-b border-[#7546FF] w-full max-w-sm mx-auto md:mx-0">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="bg-transparent text-white text-sm px-2 py-2 w-full focus:outline-none placeholder:text-gray-400"
              />
              <button className="text-sm px-4 py-2 text-white hover:text-purple-400 flex items-center gap-1 whitespace-nowrap">
                Subscribe <span>→</span>
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="hidden md:flex justify-center items-start pt-4 w-1/2">
            <Image
              src={image}
              alt="Mic Illustration"
              width={220}
              height={220}
              className="mask-image-fade object-contain opacity-80"
            />
          </div>
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
          <h3 className="text-lg font-semibold mb-1">Address</h3>
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            827 Roxanne Rd, Toronto,
            <br />
            ON M3A 1K5, Canada
          </p>
          <p className="text-sm mb-4">
            Phone: <br />
            <span className="text-white font-medium">+1-416-8241228</span>
          </p>
          <p className="text-sm">
            Email: <br />
            <span className="text-white font-medium">info@email.com</span>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 mt-8 px-4 mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left border-t border-[#7546FF] pt-6">
        <p className="text-xs text-gray-400">
          © 2025 ThemeMarch. All Rights Reserved.
        </p>
        <div className="flex gap-4 mt-4 md:mt-0 md:pr-36 justify-center md:justify-end">
          <a
            href="#"
            className="group p-2 border border-gray-600 rounded-full hover:bg-white transition"
          >
            <RiFacebookLine
              size={16}
              className="text-gray-300 group-hover:text-black transition"
            />
          </a>
          <a
            href="#"
            className="group p-2 border border-gray-600 rounded-full hover:bg-white transition"
          >
            <FaLinkedinIn
              size={16}
              className="text-gray-300 group-hover:text-black transition"
            />
          </a>
          <a
            href="#"
            className="group p-2 border border-gray-600 rounded-full hover:bg-white transition"
          >
            <AiOutlineX
              size={16}
              className="text-gray-300 group-hover:text-black transition"
            />
          </a>
          <a
            href="#"
            className="group p-2 border border-gray-600 rounded-full hover:bg-white transition"
          >
            <RxInstagramLogo
              size={16}
              className="text-gray-300 group-hover:text-black transition"
            />
          </a>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <Link href={"/"}>
        <button className="fixed bottom-6 right-6 bg-white text-black px-4 py-2 rounded-4xl shadow-md hover:bg-gray-200 z-50 cursor-pointer">
          ↑
        </button>
      </Link>
    </footer>
  );
}
