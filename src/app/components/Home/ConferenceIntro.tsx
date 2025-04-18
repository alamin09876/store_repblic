"use client";

import { CheckCircle } from "lucide-react";
import Image from "next/image";
import imageOne from "../../../../public/assest/conferenceImage/placeholder (1).png";
import imageTwo from "../../../../public/assest/conferenceImage/placeholder (2).png";
import image from "../../../../public/assest/conferenceImage/placeholder.png";

const features = [
  {
    title: "Expert keynote speakers",
    desc: "Hear from thought leaders and industry pioneers as they share their expertise, trends, and strategies to keep you ahead of the curve.",
  },
  {
    title: "Education Programs",
    desc: "Engage in interactive sessions, workshops, and masterclasses designed to expand your skills and knowledge in your field.",
  },
  {
    title: "Notes & Highlights",
    desc: "Stay informed with key takeaways, session summaries, and exclusive insights to ensure you never miss a moment of valuable content.",
  },
];

export default function ConferenceIntro() {
  return (
    <section className="bg-black text-white px-4 py-16 md:px-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="grid grid-cols-6 gap-4">
          {/* Full-width first image */}
          <div className="col-span-6  overflow-hidden max-w-[600px] max-h-[450px]">
            <Image
              src={image}
              alt="Main"
              className="object-cover w-full h-full"
              width={600}
              height={450}
            />
          </div>

          {/* Second image - spans 4 columns */}
          <div className="col-span-4  overflow-hidden max-w-[400px] max-h-[250px]">
            <Image
              src={imageOne}
              alt="Second"
              className="object-cover w-full h-full"
              width={400}
              height={250}
            />
          </div>

          {/* Third image - spans 2 columns */}
          <div className="col-span-2  overflow-hidden max-w-[200px] max-h-[250px]">
            <Image
              src={imageTwo}
              alt="Third"
              className="object-cover w-full h-full"
              width={200}
              height={250}
            />
          </div>
        </div>

        {/* Right Section - Text */}
        <div>
          <p className="uppercase text-sm text-gray-400 mb-3">
            About the Conference
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
            Where Innovation Meets <br /> Virtual Experiences
          </h2>

          <div className="space-y-6 mb-8">
            {features.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="text-blue-500 mt-1" size={20} />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-lg font-medium text-white">
            Join us as we redefine conference for the 21st century!
          </p>
        </div>
      </div>
    </section>
  );
}
