import Transformshippingexperiance from '@/components/transform-shipping-experience';
import Image from 'next/image';
import React from 'react';

const bulletpoints = (): React.JSX.Element => {
    return (
        <div className='shrink-0'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM12 7.05L16.95 12L12 16.95L7.05 12L12 7.05ZM12 9.879L9.879 12L12 14.121L14.121 12L12 9.879Z" fill="#808080"/>
            </svg>
        </div>
    );
};

const CustomIntegrations: React.FC = () => {
    return (
        <div className='lg:px-30  md:px-10 px-5 mt-20 lg:mb-20 mb-10 flex flex-col gap-10'>
            <div className='flex flex-col gap-10 justify-center '>
                <p className='lg:text-[72px] md:text-[48px] text-[32px] font-[700] text-[#1A1A1A] text-center leading-[120%]'>Custom Integrations</p>
                <div className='flex justify-center w-full h-[460px]'>
                    <Image src={'/assets/custom-integrations.png'} alt='mettrade-ai' width={1000} height={1000} className='w-full h-full object-cover md:rounded-[24px] rounded-[8px]' />
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-[24px] font-[700] text-[#1A1A1A] leading-[120%] text-center sm:text-left'>OVERVIEW</p>
                    <p className='md:text-[24px] text-[16px]  text-[#808080] leading-[150%] text-center sm:text-left'>Corseco integrates seamlessly into your tech stack to bring automated QC into your existing logistics, ERP, or compliance workflows.</p>
                </div>
            </div>
            <div className='flex flex-col gap-10'>
                <div className='flex flex-col gap-2'>
                    <p className='text-[24px] font-[700] text-[#1A1A1A] leading-[120%] text-center sm:text-left'>WHAT IT DOES</p>
                    <ul className='list-disc list-inside text-[#808080] space-y-2'>
                        <li className='flex items-start md:items-center gap-2'> {bulletpoints()}REST APIs and webhook support</li>
                        <li className='flex items-start md:items-center gap-2'> {bulletpoints()}Plug-ins for popular platforms (SAP, Oracle, Zoho, etc.)</li>
                        <li className='flex items-start md:items-center gap-2'> {bulletpoints()} Custom data exchange formats (CSV, JSON, XML)</li>
                        <li className='flex items-start md:items-center gap-2'> {bulletpoints()} Integration onboarding support from Corseco engineers </li>
                    </ul>
                </div>  
                <div className='flex flex-col gap-2 '>
                    <p className='text-[24px] font-[700] text-[#1A1A1A] text-center sm:text-left leading-[120%]'>WHO IS IT FOR?</p>
                    <p className='flex  items-start md:items-center gap-2 text-[#808080] '> {bulletpoints()} Large organizations looking to unify quality control with internal tools, supply chain visibility platforms, or third-party logistics systems.</p>
                </div>
                <div></div>
                <div></div>
            </div>
            <Transformshippingexperiance/>
            <div></div>
        </div>
    );
};

export default CustomIntegrations;
