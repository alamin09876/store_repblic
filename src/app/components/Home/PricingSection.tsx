"use client";

import { IoIosArrowDown } from "react-icons/io";
import { TiTick } from "react-icons/ti";

export default function PricingSection() {
  return (
    <section className="bg-[#fffaf5] px-4 py-16 md:px-20">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        {/* Left Text Section */}
        <div className="col-span-1">
          <h2 className="text-3xl font-bold mb-4">PRICING</h2>
          <p className="text-gray-700">
            Join leading educators, researchers, and policymakers in a global
            dialogue on the future of learning.
          </p>
        </div>

        {/* Premium Pass Card */}
        {/* Premium Pass Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-200 min-h-[450px] flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2">Premium Pass</h3>
            <p className="text-4xl font-bold mb-1">$99</p>
            <div className="flex  justify-center gap-2">
              <p className="text-sm text-black mb-4">1 Visitor</p>
              <div>
                <IoIosArrowDown className="mt-1" />
              </div>
            </div>
            <ul className="space-y-2 text-left text-sm text-gray-700 mb-6">
              <li className="flex">
                <TiTick className="mt-1" />
                <p>Access to all keynote sessions</p>
              </li>
              <li className="flex">
                <TiTick className="mt-1" />
                <p>Entry to exhibition area</p>
              </li>
              <li className="flex">
                <TiTick className="mt-1" />
                <p>No access to workshops</p>
              </li>
              <li className="flex">
                <TiTick className="mt-1" />
                <p>No networking lounge access</p>
              </li>
            </ul>
          </div>
          <button className="bg-[#5a4bff] text-white text-sm font-medium px-4 py-3 mx-14">
            GET TICKET NOW
          </button>
        </div>

        {/* Ordinary Pass Card */}
        <div className="bg-[#5a4bff] rounded-xl shadow-xl p-6 text-center text-white min-h-[450px] flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2">Ordinary Pass</h3>
            <p className="text-4xl font-bold mb-1">$149</p>
            <div className="flex  justify-center gap-2">
              <p className="text-sm text-white mb-4">1 Visitor</p>
              <div>
                <IoIosArrowDown className="mt-1 text-white" />
              </div>
            </div>
            <ul className="space-y-2 text-left text-sm text-gray-700 mb-6">
              <li className="flex">
                <TiTick className="mt-1 text-white" />
                <p className="text-white">Access to all keynote sessions</p>
              </li>
              <li className="flex">
                <TiTick className="mt-1 text-white" />
                <p className="text-white">Entry to exhibition area</p>
              </li>
              <li className="flex">
                <TiTick className="mt-1 text-white" />
                <p className="text-white">No access to workshops</p>
              </li>
              <li className="flex">
                <TiTick className="mt-1 text-white" />
                <p className="text-white">No networking lounge access</p>
              </li>
            </ul>
          </div>
          <button className="bg-white text-[#5a4bff] text-sm font-medium px-4 py-3 mx-14">
            GET TICKET NOW
          </button>
        </div>
      </div>
    </section>
  );
}
