"use client";
import React, { useState } from 'react'
import { Button } from './ui/button'
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

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
             <div className='flex flex-wrap md:flex-row flex-col items-center gap-6'>
                  <div className='flex flex-col max-w-[352px] rounded-[10px]'>
                    <div className='p-[1px] flex justify-center'>
                        <Image src={'/images/qualitycontrol.png'}  width={352} height={299} alt='qc' className='rounded-t-[10px] '/>
                        </div> 
                     <div className='flex flex-col gap-4 py-6 px-4 border-[2px] rounded-b-[10px]'>
                         <div className='flex justify-between items-center'>
                            <p className='text-[#808080] '>QUALITY CONTROL</p>
                            <p>JULY 26, 2025</p>
                         </div>
                         <div className='flex flex-col gap-1'>
                            <p className='font-[700] leading-[150%]'>AI grades scrap with precision</p>
                            <p className='text-[#808080]'>Automated grading boosts accuracy and trust for global scrap trade.</p>
                         </div>
                         <Button varient='outline' className='bg-inherit  text-black  border-[2px] cursor-pointer  hover:bg-inherit '>
                              Learn more <ArrowRight/>
                         </Button>
                     </div>
                  </div>
                   <div className='flex flex-col max-w-[352px] rounded-[10px]'>
                    <div className='p-[1px] flex justify-center'>
                        <Image src={'/images/documentparsing.png'}  width={352} height={299} alt='qc' className='rounded-t-[10px] '/>
                        </div> 
                     <div className='flex flex-col gap-4 py-6 px-4 border-[2px] rounded-b-[10px]'>
                         <div className='flex justify-between items-center'>
                            <p className='text-[#808080] '>DOCUMENT PARSING</p>
                            <p>JULY 26, 2025</p>
                         </div>
                         <div className='flex flex-col gap-1'>
                            <p className='font-[700] leading-[150%]'>Compliance, automated and assured</p>
                            <p className='text-[#808080]'>AI parsing eliminates manual errors and keeps you audit-ready.</p>
                         </div>
                         <Button varient='outline' className='bg-inherit  text-black  border-[2px] cursor-pointer  hover:bg-inherit '>
                              Learn more <ArrowRight/>
                         </Button>
                     </div>
                  </div>
                   <div className='flex flex-col max-w-[352px] rounded-[10px]'>
                    <div className='p-[1px] flex justify-center'>
                        <Image src={'/images/forensics.png'}  width={352} height={299} alt='qc' className='rounded-t-[10px] '/>
                        </div> 
                     <div className='flex flex-col gap-4 py-6 px-4 border-[2px] rounded-b-[10px]'>
                         <div className='flex justify-between items-center'>
                            <p className='text-[#808080] '>FORENSICS</p>
                            <p>JULY 26, 2025</p>
                         </div>
                         <div className='flex flex-col gap-1'>
                            <p className='font-[700] leading-[150%]'>Spot image fraud before it costs you</p>
                            <p className='text-[#808080]'>Forensic analysis exposes tampering and prevents costly disputes.</p>
                         </div>
                         <Button varient='outline' className='bg-inherit  text-black  border-[2px] cursor-pointer  hover:bg-inherit '>
                              Learn more <ArrowRight/>
                         </Button>
                     </div>
                  </div>
                
             </div>
        </div>
    )
}

export default Tradeintelligence