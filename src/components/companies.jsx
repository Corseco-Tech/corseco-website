import Image from 'next/image'
import React from 'react'

const Companies = () => {
  return (
    <div className='flex flex-col gap-6  px-[18px] pt-6 pb-6  bg-[#F5F5F5]'>
      <p className='md:text-[24px] text-base  leading-[150%] text-center'>Trusted by thousands of companies</p>
      <div className="overflow-hidden whitespace-nowrap">
  <div className="flex items-center gap-20 animate-marquee">
    <Image className="flex-shrink-0" src={"/logo/bestbuy.png"} width={75} height={43} alt='bestbuy'/>
    <Image className="flex-shrink-0" src={"/logo/amazon.png"} width={150} height={50} alt='amazon'/>
    <Image className="flex-shrink-0" src={"/logo/vinted.png"} width={150} height={48} alt='vinted'/>
    <Image className="flex-shrink-0" src={"/logo/burgerking.png"} width={51} height={63} alt='burgerking'/>
    <Image className="flex-shrink-0" src={"/logo/target.png"} width={55} height={76} alt='target'/>
    <Image className="flex-shrink-0" src={"/logo/tcs.png"} width={132} height={132} alt='tcs'/>
    <Image className="flex-shrink-0" src={"/logo/infosys.png"} width={150} height={55} alt='infosys'/>
    
    {/* Duplicate for seamless loop */}
    <Image className="flex-shrink-0" src={"/logo/bestbuy.png"} width={75} height={43} alt='bestbuy'/>
    <Image className="flex-shrink-0" src={"/logo/amazon.png"} width={150} height={50} alt='amazon'/>
    <Image className="flex-shrink-0" src={"/logo/vinted.png"} width={150} height={48} alt='vinted'/>
    <Image className="flex-shrink-0" src={"/logo/burgerking.png"} width={51} height={63} alt='burgerking'/>
    <Image className="flex-shrink-0" src={"/logo/target.png"} width={55} height={76} alt='target'/>
    <Image className="flex-shrink-0" src={"/logo/tcs.png"} width={132} height={132} alt='tcs'/>
    <Image className="flex-shrink-0" src={"/logo/infosys.png"} width={150} height={55} alt='infosys'/>

    {/* Duplicate for seamless loop */}
    <Image className="flex-shrink-0" src={"/logo/bestbuy.png"} width={75} height={43} alt='bestbuy'/>
    <Image className="flex-shrink-0" src={"/logo/amazon.png"} width={150} height={50} alt='amazon'/>
    <Image className="flex-shrink-0" src={"/logo/vinted.png"} width={150} height={48} alt='vinted'/>
    <Image className="flex-shrink-0" src={"/logo/burgerking.png"} width={51} height={63} alt='burgerking'/>
    <Image className="flex-shrink-0" src={"/logo/target.png"} width={55} height={76} alt='target'/>
    <Image className="flex-shrink-0" src={"/logo/tcs.png"} width={132} height={132} alt='tcs'/>
    <Image className="flex-shrink-0" src={"/logo/infosys.png"} width={150} height={55} alt='infosys'/>
  </div>
</div>

    </div>
  )
}

export default Companies