import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

const Companies = () => {
  return (
    <div className='flex flex-col gap-6  px-[18px] pt-6 pb-6  bg-[#F5F5F5]'>
      <p className='md:text-[24px] text-base  leading-[150%] text-center'>Trusted by thousands of companies</p>
      <Marquee speed={50} gradient={false} pauseOnHover={true}>
        <div className='flex  items-center gap-10 overflow-x-auto scrollbar-hide  pl-5 mr-5' >
    <Image className="flex-shrink-0" src={"/customers/BIR.png"} width={200} height={43} alt='BIR'/>
    <Image className="flex-shrink-0" src={"/customers/blue-water-works.png"} width={150} height={50} alt='Blue Water Works'/>
    <Image className="flex-shrink-0" src={"/customers/BMR-middle-east.png"} width={200} height={48} alt='BMR Middle East'/>
    <Image className="flex-shrink-0" src={"/customers/calsys.png"} width={200} height={63} alt='Calsys'/>
    <Image className="flex-shrink-0" src={"/customers/emco-ceremica-tiles.png"} width={200} height={132} alt='Emco Ceremica Tiles'/>
    <Image className="flex-shrink-0" src={"/customers/ISRI.png"} width={150} height={43} alt='ISRI'/>
    <Image className="flex-shrink-0" src={"/customers/MTC-recycling.png"} width={150} height={43} alt='MTC Recycling'/>
    <Image className="flex-shrink-0" src={"/customers/now-purhcase.png"} width={150} height={50} alt='Now Purchase'/>
    <Image className="flex-shrink-0" src={"/customers/confetti-India.png"} width={200} height={76} alt='Confetti India'/>
    <Image className="flex-shrink-0" src={"/customers/rcic-canada.png"} width={150} height={48} alt='RCIC Canada'/>
    <Image className="flex-shrink-0" src={"/customers/retail-association-of-India.png"} width={150} height={63} alt='Retail Association of India'/>
    <Image className="flex-shrink-0" src={"/customers/satin-neo-dimmesnions.png"} width={200} height={76} alt='Satin Neo Dimensions'/>
    <Image className="flex-shrink-0" src={"/customers/satyam-paper.png"} width={100} height={132} alt='Satyam Paper'/>
    <Image className="flex-shrink-0" src={"/customers/vikas-machine-tools.png"} width={200} height={55} alt='Vikas Machine Tools'/>
    <Image className="flex-shrink-0" src={"/customers/rema.jpeg"} width={200} height={43} alt='REMA'/>
    </div>

     </Marquee>

    </div>
  )
}

export default Companies