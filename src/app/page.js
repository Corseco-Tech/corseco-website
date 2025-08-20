import Companies from "@/components/companies";
import Descriptions from "@/components/Descriptions";
import FAQs from "@/components/FAQs";
import Header from "@/components/header";
import Qualitycheck from "@/components/Qualitycheck";
import ShipmentVerification from "@/components/shipmentVerification";
import Tradeintelligence from "@/components/tradeintelligence";
import Transformshippingexperiance from "@/components/transformshippingexperiance";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col   bg-transparent">
      <div className="xl:px-30  md:px-10 px-5  mt-12 pt-5 md:pb-34 pb-10 flex flex-col bg-white  ">
        <div className="flex flex-col  gap-[34px]">
         
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2  lg:px-[90.5px] px-5 ">
              <p className="font-bold lg:text-[72px] text-[40px]    leading-[120%] text-center">
                Trust, verified. Trade accelerated.
              </p>
              <p className="text-[#808080] md:text-[24px] text-lg  leadimg-[150%] lg:px-[90.5px]  text-center">
                AI-driven QC for global shipments, Instantly verify goods, documents and locations - no delays, no uncertainty.
              </p>
            </div>
            <div className="mx-auto">
              <Image src={'/images/ship.png'} alt="video " height={460} width={1200} />
              {/* <object className='w-full rounded-[24px]' > 
    <param name="movie" value="https://www.youtube.com/embed/Ez8F0nW6S-w?html5=1&rel=0&hl=en_US&version=3"/>
    <param name="allowFullScreen" value="true"/>
    <param name="allowscriptaccess" value="always"/>
    <embed width="640" height="360" 
           src="https://www.youtube.com/embed/Ez8F0nW6S-w?html5=1&rel=0&hl=en_US&version=3" 
           type="text/html" 
           allowscriptaccess="always" 
           allowfullscreen="true"/>
</object> */}

            
            </div>
          </div>
        </div>
      </div>
      <Companies />
      <Qualitycheck />
       <div className="flex lg:px-30 md:px-15 px-5 md:py-10 py-5 flex-col gap-10 bg-[#F5F5F5]">
         <p className="font-[700] md:text-[40px] text-[24px]  leading-[120%]  text-center">Backed up by numbers</p>
         <div className="flex justify-between gap-5 items-center"> 
              <div className="flex flex-col gap-2 text-center">
                <p className="md:text-[32px]  text-lg font-[700] leading-[120%]">99%</p>
                 <p className="md:text-[16px] text-sm leading-[150%]">Detection accuracy</p>
              </div>
               <div className="flex flex-col gap-2 text-center">
                <p className="md:text-[32px]  text-lg font-[700] leading-[120%]">75%</p>
                 <p className="md:text-[16px] text-sm leading-[150%]">Reduction of QC time</p>
              </div>
               <div className="flex flex-col gap-2 text-center">
                <p className="md:text-[32px]  text-lg font-[700] leading-[120%]">100+hrs</p>
                 <p className="md:text-[16px] text-sm leading-[150%]">Time Saved</p>
              </div>
              
         </div>
       </div>
       <Descriptions/>
       <ShipmentVerification/>
         <div className="lg:px-30 md:px-15 px-5 md:py-20 py-10  flex flex-col gap-10 ">
            <div className="flex flex-col lg:max-w-2/3 max-w-full gap-4 ">
              <p className="md:text-[40px] text-[24px]  font-[700] leading-[120%]">Trusted by industry leaders</p>
              <p className="md:text-[24px] text-base text-[#808080]   leading-[150%]">See how businesses use our platform to secure shipments and eliminate uncertainty in global trade.</p>
            </div>
            <div className="flex flex-wrap md:flex-row justify-center gap-6 gap-y-5 flex-col ">
               <div className="flex flex-col sm:w-[336px] w-full gap-16 p-6 border-[2px] border-[#F5F5F5] shadow-[0_2px_4px_0_rgba(245,245,245,0.5)] rounded-[8px] ">
                  <p>Coreseco.tech flagged hidden defects instantly. Every container now meets our standards before shipping.</p>
                  <div className="flex items-center gap-3">
                    <Image src={'/images/profile1.png'} width={80} height={80} />
                      <div>
                           <p className="text-[24px]  font-[700] leading-[120%]">John Doe</p>
                            <p className="text-[16px]  text-[#808080] leading-[150%]">CEO, JD Global</p>
                      </div>
                  </div>
               </div>
                <div className="flex flex-col  sm:w-[336px] w-full gap-16 p-6 border-[2px] border-[#F5F5F5] shadow-[0_2px_4px_0_rgba(245,245,245,0.5)] rounded-[8px] ">
                  <p>Coreseco.tech flagged hidden defects instantly. Every container now meets our standards before shipping.</p>
                  <div className="flex items-center gap-3">
                    <Image src={'/images/profile2.png'} width={80} height={80} />
                      <div>
                           <p className="text-[24px]  font-[700] leading-[120%]">John Doe</p>
                            <p className="text-[16px]  text-[#808080] leading-[150%]">CEO, JD Global</p>
                      </div>
                  </div>
               </div>
                <div className="flex flex-col   sm:w-[336px] w-full gap-16 p-6  border-[2px] border-[#F5F5F5] shadow-[0_2px_4px_0_rgba(245,245,245,0.5)] rounded-[8px] ">
                  <p>Coreseco.tech flagged hidden defects instantly. Every container now meets our standards before shipping.</p>
                  <div className="flex items-center gap-3">
                    <Image src={'/images/profile3.png'} width={80} height={80} />
                      <div>
                           <p className="text-[24px]  font-[700] leading-[120%]">John Doe</p>
                            <p className="text-[16px]  text-[#808080] leading-[150%]">CEO, JD Global</p>
                      </div>
                  </div>
               </div>
            </div>
         </div>
         <Tradeintelligence/>
         <FAQs/>
         <div className="lg:px-30 md:px-15 px-5 md:py-10 py-5">
          <Transformshippingexperiance/>
         </div>
    </div>
  );
}
