import Transformshippingexperiance from '@/components/transform-shipping-experiance'
import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

const data=[
    {
        id:1,
        name:" Jorlin Rafarero",
        designation:"Partner at Corseco",
        image:"/team/jorlin-rafaero.jpg"
    },
    {
        id:2,
        name:"Spondon Dey",
        designation:"Chief Strategy Officer",
        image:"/team/spondon.png"
    },
    {
        id:3,
        name:"Sachin Dubeydi",
        designation:"CFO",
        image:"/team/sachin.png"
    },

    
    // {
    //     id:4,
    //     name:"Kayode Bamidele",
    //     designation:"Product Designer",
    //     image:"/team/kayode.png"
    // },
    
]
const boardofadvisors=[
    {
        id:2,
        name:"Jitendra Srivastava",
        designation:"Founder, Bluewaterworks",
        image:"/team/jitendra.jpg"
    },
    {
        id:3,
        name:"Prashant  Ghildiyal",
        designation:"Co-Founder, Devtron",
        image:"/team/prashant-ghildiyal.jpeg"
    },
    {
        id:4,
        name:" Adarsh jain",
        designation:"CEO, Proact.ai",
        image:"/team/adarsh.png"
    },
    {
        id:5,
        name:"Kumar Ranagarajan",
        designation:"CEO, Slang Labs",
        image:"/team/kumar.png"
    },
    {
        id:6,
        name:"Siddhartha Chauahan",
        designation:"Founder, Calsys India Pvt. Ltd.",
        image:"/team/siddartha.jpeg"
    },
       {
        id:7,
        name:"Aditya Pratap Singh",
        designation:"VP, Barclays",
        image:"/team/aditya.jpeg"
    },
    {
        id:8,
        name:"AI Venture Lab",
        designation:"INSEAD x AI Venture Lab",
        image:"/team/AI_VENTURE_LAB.png"
    }

]
const AboutUs = () => {
  return (
    <div className='flex flex-col gap-20'>
    < div className=' xl:px-30 lg:px-20 md:px-10 px-5 flex flex-col gap-20'>
        <div className='h-[500px] mt-20'>
    <div  className="bg-[url('/assets/about-us-image.png')] bg-cover object-cover bg-center bg-no-repeat  h-full md:rounded-[40px] rounded-[20px]">
            <div className='flex flex-col justify-center md:p-17 p-5 gap-4 text-white h-[100%] w-full'>
              <p className='md:text-[72px] text-[40px] font-bold leading-[120%]'>About us</p>
              <p className='md:text-[24px] text-base font-medium leading-[150%] md:w-2/3 w-full'>AI-driven QC for global shipments, Instantly verify goods, documents and locations - no delays, no uncertainty.</p>  
            </div>
    </div>
    </div>
     <div className='flex flex-col justify-center items-center gap-4'>
             <p className='md:text-[40px] text-[20px] font-bold leading-[120%]'>Precision. Trust. Verified.</p>
             <p className='md:text-[24px] text-base text-[#808080] font-medium leading-[150%] text-center'>At Corseco.tech, we're redefining global shipment verification with the power of artificial intelligence. Our mission is simple: eliminate guesswork
                 from quality control and replace it with instant, automated proof. In a world where speed, integrity, and traceability matter more than ever, 
                Corseco Tech delivers AI-driven solutions that ensure your shipments meet the highest standards—every time.</p>
     </div>
    </div>
    {/* <div className="flex lg:px-30 md:px-15 px-5 md:py-10 py-5 flex-col gap-10 bg-[#F5F5F5]">
         <p className="font-[700] md:text-[40px] text-[24px]  leading-[120%]  text-center">By the numbers</p>
         <div className="flex justify-between sm:gap-5 gap-0 items-center"> 
              <div className="flex flex-col gap-2 text-center">
                <p className="sm:text-[32px]  text-lg font-[700] leading-[120%]">10 +</p>
                 <p className="sm:text-[24px] text-xs leading-[150%] text-[#808080]">customers</p>
              </div>
               <div className="flex flex-col gap-2 text-center">
                <p className="sm:text-[32px]  text-lg font-[700] leading-[120%]">5</p>
                 <p className="sm:text-[24px] text-xs leading-[150%] text-[#808080]">offices across the globe</p>
              </div>
               <div className="flex flex-col gap-2 text-center">
                <p className="sm:text-[32px]  text-lg font-[700] leading-[120%]">100+</p>
                 <p className="sm:text-[24px] text-xs leading-[150%] text-[#808080]">employees</p>
              </div>
              
         </div>
    </div> */}
       <div className='flex flex-col gap-10 xl:px-30 lg:px-20 md:px-10 px-5'>
       <div className=' flex lg:flex-row flex-col gap-10 justify-between '>
          <div className='flex flex-col order-2 lg:order-1 gap-4 max-w-[588px] lg:mx-0 mx-auto'>
            <p className='md:text-[40px] text-[24px] font-bold leading-[150%]'>Meet the Innovators</p>
            <p className='text-[#808080] md:text-base text-sm leading-[150%] '>
                <strong>Vivek Pratap Singh</strong> - Founder & CEO with 14+ years in global trade & analytics
            </p>
            <div className='mt-2 space-y-3'>
                <p className='text-[#808080] md:text-base text-sm leading-[150%]'>
                    <strong>Previous Experience:</strong> Jio Embibe (Founder Office), Analytics Vidya (Head of Business Development), Trafigura (Senior Product Manager)
                </p>
                <p className='text-[#808080] md:text-base text-sm leading-[150%]'>
                    <strong>Key Achievements:</strong>
                </p>
                <ul className='text-[#808080] md:text-base text-sm leading-[150%] ml-4 space-y-1'>
                    <li>• 2x successful startup exits (Vedalabs & Agrex AI)</li>
                    <li>• Led product strategy for 20M+ students and 400+ institutional clients at Jio Embibe</li>
                    <li>• Built Lykos - World's first Just-In-Time supply chain for metals (500-700 tonnes monthly, $300-500M value)</li>
                    
                </ul>
                <p className='text-[#808080] md:text-base text-sm leading-[150%]'>
                    <strong>Expertise:</strong> Product Management, AI/ML, Computer Vision, Supply Chain Analytics, B2B SaaS Platforms
                </p>
            </div>
          </div>
            <div className='flex  flex-col gap-4 order-1 lg:order-2'>
               <div className='w-fit mx-auto md:p-5 p-2 rounded-[24px] bg-white border-[4px] border-[#F5F5F5]'>
                <Image src="/team/vivek.png" alt="aboutus" width={441} height={441} responsive="true" className='rounded-[14px]' />
                </div>
               <div className='flex flex-col gap-2 justify-center items-center'>
                <p className='text-[24px] font-bold leading-[150%]'>Vivek Singh</p>
                <p className='text-[#808080]  leading-[150%]'>CEO & Founder</p>
                </div> 
            </div>
       </div>
       <div className='flex flex-wrap justify-center items-center gap-10'>
            {
                data.map((item)=>(
                    <div key={item.id} className='flex flex-col gap-6 justify-center pb-7 border border-[#808080] rounded-[16px] w-[280px] md:w-[344px] h-[400px]'>
                        <div className='w-full h-[250px] overflow-hidden'><Image src={item.image} alt={item.name} width={384} height={250} responsive="true" className='rounded-[14px] w-full h-full object-cover' /></div>
                       <div className='flex flex-col gap-2 justify-center items-start px-5 flex-grow'>
                        <p className='text-[24px] font-bold leading-[150%]'>{item.name}</p>
                        <p className='text-[#808080] leading-[150%]'>{item.designation}</p>
                        </div> 
                    </div>
                ))
            }
       </div>
       </div>
       <div className='flex flex-col gap-10'>
        <p className='md:text-[40px] text-[28px] font-bold text-center leading-[120%]'>Board of Advisors</p>
     <Marquee speed={50} gradient={false} pauseOnHover={true}>
        <div className='flex  items-center gap-10 overflow-x-auto scrollbar-hide  pl-5 mr-5' >
{        
                boardofadvisors.map((item)=>(
                    <div key={item.id} className='flex flex-col gap-6   pb-7 border border-[#808080] rounded-[16px] shrink-0  md:w-[398px] self-stretch  w-[200px] '>
                        <div className='w-full   max-h-[140px] md:min-h-[287px]  min-h-[140px]'>
                            <Image src={item.image} alt={item.name} width={398} height={398} responsive="true" className='rounded-[14px] w-full h-full  object-scale-down' /></div>
                       <div className='flex flex-col gap-2  items-start h-full px-5'>
                        <p className='md:text-[24px] text-base font-bold leading-[150%] '>{item.name}</p>
                        <p className='text-[#808080] md:text-base text-xs leading-[150%] '>{item.designation}</p>
                        </div> 
                    </div>
                ))
            }
            </div>
</Marquee>
       </div>
       <div className="lg:px-30 md:px-15 px-5 md:py-10 py-5">
       <Transformshippingexperiance/>
       </div>
      
    </div>
  )
}

export default AboutUs
