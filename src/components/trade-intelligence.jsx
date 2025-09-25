"use client";
import React, { useState } from 'react'
import { Button } from './ui/button'
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import CustomCard from './custom-card';


const cards = [
    {
      category: 'QUALITY CONTROL',
      date: 'JULY 26, 2025',
      title: 'AI grades scrap with precision',
      description: 'Automated grading boosts accuracy and trust for global scrap trade.',
      imageSrc: '/assets/quality-control.png',
      imageAlt: 'qc'
    },
    {
      category: 'DOCUMENT PARSING',
      date: 'JULY 26, 2025',
      title: 'Compliance, automated and assured',
      description: 'AI parsing eliminates manual errors and keeps you audit-ready.',
      imageSrc: '/assets/document-parsing.png',
      imageAlt: 'qc'
    },
    {
      category: 'FORENSICS',
      date: 'JULY 26, 2025',
      title: 'Spot image fraud before it costs you',
      description: 'Forensic analysis exposes tampering and prevents costly disputes.',
      imageSrc: '/assets/forensics.png',
      imageAlt: 'qc'
    }
  ];
const Tradeintelligence = () => {
    const [step, setStep]= useState('1')
    return (
        <div className='lg:px-30 md:px-15 px-5 md:py-10 py-5 flex flex-col gap-10 bg-[#F5F5F5]' >
            <div className='flex flex-col gap-4 '>
                <div className='flex justify-between items-center'>
                    <p className='md:text-[40px] text-[24px] font-[700] leading-[120%]'>Latest trade intelligence</p>
                    <div className='flex gap-2 items-center'>View all  
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M16.172 11.0002L10.808 5.63617L12.222 4.22217L20 12.0002L12.222 19.7782L10.808 18.3642L16.172 13.0002H4V11.0002H16.172Z" fill="#1A1A1A" />
                    </svg>
                    </div>
                </div>
               <p className='md:text-[24px] text-base text-[#808080] leading-[150%]'>From our blog articles - actionable updates on digital QC, AI verification, and global trade trust.</p>
            </div>
              <div className='flex flex-wrap md:gap-10 gap-5'>
                <Button
                 onClick={()=>setStep(1)}
                className={`${step === 1 ? ' text-black border hover:bg-white bg-white border-gray-500 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]' : 'bg-white hover:bg-white text-black  border border-r-white  '} cursor-pointer`} >All </Button>
                  <Button
                  onClick={()=>setStep(2)}
                className={`${step === 2 ? ' text-black border hover:bg-white bg-white border-gray-500 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]' : 'bg-white hover:bg-white text-black border border-r-white '} cursor-pointer`}
                  >Quality Control </Button>
                    <Button
                   onClick={()=>setStep(3)}
                className={`${step === 3 ? ' text-black border hover:bg-white bg-white border-gray-500 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]' : 'bg-white hover:bg-white text-black border border-r-white '} cursor-pointer`}
                    >AI QC </Button>
                      <Button
                     onClick={()=>setStep(4)} 
                className={`${step === 4 ? ' text-black border hover:bg-white bg-white border-gray-500 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]' : 'bg-white hover:bg-white text-black border border-r-white '} cursor-pointer`}
                      >Document Parsing </Button>
                      <Button
                       onClick={()=>setStep(5)}
                className={`${step === 5 ? ' text-black border hover:bg-white bg-white border-gray-500 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]' : 'bg-white hover:bg-white text-black  border border-r-white'} cursor-pointer`}
                      >Compliance </Button>
                       <Button
                       onClick={()=>setStep(6)}
                className={`${step === 6 ? '  text-black border hover:bg-white bg-white border-gray-500 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]' : 'bg-white hover:bg-white text-black border border-r-white'} cursor-pointer`}
                      >Forensics </Button>

             </div>
           
              <CustomCard cards={cards} />
    </div>
       
    )
}

export default Tradeintelligence