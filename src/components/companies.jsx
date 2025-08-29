import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

const Companies = () => {
  return (
    <div className='flex flex-col gap-6  px-[18px] pt-6 pb-6  bg-[#F5F5F5]'>
      <p className='md:text-[24px] text-base  leading-[150%] text-center'>Trusted by thousands of companies</p>
      <Marquee speed={50} gradient={false} pauseOnHover={true}>
        <div className='flex  items-center gap-10 overflow-x-auto scrollbar-hide  pl-5 mr-5' >
    <Image className="flex-shrink-0" src={"/customers/BIR.png"} width={200} height={43} alt='bestbuy'/>
    <Image className="flex-shrink-0" src={"/customers/bluewaterworks-removebg-preview (1).png"} width={150} height={50} alt='amazon'/>
    <Image className="flex-shrink-0" src={"/customers/BMRMiddleeast.png"} width={200} height={48} alt='vinted'/>
    <Image className="flex-shrink-0" src={"/customers/Calsyslogo.png"} width={200} height={63} alt='burgerking'/>
    <Image className="flex-shrink-0" src={"/customers/confettiIndiaLogo.png"} width={200} height={76} alt='target'/>
    <Image className="flex-shrink-0" src={"/customers/Emcoceremicatiles_-removebg-preview (1).png"} width={200} height={132} alt='tcs'/>
    <Image className="flex-shrink-0" src={"/customers/ISRILOGO_-removebg-preview.png"} width={150} height={43} alt='infosys'/>
    <Image className="flex-shrink-0" src={"/customers/MTCRecycling-removebg-preview.png"} width={150} height={43} alt='bestbuy'/>
    <Image className="flex-shrink-0" src={"/customers/Nowpurhcase-removebg-preview.png"} width={150} height={50} alt='amazon'/>
    <Image className="flex-shrink-0" src={"/customers/Rciccanada_-removebg-preview.png"} width={150} height={48} alt='vinted'/>
    <Image className="flex-shrink-0" src={"/customers/RetailassociationofIndia_-removebg-preview.png"} width={150} height={63} alt='burgerking'/>
    <Image className="flex-shrink-0" src={"/customers/Satinneodimmesnions_-removebg-preview-removebg-preview.png"} width={200} height={76} alt='target'/>
    <Image className="flex-shrink-0" src={"/customers/Satyampaperlogo-removebg-preview.png"} width={100} height={132} alt='tcs'/>
    <Image className="flex-shrink-0" src={"/customers/VIkasmachientools_-removebg-preview.png"} width={200} height={55} alt='infosys'/>
    <Image className="flex-shrink-0" src={"/customers/RemaImage .jpeg"} width={200} height={43} alt='bestbuy'/>
    </div>

     </Marquee>

    </div>
  )
}

export default Companies