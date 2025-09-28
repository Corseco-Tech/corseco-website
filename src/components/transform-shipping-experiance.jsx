'use client';
import React, { useState } from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

const Transformshippingexperiance = () => {
  const router= useRouter();
  const [loading, setLoading]= useState(false)
  return (
   
               <div className="flex flex-col bg-[#F5F5F5] items-center gap-8 md:py-12 px-5 py-6 md:rounded-[40px] rounded-[20px]">
                   <div className="flex flex-col gap-2 items-center">
                      <p className="md:text-[40px] text-[24px] font-[700] text-center leading-[120%]">Transform your shipping experience</p>
                      <p className="md:text-[24px] text-base  md:w-[70%] w-full text-center leading-[150%]">AI-driven QC for global shipments, Instantly verify goods, documents and locations - no delays, no uncertainty.</p>
                   </div>
                   
                   {/* Dual CTAs */}
                   <div className="flex flex-col sm:flex-row gap-4">
                     <Button onClick={()=>{
                       window.open('https://product.corseco.tech', '_blank')
                     }} 
                       className='items-center cursor-pointer justify-center gap-2 p-2 border border-[#808080] hidden lg:flex rounded-[8px] w-[266px] h-[48px] bg-white hover:bg-gray-100'>
                       <p className='font-[700] text-[24px] leading-[150%] text-[#1A1A1A]'>Try It Now</p>
                     </Button>
                     
                     <Button onClick={()=>{
                       setLoading(true)
                       router.push('/booking')
                       setLoading(false)   
                     }} 
                       className='items-center cursor-pointer justify-center gap-2 p-2 border border-[#808080] hidden lg:flex rounded-[8px] w-[266px] h-[48px] bg-[#F5F5F5] hover:bg-gray-200'>
                       <p className='font-[700] text-[24px] leading-[150%] text-[#1A1A1A]'>Book Demo</p>
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
                               
         
  )
}

export default Transformshippingexperiance