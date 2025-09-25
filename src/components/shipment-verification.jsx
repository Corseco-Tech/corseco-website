'use client';
import { ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';


const faqData = [
  {
    question: "Automated QC for global shipments",
    answer: [
      "Instant quality verification across factories, ports, and warehouses",
      "AI-powered image analysis detects damage, defects, and mislabels",
      "Real-time document validation for invoices, certificates, and customs forms",
      "GPS & timestamped proof to verify location and inspection time",
      "Fake shipment detection using visual and metadata cross-matching",
      "Automated compliance checks tailored to your industry and region",
      "Tamper-proof digital audit trail for every shipment",
      "Seamless integration with your existing logistics and ERP tools",
      "Consistent inspection standards, no matter the region or inspector",
    ],
  },
  {
    question: "Detect tampering with forensic AI",
    answer: [
      "Pixel-level analysis to expose image edits, overlays, and visual inconsistencies",
      "Metadata integrity checks to catch altered timestamps, filenames, and device IDs",
      "Packaging and seal verification to detect broken, resealed, or tampered packaging",
      "Version comparison between inspection records to spot unauthorized changes",
      "Anomaly detection for unexpected differences in weight, dimensions, or product state",
      "Geo-verified inspection media to confirm images/videos were captured at the correct location and time",
      "Real-time red flag alerts triggered by suspected tampering or fraud",
      "Immutable evidence trail for traceable, audit-ready documentation of every incident",
    ],
  },
  {
    question: "Proof of origin and compliance",
    answer: [
      "Certificate validation for origin, safety, and regulatory documents",
      "Automated cross-checking of supplier data with government and trade registries",
      "Blockchain-backed proof of origin to ensure authenticity and traceability",
      "Country-of-origin verification using shipment metadata and manufacturer profiles",
      "Real-time compliance checks against international trade regulations (e.g., FDA, CE, RoHS)",
      "Instant flagging of non-compliant or blacklisted suppliers",
      "Audit-ready document storage with digital signatures and timestamps",
      "Custom rule engines for region-specific standards and buyer requirements",
      "Tamper-proof compliance logs to support due diligence and customs clearance",
    ],
  },
];

const ShipmentVerification = () => {
    const router= useRouter()
    const [openIndex, setOpenIndex] = useState(null);
    const [loading, setLoading]= useState(false)
  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className='lg:px-30 md:px-15 px-5 md:py-20 py-10'>     
          <div className='sm:p-10 p-5 flex  md:flex-row flex-col items-center gap-6  md:rounded-[40px] rounded-[20px]'>
                <div className=' flex flex-col md:w-1/2 w-full order-2 md:order-1 gap-2 '>
                  <p className='font-bold md:text-[40px] text-[24px] text-center md:text-left leading-[120%]'>Verify every shipment. Instantly.</p>
                    <div className="flex flex-col gap-6">
      {faqData.map((item, index) => (
        <div key={index} className="border-b border-gray-300 py-4">
          {/* Question Row */}
          <button
            onClick={() => toggleOpen(index)}
            className="flex justify-between items-center w-full text-left"
          >
            <span className="md:text-lg text-base font-semibold">{item.question}</span>
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
        <Button onClick={()=>{
          setLoading(true)
        router.push('/booking')
        setLoading(false)   
      }} 
        className=' items-center cursor-pointer justify-center gap-2 p-2 border border-[#808080] hidden lg:flex rounded-[8px] w-[266px] h-[48px] bg-[#F5F5F5]  hover:bg-gray-200'>
        <p className='font-[700] text-[24px]  leading-[150%] text-[#1A1A1A]'>Book Demo</p>
        {
          loading ? (
            <div className='animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900'></div>
          ):(
            (
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
           <path d="M16.672 11L11.308 5.63605L12.722 4.22205L20.5 12L12.722 19.778L11.308 18.364L16.672 13H4.5V11H16.672Z" fill="#1A1A1A" />
         </svg>
           )
          )
        }
       
      </Button>
    </div>
                </div>
                <div className='md:w-1/2 w-full order-1 md:order-2 flex justify-end'>
                  <Image src={'/assets/shipment-verification.png'} width={600} height={459} alt='qualitycheck' className='rounded-[20px]' />
                </div>
            </div>
            </div>
  )
}

export default ShipmentVerification