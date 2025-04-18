"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import faqImage from "../../../../public/assest/faqImage/placeholder.png"; // Update path

const faqs = [
  {
    question: "How can I register for an event?",
    answer:
      "You can register online by visiting our event page, selecting your preferred event, and completing the registration form. You’ll receive a confirmation email with event details after successful registration.",
  },
  {
    question: "Are tickets refundable if I can’t attend?",
    answer:
      "You can register online by visiting our event page, selecting your preferred event, and completing the registration form. You’ll receive a confirmation email with event details after successful registration.",
  },
  {
    question: "Will there be networking opportunities?",
    answer: "",
  },
  {
    question: "Do you offer virtual or hybrid event options?",
    answer: "",
  },
  {
    question: "Can I become a speaker at one of your events?",
    answer: "",
  },
  {
    question: "Is there a dress code for the events?",
    answer: "",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="px-4 py-12 md:px-20 bg-white text-black">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Image */}
        <div className="w-[500px] h-[500px] rounded-xl overflow-hidden shadow-md">
          <Image
            src={faqImage}
            alt="FAQ"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right FAQ Accordion */}
        <div className="space-y-6">
          {faqs.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => toggle(index)}
                className="flex items-center justify-between w-full text-left font-medium text-lg border-b pb-2"
              >
                <span>
                  {index + 1}. {item.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-gray-600" />
                ) : (
                  <ChevronDown className="text-gray-600" />
                )}
              </button>
              {openIndex === index && item.answer && (
                <p className="text-sm text-gray-600 mt-2">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
