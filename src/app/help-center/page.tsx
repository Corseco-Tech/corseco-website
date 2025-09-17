'use client';
import { Input } from '@/components/ui/input';
import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string[];
}

const gettingstarted: FAQItem[] = [
    {
        question: "What is Corseco Tech and how does it work?",
        answer: [
            "Learn how our AI-driven QC platform instantly verifies goods, documents, and inspection locations.",
        ],
    },
    {
        question: "How do I onboard my shipments for verification?",
        answer: [
            "Step-by-step guide to uploading shipment data, documents, and media for automated analysis.",
        ],
    },
    {
        question: "Supported file formats and data types",
        answer: [
            "Details on image, video, document formats, and metadata requirements.",
        ],
    },
];

const QualityVerification: FAQItem[] = [
    {
        question: "How does AI verify product quality?",
        answer: [
            "Learn how our computer vision algorithms assess product condition, packaging integrity, and conformity.",
        ],
    },
    {
        question: "What are quality grades and how are they assigned??",
        answer: [
            "Explanation of scrap grading, defect detection, and categorization logic.",
        ],
    },
    {
        question: "How to interpret QC reports",
        answer: [
            "Understand flags, pass/fail marks, and suggested actions in your verification dashboard.",
        ],
    },
];

const DocumentValidation: FAQItem[] = [
    {
        question: "Which documents can be verified by Corseco Tech?",
        answer: [
            "Learn how our computer vision algorithms assess product condition, packaging integrity, and conformity.",
        ],
    },
    {
        question: "How AI detects document tampering",
        answer: [
            "Behind-the-scenes look at metadata analysis, field consistency checks, and signature verification.",
        ],
    },
    {
        question: "Troubleshooting rejected documents",
        answer: [
            "Common reasons a document fails verification and how to fix it.",
        ],
    },
];

const LocationInspectionProof: FAQItem[] = [
    {
        question: "How to verify inspection locations",
        answer: [
            "Overview of geo-tagged photo analysis, timestamp validation, and inspector tracking.",
        ],
    },
    {
        question: "What counts as valid proof of inspection?",
        answer: [
            "Best practices for uploading inspection media and ensuring location accuracy.",
        ],
    },
    {
        question: "Dealing with unverified inspection attempts",
        answer: [
            "Steps to resolve mismatches between declared and actual inspection coordinates.",
        ],
    },
];

const HelpCenter: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleOpen = (index: number): void => {
        setOpenIndex(openIndex === index ? null : index);
    };
    
    return (
        <div className='flex flex-col gap-10 xl:px-30 lg:px-20 md:px-10 mt-10 px-5'>
            <div className='flex flex-col gap-6 justify-center items-center'>
                <p className='lg:text-[72px] md:text-[48px] text-[28px] font-[700] leading-[150%] text-[#1A1A1A]'>Corseco Help Center</p>
                <p className='lg:text-[24px] md:text-[16px]  font-[400] leading-[150%] text-[#808080]'>Search our guides or browse by topic</p>
                <div className='p-4 flex items-center  justify-between bg-[#F5F5F5] rounded-[8px]  w-full'>
                    <Input placeholder='Search help guides' className='w-full border-none shadow-none focus-visible:ring-0 !text-[16px] font-[400] leading-[150%] text-[#808080]' />
                    <div className='cursor-pointer p-1 bg-white rounded-[8px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.867 18 18 14.867 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18ZM19.485 18.071L22.314 20.899L20.899 22.314L18.071 19.485L19.485 18.071Z" fill="#1A1A1A" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className='flex  lg:flex-nowrap flex-wrap gap-4 w-full'>
                <div className='flex flex-col justify-between items-center w-full gap-4 p-10  border-[4px] min-w-[280px] border-[#F5F5F5] rounded-[16px]'>
                    <div className='bg-[#F5F5F5] rounded-full flex items-center justify-center p-[10px] w-[44px] h-[44px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                            <path d="M14.5 18V2H2.5V17C2.5 17.2652 2.60536 17.5196 2.79289 17.7071C2.98043 17.8946 3.23478 18 3.5 18H14.5ZM17.5 20H3.5C2.70435 20 1.94129 19.6839 1.37868 19.1213C0.816071 18.5587 0.5 17.7956 0.5 17V1C0.5 0.734784 0.605357 0.48043 0.792893 0.292893C0.98043 0.105357 1.23478 0 1.5 0H15.5C15.7652 0 16.0196 0.105357 16.2071 0.292893C16.3946 0.48043 16.5 0.734784 16.5 1V8H20.5V17C20.5 17.7956 20.1839 18.5587 19.6213 19.1213C19.0587 19.6839 18.2956 20 17.5 20ZM16.5 10V17C16.5 17.2652 16.6054 17.5196 16.7929 17.7071C16.9804 17.8946 17.2348 18 17.5 18C17.7652 18 18.0196 17.8946 18.2071 17.7071C18.3946 17.5196 18.5 17.2652 18.5 17V10H16.5ZM4.5 4H10.5V10H4.5V4ZM6.5 6V8H8.5V6H6.5ZM4.5 11H12.5V13H4.5V11ZM4.5 14H12.5V16H4.5V14Z" fill="#09121F" />
                        </svg>
                    </div>
                    <p className='sm:text-[24px] text-[20px] font-[700] leading-[120%] text-[#1A1A1A]'>Getting Started</p>
                    <p className='sm:text-[16px] text-[14px] font-[400] leading-[150%] text-[#808080] text-center'>Learn the basics</p>
                </div>
                <div className='flex flex-col justify-between items-center w-full gap-4 p-10  border-[4px] min-w-[280px] border-[#F5F5F5] rounded-[16px]'>
                    <div className='bg-[#F5F5F5] rounded-full flex items-center justify-center p-[10px] w-[44px] h-[44px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <path d="M12.5 1L20.717 2.826C21.174 2.928 21.5 3.333 21.5 3.802V13.789C21.5 15.795 20.497 17.669 18.828 18.781L12.5 23L6.172 18.781C4.502 17.668 3.5 15.795 3.5 13.79V3.802C3.5 3.333 3.826 2.928 4.283 2.826L12.5 1ZM12.5 3.049L5.5 4.604V13.789C5.5 15.126 6.168 16.375 7.281 17.117L12.5 20.597L17.719 17.117C18.832 16.375 19.5 15.127 19.5 13.79V4.604L12.5 3.05V3.049ZM16.952 8.222L18.367 9.636L12.003 16L7.76 11.757L9.174 10.343L12.002 13.171L16.952 8.221V8.222Z" fill="#09121F"/>
                        </svg>
                    </div>
                    <p className='sm:text-[24px] text-[20px] font-[700] leading-[120%] text-[#1A1A1A]'>Quality Verification</p>
                    <p className='sm:text-[16px] text-[14px] font-[400] leading-[150%] text-[#808080] text-center'>Learn about our verification process</p>
                </div>
                <div className='flex flex-col justify-between items-center w-full gap-4 p-10  border-[4px] min-w-[280px] border-[#F5F5F5] rounded-[16px]'>
                    <div className='bg-[#F5F5F5] rounded-full flex items-center justify-center p-[10px] w-[44px] h-[44px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <path d="M3.5 21C3.23478 21 2.98043 20.8946 2.79289 20.7071C2.60536 20.5196 2.5 20.2652 2.5 20V4C2.5 3.73478 2.60536 3.48043 2.79289 3.29289C2.98043 3.10536 3.23478 3 3.5 3H10.914L12.914 5H20.5C20.7652 5 21.0196 5.10536 21.2071 5.29289C21.3946 5.48043 21.5 5.73478 21.5 6V9H19.5V7H12.086L10.086 5H4.5V16.998L6 11H23L20.69 20.243C20.6358 20.4592 20.511 20.6512 20.3352 20.7883C20.1595 20.9255 19.9429 21 19.72 21H3.5ZM20.438 13H7.562L6.062 19H18.938L20.438 13Z" fill="#09121F"/>
                        </svg>
                    </div>
                    <p className='sm:text-[24px] text-[20px] font-[700] leading-[120%] text-[#1A1A1A] text-center'>Document Validation</p>
                    <p className='sm:text-[16px] text-[14px] font-[400] leading-[150%] text-[#808080] text-center'>Learn about document validation</p>
                </div>
            </div>

            <div className='flex flex-col gap-10'>
                {/* Getting Started */}
                <div className='flex flex-col gap-4'>
                    <p className='text-[24px] font-[700] leading-[120%] text-[#1A1A1A]'>Getting Started</p>
                    <div className="flex flex-col gap-6">
                        {gettingstarted.map((item, index) => (
                            <div key={index} className="border-b border-gray-300 py-4">
                                {/* Question Row */}
                                <button
                                    onClick={() => toggleOpen(index)}
                                    className="flex justify-between items-center w-full text-left"
                                >
                                    <span className="md:text-lg text-base font-[400] text-[#1A1A1A]">{item.question}</span>
                                    {openIndex === index ? (
                                        <ChevronUp size={20} />
                                    ) : (
                                        <ChevronDown size={20} />
                                    )}
                                </button>

                                {/* Answer List */}
                                {openIndex === index && (
                                    <ul className="mt-2 text-[14px] list-disc list-inside space-y-1 text-gray-600">
                                        {item.answer.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                {/* quality verification */}
                <div className='flex flex-col gap-4'>
                    <p className='text-[24px] font-[700] leading-[120%] text-[#1A1A1A]'>Quality Verification</p>
                    <div className="flex flex-col gap-6">
                        {QualityVerification.map((item, index) => (
                            <div key={index} className="border-b border-gray-300 py-4">
                                {/* Question Row */}
                                <button
                                    onClick={() => toggleOpen(index)}
                                    className="flex justify-between items-center w-full text-left"
                                >
                                    <span className="md:text-lg text-base font-[400] text-[#1A1A1A]">{item.question}</span>
                                    {openIndex === index ? (
                                        <ChevronUp size={20} />
                                    ) : (
                                        <ChevronDown size={20} />
                                    )}
                                </button>

                                {/* Answer List */}
                                {openIndex === index && (
                                    <ul className="mt-2 text-[14px] list-disc list-inside space-y-1 text-gray-600">
                                        {item.answer.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                {/* Document Validation */}
                <div className='flex flex-col gap-4'>
                    <p className='text-[24px] font-[700] leading-[120%] text-[#1A1A1A]'>Document Validation</p>
                    <div className="flex flex-col gap-6">
                        {DocumentValidation.map((item, index) => (
                            <div key={index} className="border-b border-gray-300 py-4">
                                {/* Question Row */}
                                <button
                                    onClick={() => toggleOpen(index)}
                                    className="flex justify-between items-center w-full text-left"
                                >
                                    <span className="md:text-lg text-base font-[400] text-[#1A1A1A]">{item.question}</span>
                                    {openIndex === index ? (
                                        <ChevronUp size={20} />
                                    ) : (
                                        <ChevronDown size={20} />
                                    )}
                                </button>

                                {/* Answer List */}
                                {openIndex === index && (
                                    <ul className="mt-2 text-[14px] list-disc list-inside space-y-1 text-gray-600">
                                        {item.answer.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                {/* Location & Inspection Proof */}
                <div className='flex flex-col gap-4'>
                    <p className='text-[24px] font-[700] leading-[120%] text-[#1A1A1A]'>Location & Inspection Proof</p>
                    <div className="flex flex-col gap-6">
                        {LocationInspectionProof.map((item, index) => (
                            <div key={index} className="border-b border-gray-300 py-4">
                                {/* Question Row */}
                                <button
                                    onClick={() => toggleOpen(index)}
                                    className="flex justify-between items-center w-full text-left"
                                >
                                    <span className="md:text-lg text-base font-[400] text-[#1A1A1A]">{item.question}</span>
                                    {openIndex === index ? (
                                        <ChevronUp size={20} />
                                    ) : (
                                        <ChevronDown size={20} />
                                    )}
                                </button>

                                {/* Answer List */}
                                {openIndex === index && (
                                    <ul className="mt-2 text-[14px] list-disc list-inside space-y-1 text-gray-600">
                                        {item.answer.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpCenter;
