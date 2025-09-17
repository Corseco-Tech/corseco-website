"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How does verification work?",
    answer:
      "We use AI, computer vision, and forensic analysis to confirm images, documents, and shipment locations. Every trade is backed by tamper-proof data.",
  },
  {
    question: "What goods are supported?",
    answer:
      "We cover metals, pulp, furniture, machinery, and more. Our models adapt to your sector's quality standards.",
  },
  {
    question: "How fast is verification?",
    answer:
      "Results are delivered in minutes. Upload images or documents and receive near-instant verification for real-time decisions.",
  },
  {
    question: "Is integration straightforward?",
    answer:
      "Yes. Our API and tools connect with ERPs, supply chain platforms, and messaging apps for seamless integration.",
  },
];

const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="lg:px-30 md:px-15 px-5 md:py-18 py-10 bg-white">
      <div className=" ">
        <p className="font-bold md:text-[40px] text-[24px] leading-[120%] mb-6">Frequently Asked Questions</p>

        <div className="flex flex-col gap-6">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-[#808080] py-4">
              <button
                onClick={() => toggleOpen(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <span className="md:text-[24px] text-lg font-semibold">{item.question}</span>
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>

              {openIndex === index && (
                <p className="mt-2  text-gray-600">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
