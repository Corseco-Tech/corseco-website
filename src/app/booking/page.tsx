"use client";
import React from 'react';
import { InlineWidget } from 'react-calendly';

const Booking: React.FC = () => {
  return (
    <div className='flex flex-col gap-10 mt-20 mb-20'>
      {/* Header */}
      <div className='text-center px-4'> 
        <h1 className='lg:text-[72px] md:text-[40px] text-[32px] font-bold leading-tight'>
          We&apos;re Excited to Meet You!
        </h1>
        <p className='lg:text-[24px] md:text-[20px] text-[16px] text-[#808080] mt-4'>
          Grab a time that works best for you.
        </p>
      </div>

      <div className='flex lg:flex-row flex-col items-start gap-6 lg:gap-10 px-4 sm:px-6 lg:px-20'>
        {/* Left Side - Call Details */}
        <div className='w-full lg:w-[43%] flex flex-col gap-6 lg:pr-8'>
          <h2 className='lg:text-[40px] md:text-[32px] text-[24px] font-bold leading-[150%]'>
            Free <span className='text-[#808080]'>30 Minutes Strategy Call</span>
          </h2>
          
          <div className='space-y-6'>
            <div className='space-y-3'>
              <h3 className='lg:text-[24px] md:text-[20px] text-[16px] font-bold text-[#78797C]'>
                On this strategy call we&apos;ll discuss:
              </h3>
              <ul className='list-disc pl-6 space-y-2 md:text-[16px] text-[14px] text-[#78797C]'>
                <li>Detecting tampering, image fraud</li>
                <li>Verifying shipment origins</li>
                <li>Automated QC for shipments</li>
              </ul>
            </div>
            
            <div className='space-y-3'>
              <h3 className='lg:text-[24px] md:text-[20px] text-[16px] font-bold text-[#78797C]'>
                From there, we&apos;ll do a deep-dive into the products built to solve many of the issues related to global shipping
              </h3>
              <ul className='list-disc pl-6 space-y-2 md:text-[16px] text-[14px] text-[#78797C]'>
                <li>QC and compliance reports</li>
                <li>Validate FSC, PEFC and more</li>
                <li>ERP, Supply chain connect</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side - Calendly Default Widget */}
        <div className='w-full lg:w-[57%] flex justify-center lg:border-l border-[#E0E0E0] lg:pl-10'>
          <div className='w-full'>
            <InlineWidget 
              url="https://calendly.com/vivek-corseco/30min?hide_event_type_details=1&hide_gdpr_banner=1"
              styles={{
                height: '500px',
                width: '100%'
              }}
              prefill={{
                name: '',
                email: ''
              }}
              utm={{
                utmCampaign: 'Strategy Call',
                utmSource: 'Website',
                utmMedium: 'Booking Form'
              }}
               pageSettings={{
                hideLandingPageDetails: false,
                hideEventTypeDetails: false,
                backgroundColor: '#ffffff',
                textColor: '#4d5055',
                primaryColor: '#00a2ff'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
