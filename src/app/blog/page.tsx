'use client';
import CustomCard from '@/components/custom-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';

interface BlogCard {
    category: string;
    date: string;
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
}

const cards: BlogCard[] = [
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
    },
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

const Blog: React.FC = () => {
    const [step, setStep] = useState<string>('All');
    const [currentPage, setCurrentPage] = useState<number>(1);
    
    const stepToCategoryMap: Record<string, string> = {
        'Quality Control': 'QUALITY CONTROL',
        'AI QC': 'QUALITY CONTROL',
        'Document Parsing': 'DOCUMENT PARSING',
        'Compliance': 'DOCUMENT PARSING',
        'Forensics': 'FORENSICS'
    };

    const filteredCards = step === 'All' ? cards : cards.filter(card => card.category === stepToCategoryMap[step]);
    
    return (
        <div className='flex flex-col gap-20 xl:px-30  md:px-10 px-5 mt-5 my-20 '>
            <div className='flex flex-col gap-4'>
                <p className='text-[72px] font-bold'>Blog</p> 
                <div className='flex items-center flex-wrap justify-between md:gap-10 gap-5'>
                    <div className='flex flex-wrap  gap-2 '> 
                        <Button
                            onClick={() => setStep('All')}
                            className={`${step === 'All' ? ' text-black border hover:bg-white bg-white border-gray-500 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]' : 'bg-white hover:bg-white text-black border border-white shadow-none  '} cursor-pointer font-bold`}
                        >
                            All 
                        </Button>
                        <Button
                            onClick={() => setStep('Quality Control')}
                            className={`${step === 'Quality Control' ? ' text-black border hover:bg-white bg-white border-gray-500 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]' : 'bg-white hover:bg-white text-black border border-white shadow-none '} cursor-pointer font-bold`}
                        >
                            Quality Control 
                        </Button>
                        <Button
                            onClick={() => setStep('AI QC')}
                            className={`${step === 'AI QC' ? ' text-black border hover:bg-white bg-white border-gray-500 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]' : 'bg-white hover:bg-white text-black border border-white shadow-none  '} cursor-pointer font-bold`}
                        >
                            AI QC 
                        </Button>
                        <Button
                            onClick={() => setStep('Document Parsing')} 
                            className={`${step === 'Document Parsing' ? ' text-black border hover:bg-white bg-white border-gray-500 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]' : 'bg-white hover:bg-white text-black border border-white shadow-none '} cursor-pointer font-bold`}
                        >
                            Document Parsing 
                        </Button>
                        <Button
                            onClick={() => setStep('Compliance')}
                            className={`${step === 'Compliance' ? ' text-black border hover:bg-white bg-white border-gray-500 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]' : 'bg-white hover:bg-white text-black border border-white shadow-none '} cursor-pointer font-bold`}
                        >
                            Compliance 
                        </Button>
                        <Button
                            onClick={() => setStep('Forensics')}
                            className={`${step === 'Forensics' ? '  text-black border hover:bg-white bg-white border-gray-500 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]' : 'bg-white hover:bg-white text-black border border-white shadow-none '} cursor-pointer font-bold`}
                        >
                            Forensics 
                        </Button>
                    </div>
                    <div className='p-4 flex items-center  justify-between bg-[#F5F5F5] rounded-[8px]  w-[384px]'>
                        <Input placeholder='which post are you looking for?' className='w-full border-none shadow-none focus-visible:ring-0' />
                        <div className='cursor-pointer p-1 bg-white rounded-[8px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.867 18 18 14.867 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18ZM19.485 18.071L22.314 20.899L20.899 22.314L18.071 19.485L19.485 18.071Z" fill="#1A1A1A"/>
                            </svg>
                        </div>   
                    </div>
                </div>
            </div>
            <CustomCard cards={filteredCards}/>
            <div className='flex items-center justify-center gap-2'>
                <ChevronLeft onClick={() => setCurrentPage(currentPage - 1)}  className={`${currentPage === 1 ? 'hidden' : ''}`}/>
                <p className={`${currentPage === 1 ? 'text-black p-2 rounded-full border h-10 w-10 flex items-center justify-center' : 'text-gray-500 border border-white h-10 w-10 flex items-center justify-center'}`}>1</p>
                <p className={`${currentPage === 2 ? 'text-black p-2 rounded-full border h-10 w-10 flex items-center justify-center' : 'text-gray-500 border border-white h-10 w-10 flex items-center justify-center'}`}>2</p>
                <p className={`${currentPage === 3 ? 'text-black p-2 rounded-full border h-10 w-10 flex items-center justify-center' : 'text-gray-500 border border-white h-10 w-10 flex items-center justify-center'}`}>3</p>
                <p className={`${currentPage === 4 ? 'text-black p-2 rounded-full border h-10 w-10 flex items-center justify-center' : 'text-gray-500 border border-white h-10 w-10 flex items-center justify-center'}`}>4</p>
                <p className={`${currentPage === 5 ? 'text-black p-2 rounded-full border h-10 w-10 flex items-center justify-center' : 'text-gray-500 border border-white h-10 w-10 flex items-center justify-center'}`}>5</p>
                <ChevronRight onClick={() => setCurrentPage(currentPage + 1)} className={`${currentPage === 5 ? 'hidden' : ''}  border border-white  flex items-center justify-center`}/>
            </div>
        </div>
    );
};

export default Blog;
