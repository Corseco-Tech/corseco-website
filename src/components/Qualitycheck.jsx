import React from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import Image from 'next/image'

const Qualitycheck = () => {
  return (
    <div className='flex flex-col  lg:px-[120px] md:px-15 px-5  py-[47px] gap-10'>
        <div className='flex flex-col gap-2 text-center '> 
            <p className='font-bold md:text-[40px] text-[24px] leading-[120%]'>Verified quality. Trusted trade. Every time.</p>
            <p className='md:text-[24px] text-base leading-[150%] '>AI powered QC, forensic image analysis, and document verification - delivering trust and transparency for global trade.</p>
        </div>
        <div className='flex  justify-center flex-wrap gap-6'>
            <Card className={'w-[344px]'}> 
                <CardHeader>
                    <Image src={'/images/aiinspection.png'} height={277} width={382} className='rounded-[20px]'/>
                </CardHeader>
                <CardContent>
                     <p className='md:text-[24px]  text-lg font-bold leading-[120%]'>AI - driven inspections</p>
                     <p  className='text-[#808080] md:text-base text-sm leading-[150%] '>Automated image analysis detects defects, grades quality, and ensures every shipment meets your standards.</p>
                </CardContent>
            </Card>
            <Card  className={'w-[344px]'}>
                <CardHeader>
                    <Image src={'/images/forensicphoto.png'} height={277} width={382} className='rounded-[20px]'/>
                </CardHeader>
                <CardContent>
                     <p className='md:text-[24px]  text-lg font-bold leading-[120%]'>Forensic photo validation</p>
                     <p  className='text-[#808080] md:text-base text-sm  leading-[150%] '>Advanced metadata forensics and camera fingerprinting flag tampered or reused images instantly..</p>
                </CardContent>
            </Card>
            <Card  className={'w-[344px]'}>
                <CardHeader>
                    <Image src={'/images/docsandlocationcheck.png'} height={277} width={382} className='rounded-[20px]'/>
                </CardHeader>
                <CardContent>
                     <p className='md:text-[24px]  text-lg font-bold leading-[120%]'>Document & location checks</p>
                     <p  className='text-[#808080] md:text-base text-sm leading-[150%] '>Parse, match and verify documents and shipment origins for seamless compliance and traceability..</p>
                </CardContent>
            </Card>
        </div>
    </div>
  )
}

export default Qualitycheck