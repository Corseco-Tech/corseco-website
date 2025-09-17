'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const bulletpoints = (): React.JSX.Element => {
    return (
        <div className='shrink-0'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM12 7.05L16.95 12L12 16.95L7.05 12L12 7.05ZM12 9.879L9.879 12L12 14.121L14.121 12L12 9.879Z" fill="#808080"/>
            </svg>
        </div>
    );
};

const ScrapAndMetals: React.FC = () => {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);
    
    return (
        <div className='lg:px-30  md:px-10 px-5 mt-20 lg:mb-20 mb-10 flex flex-col gap-10'>
            <div className='flex flex-col gap-10 justify-center '>
                <p className='lg:text-[72px] md:text-[48px] text-[32px] font-[700] text-[#1A1A1A] text-center leading-[120%]'>Scrap & Metals</p>
                <div className='flex justify-center w-full h-[460px]'>
                    <Image src={'/assets/scrap-and-metals.png'} alt='scrapandmetals' width={1000} height={1000} className='w-full h-full object-cover md:rounded-[24px] rounded-[8px]' />
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='md:text-[24px] text-[16px]  text-[#808080] leading-[150%] text-center sm:text-left'> Ensure every load meets industry standards with AI-powered scrap verification. Our system grades ferrous and non-ferrous metals using ISRI specifications, detecting contamination, mix-ups, and mislabels instantly. From clean copper to shredded steel, get real-time grading, visual proof, and traceable QC reports—before materials move. No guesswork. Just verified value.</p>
                </div>
            </div>
            <div className='flex flex-col  gap-20'>
                <div className="flex flex-wrap items-center justify-center gap-10">
                    <p className='flex items-start md:items-center gap-2'> {bulletpoints()} Automated ISRI-grade classification of ferrous & non-ferrous scrap</p>
                    <p className='flex items-start md:items-center gap-2'> {bulletpoints()} Image-based verification of material type, purity, and contamination</p>
                    <p className='flex items-start md:items-center gap-2'> {bulletpoints()}Real-time document validation for compliance and export clearance</p>
                    <p className='flex items-start md:items-center gap-2'> {bulletpoints()} Geo-tagged inspections to prove load authenticity and on-site checks </p>
                    <p className='flex items-start md:items-center gap-2'> {bulletpoints()}Digital audit trails to resolve disputes and build buyer confidence </p>
                </div>
                <div className="flex flex-col bg-[#F5F5F5] items-center gap-8 md:py-12 px-5 py-6 md:rounded-[40px] rounded-[20px]">
                    <div className="flex flex-col gap-8 items-center">
                        <div className='flex flex-col gap-2 justify-center items-center'>
                            <p className="md:text-[40px] text-[24px] font-[700] text-center leading-[120%]">Want to See It in Action?</p>
                            <p className="md:text-[24px] text-base  md:w-[70%] w-full text-center leading-[150%]">Book a demo today and find out how recyclers, exporters, and scrap processors are using Corseco to protect margins, reduce risk, and scale with confidence.</p>
                        </div>
                        <Button onClick={() => {
                            setLoading(true);
                            router.push('/booking');
                            setLoading(false);   
                        }} 
                            className=' items-center cursor-pointer justify-center gap-2 p-2 border border-[#808080] hidden lg:flex rounded-[8px] w-[266px] h-[48px] bg-[#F5F5F5]  hover:bg-gray-200'>
                            <p className='font-[700] text-[24px]  leading-[150%] text-[#1A1A1A]'>Book Demo</p>
                            {
                                loading ? (
                                    <div className='animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900'></div>
                                ) : (
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
            </div>
        </div>
    );
};

export default ScrapAndMetals;
