import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

const CustomCard = ({cards}) => {
  return (
    <div className='flex flex-wrap md:flex-row flex-col justify-center items-center gap-10'>
    {cards.map((card, index) => (
        <div key={index} className='flex flex-col max-w-[352px] rounded-[10px]'>
          <div className='p-[1px] flex justify-center'>
            <Image src={card?.imageSrc} width={352} height={299} alt={card?.imageAlt} className='rounded-t-[10px]' />
          </div>
          <div className='flex flex-col gap-4 py-6 px-4 border-[2px] rounded-b-[10px]'>
            <div className='flex justify-between items-center'>
              <p className='text-[#808080]'>{card?.category}</p>
              <p>{card?.date}</p>
            </div>
            <div className='flex flex-col gap-1'>
              <p className='font-[700] leading-[150%]'>{card?.title}</p>
              <p className='text-[#808080]'>{card?.description}</p>
            </div>
            <Button varient='outline' className='bg-inherit text-black border-[2px] cursor-pointer hover:bg-inherit'>
              Learn more <ArrowRight />
            </Button>
          </div>
        </div>
      ))}
       
       </div>

  )
}

export default CustomCard