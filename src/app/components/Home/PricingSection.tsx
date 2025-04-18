"use client";

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
            <p className="text-sm text-gray-600 mb-4">1 Visitor</p>
            <ul className="space-y-2 text-left text-sm text-gray-700 mb-6">
              <li>✔️ Access to all keynote sessions</li>
              <li>✔️ Entry to exhibition area</li>
              <li>❌ No access to workshops</li>
              <li>❌ No networking lounge access</li>
            </ul>
          </div>
          <button className="bg-[#5a4bff] text-white text-sm font-medium px-4 py-2 rounded-md">
            GET TICKET NOW
          </button>
        </div>

        {/* Ordinary Pass Card */}
        <div className="bg-[#5a4bff] rounded-xl shadow-xl p-6 text-center text-white min-h-[450px] flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2">Ordinary Pass</h3>
            <p className="text-4xl font-bold mb-1">$149</p>
            <p className="text-sm mb-4">1 Visitor</p>
            <ul className="space-y-2 text-left text-sm mb-6">
              <li>✔️ Access to all keynote sessions</li>
              <li>✔️ Entry to exhibition area</li>
              <li>❌ No access to workshops</li>
              <li>❌ No networking lounge access</li>
            </ul>
          </div>
          <button className="bg-white text-[#5a4bff] text-sm font-medium px-4 py-2 rounded-md">
            GET TICKET NOW
          </button>
        </div>
      </div>
    </section>
  );
}
