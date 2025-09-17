import Footer from '@/components/footer'
import Header from '@/components/header'
import React from 'react'

const Contactus: React.FC = () => {
  return (
      <div className='flex flex-col gap-10  bg-[var(--corseco-light-bg)]'>
       
        <div className=' px-5 md:px-10 lg:px-20 xl:px-30 pt-20 md:pt-24 pb-10 gap-10 flex flex-col bg-white'>
            <div className='h-[500px] '>
                   <div  className="bg-[url('/images/contactUsimage.jpg')] bg-cover object-cover bg-center bg-no-repeat  h-full rounded-[40px]">
                       <div className='bg-black/50 h-full w-full flex flex-col justify-center rounded-[40px] p-10'>
                         <p className='text-white text-[72px] font-bold'> Contact Us</p>
                          <p className='text-white text-[24px] font-bold'>We are here to help</p>
                        </div>    
             </div>
                        
             </div>
             <div className='flex flex-col   gap-10'>
                 <div className='flex flex-col gap-4 text-center'> 
                    <p className='text-[40px] font-bold leading-[120%]'>Support</p>
                    <div className='flex flex-col' >
                        <p className='text-[var(--corseco-slate)]  leading-[125%]'>Monday - Friday: 10 am to 8 pm ET</p>
                        <p className='text-[var(--corseco-slate)]  leading-[120%]'>Saturday: 11 am to 7 pm ET</p>
                    </div>
                 </div>
                 <div className='flex flex-col justify-center items-center gap-10 '>
                    <p className='leading-[150%]'>We are here to answer any questions you may have.</p>
                     <div className='text-[24px] font-bold leading-[150%] flex items-center gap-2 bg-[var(--corseco-light-bg)] rounded-[10px] p-2 border border-[var(--corseco-slate)] w-fit items-center justify-center'>
                     Email Us <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M16.672 11.0002L11.308 5.63617L12.722 4.22217L20.5 12.0002L12.722 19.7782L11.308 18.3642L16.672 13.0002H4.5V11.0002H16.672Z" fill="var(--corseco-navy)"/>
</svg>
                     </div>
                    <p className='text-[24px] font-bold leading-[150%]'>Or call +91-98180 04499 / +1 705-3337229</p>
                 </div>
             </div>
        </div> 
        

      
      </div> 
  )
}

export default Contactus