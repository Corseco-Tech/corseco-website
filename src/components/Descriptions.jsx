import Image from 'next/image'
import React from 'react'

const Descriptions = () => {
  return (
    <div className='flex  lg:px-30 md:px-15 px-5 md:py-17 py-10 flex-col gap-6 bg-white'>
      <div className='sm:p-10 p-5 flex lg:flex-row flex-col items-center gap-6 bg-[#F0F0F0] md:rounded-[40px] rounded-[20px]'>
          <div className=' flex flex-col lg:w-1/2 order-2 lg:order-1 gap-2 '>
            <p className='font-bold md:text-[40px] text-[16px] text-center md:text-left leading-[120%]'>Quality verification - Instant QC, zero guesswork</p>
            <p  className=' text-[#808080] sm:text-base text-xs leading-[150%]' >Say goodbye to manual checks and delayed reports. Our AI-driven QC system verifies the quality 
                of goods the moment they’re inspected—whether at the factory floor, port, or warehouse. Using advanced image 
                recognition, data validation, and location tracking, we deliver instant, objective proof that your shipments meet 
                required standards. No human bias. No uncertainty.
                 Just fast, consistent, and verifiable quality—on every shipment, anywhere in the world.</p>
          </div>
          <div className='lg:w-1/2 w-full flex lg:justify-end justify-center order-1 lg:order-2'>
            <Image src={'/images/qual;ityverification.png'} width={600} height={459} alt='qualitycheck' className='rounded-[20px]' />
          </div>
      </div>
        <div className='flex lg:flex-row flex-col items-center gap-6'>
            <div className=' sm:p-10 p-5 flex flex-col gap-6 lg:w-1/2 w-full  bg-[#F0F0F0] md:rounded-[40px] rounded-[20px] self-stretch '>
                <Image src={'/images/imageauthentication.png'} width={453} height={453} className='w-full rounded-[20px]' />
                <p  className=' font-bold md:text-[40px] text-[16px] leading-[120%] md:text-left text-center' >Image authentication - Expose fakes, ensure integrity</p>
                <p  className=' text-[#808080] sm:text-base text-xs leading-[150%]' >Every shipment is image-authenticated in real time using AI-powered computer vision. Our system scans 
                    and compares photos of goods, packaging, and labels against verified benchmarks—exposing fake, swapped, 
                    or misdeclared items instantly. No more blind spots or manual photo reviews. You get trusted, tamper-proof visual 
                    records that prove your goods are real,
                     intact, and exactly what you paid for. Integrity you can see. Fraud you can stop—before it ships.</p>
            </div>
             <div className='sm:p-10 p-5 flex flex-col gap-6 lg:w-1/2 w-full  bg-[#F0F0F0] md:rounded-[40px] rounded-[20px] self-stretch '>
                <Image src={'/images/documentvalidation.png'} width={453} height={453} className='w-full rounded-[20px]' />
                <p  className=' font-bold md:text-[40px] text-[16px] leading-[120%] md:text-left text-center' >Document validation - Paperwork matched, risk removed.</p>
                <p  className=' text-[#808080] sm:text-base text-xs leading-[150%]' >Our AI validates shipping documents the moment they’re uploaded—flagging discrepancies, missing fields, and forged entries in seconds. From invoices and packing lists to inspection reports and compliance certificates, we cross-check every detail against known data and shipment records. No more manual paperwork reviews or risky assumptions. Just instant confidence that your documents are accurate, authentic, and audit-ready.</p>
            </div>
        </div>
    </div>
  )
}

export default Descriptions