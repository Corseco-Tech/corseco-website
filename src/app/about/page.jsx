import Transformshippingexperiance from '@/components/transformshippingexperiance'
import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

const data=[
    {
        id:1,
        name:"Sachin Dubeydi",
        designation:"CFO",
        image:"/images/sachin.png"
    },
    // {
    //     id:2,
    //     name:"Saneesh Cherian",
    //     designation:"CMO",
    //     image:"/images/saneesh.png"
    // },
    {
        id:3,
        name:" Jorlin Rafarero",
        designation:"Partner, Canada",
        image:"/images/jorlin.png"
    },
    {
        id:4,
        name:"Kayode Bamidele",
        designation:"Product Designer",
        image:"/images/kayode.png"
    },
    
]
const boardofadvisors=[
    {
        id:1,
        name:"Spondon Dey",
        designation:"Chief Executive Officer of AT&T Innovation Network, AT&T",
        image:"/images/spandan.png"
    },
    {
        id:2,
        name:"Jitendra Srivastava",
        designation:"Founder Streetwall India-Acquired by blue Water works ",
        image:"/images/jitendra.png"
    },
    // {
    //     id:3,
    //     name:"Bahubali Shete",
    //     designation:"CEO, Tiny chef",
    //     image:"/images/bahubali.png"
    // },
    {
        id:4,
        name:" Adarsh jain",
        designation:"CEO, Proact ai ",
        image:"/images/adarsh.png"
    },
    {
        id:5,
        name:"Kumar Ranagarajan",
        designation:"CEO, Slang Labs",
        image:"/images/kumar.png"
    },
]
const AboutUs = () => {
  return (
    <div className='flex flex-col gap-20'>
    < div className=' xl:px-30 lg:px-20 md:px-10 px-5 flex flex-col gap-20'>
        <div className='h-[500px] mt-20'>
    <div  className="bg-[url('/images/aboutusimage.png')] bg-cover object-cover bg-center bg-no-repeat  h-full md:rounded-[40px] rounded-[20px]">
            <div className='flex flex-col justify-center md:p-17 p-5 gap-4 text-white h-[100%] w-full'>
              <p className='md:text-[72px] text-[40px] font-bold leading-[120%]'>About us</p>
              <p className='md:text-[24px] text-base font-medium leading-[150%] md:w-2/3 w-full'>AI-driven QC for global shipments, Instantly verify goods, documents and locations - no delays, no uncertainty.</p>  
            </div>
    </div>
    </div>
     <div className='flex flex-col justify-center items-center gap-4'>
             <p className='md:text-[40px] text-[20px] font-bold leading-[120%]'>Precision. Trust. Verified.</p>
             <p className='md:text-[24px] text-base text-[#808080] font-medium leading-[150%] text-center'>At Corseco Tech, we’re redefining global shipment verification with the power of artificial intelligence. Our mission is simple: eliminate guesswork
                 from quality control and replace it with instant, automated proof. In a world where speed, integrity, and traceability matter more than ever, 
                Corseco Tech delivers AI-driven solutions that ensure your shipments meet the highest standards—every time.</p>
     </div>
    </div>
    <div className="flex lg:px-30 md:px-15 px-5 md:py-10 py-5 flex-col gap-10 bg-[#F5F5F5]">
         <p className="font-[700] md:text-[40px] text-[24px]  leading-[120%]  text-center">By the numbers</p>
         <div className="flex justify-between sm:gap-5 gap-0 items-center"> 
              <div className="flex flex-col gap-2 text-center">
                <p className="sm:text-[32px]  text-lg font-[700] leading-[120%]">10,000 +</p>
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
       </div>
       <div className='flex flex-col gap-10 xl:px-30 lg:px-20 md:px-10 px-5'>
       <div className=' flex lg:flex-row flex-col gap-10 justify-between '>
          <div className='flex flex-col order-2 lg:order-1 gap-4 max-w-[588px] lg:mx-0 mx-auto'>
            <p className='md:text-[40px] text-[24px] font-bold leading-[150%]'>Meet the Innovators</p>
            <p className='text-[#808080] md:text-base text-sm leading-[150%] '>Result-driven, customer-focused, analytical and articulate Senior Product/Project Manager with ~13 years 
                of experience in Product & Program Management for product delivery on B2B and B2C Platform, Process Consulting Ai/ML computer vision, Specialist in Agile Methodology, 
                Quality Management, Category Management and P&L Management. Previously worked with JIO Embibe as a Strategic Program Manager in CEO,s Office for translating complex customer 
                needs into requirements to deliver features that provide competitive differentiation to the product, Skills - Product Management, Omni channel retail, E-commerce SaaS, 
                Problem Solving, User Stories, Product Roadmap, JIRA, User Experience, Design Thinking, Consumer Behaviour, Wire framing, Product Launch, Competitive Analysis, Product 
                Planning, Data Analytics, Agile Methodology , Expert in end-to-end product offerings, Product management, (Computer Vision, Deep Learning, Data science , Supply Chain,
                 Omni channel Retail, Big data, hadoop Ai/ML, Python, web development and advanced analytics). Co-founded Veda labs, Developed a computer vision platform for Enterprise's 
                 space in retail space as an AI platform which offers deep insights powered by computer vision and machine learning that allows the business owner to extract 
                 deep insights from any form of video.</p>
          </div>
            <div className='flex  flex-col gap-4 order-1 lg:order-2'>
               <div className='w-fit mx-auto md:p-5 p-2 rounded-[24px] bg-white border-[4px] border-[#F5F5F5]'>
                <Image src="/images/ceo.png" alt="aboutus" width={441} height={441} responsive={true} className='rounded-[14px]' />
                </div>
               <div className='flex flex-col gap-2 justify-center items-center'>
                <p className='text-[24px] font-bold leading-[150%]'>Vivek Singh</p>
                <p className='text-[#808080]  leading-[150%]'>CEO & Founder</p>
                </div> 
            </div>
       </div>
       <div className='flex flex-wrap justify-center  items-center gap-10  '>
            {
                data.map((item)=>(
                    <div key={item.id} className='flex flex-col gap-6 justify-center  pb-7 border border-[#808080] rounded-[16px]   max-w-[280px] md:max-w-[344px]'>
                        <div className='w-full '><Image src={item.image} alt={item.name} width={384} height={384} responsive={true} className='rounded-[14px] w-full ' /></div>
                       <div className='flex flex-col gap-2 justify-center items-start px-5'>
                        <p className='text-[24px] font-bold leading-[150%]'>{item.name}</p>
                        <p className='text-[#808080]  leading-[150%]'>{item.designation}</p>
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
                        <div className='w-full   max-h-[140px] md:max-h-[287px] '><Image src={item.image} alt={item.name} width={398} height={398} responsive={true} className='rounded-[14px] w-full h-full  object-scale-down' /></div>
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