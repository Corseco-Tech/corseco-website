import Companies from "@/components/companies";
import Descriptions from "@/components/descriptions";
import FAQs from "@/components/faqs";
import Header from "@/components/header";
import Qualitycheck from "@/components/qualitycheck";
import ShipmentVerification from "@/components/shipment-verification";
import Tradeintelligence from "@/components/trade-intelligence";
import Transformshippingexperiance from "@/components/transform-shipping-experiance";
import Image from "next/image";

export default function Home() {
  
  return (
    <div className="flex flex-col bg-[#F5F5F5]">
      <section className="relative">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url('/assets/backgorund.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="xl:px-30  md:px-10 px-5 pt-32 md:pb-34 pb-10 relative z-10">
          <div className="h-[420px] md:h-[560px] w-full flex flex-col items-center justify-center text-center gap-4">
            <p className="font-bold lg:text-[72px] text-[40px] leading-[120%] text-white">
              Trust, verified. Trade <br/> accelerated.
            </p>
            <p className="text-white/80 md:text-[24px] text-lg leading-[150%]">
              AI-driven QC for global shipments. Instantly verify goods, documents and
              locations — no delays, no uncertainty.
            </p>
          </div>
        </div>
      </section>
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
         <div className="lg:px-30 md:px-15 px-5 md:py-20 py-10  bg-white flex flex-col gap-10 ">
            <div className="flex flex-col lg:max-w-2/3 max-w-full gap-4 ">
              <p className="md:text-[40px] text-[24px]  font-[700] leading-[120%]">Trusted by industry leaders</p>
              <p className="md:text-[24px] text-base text-[#808080]   leading-[150%]">See how businesses use our platform to secure shipments and eliminate uncertainty in global trade.</p>
            </div>
            <div className="flex flex-wrap md:flex-row md:justify-center items-center  gap-6 gap-y-5 flex-col  ">
               <div className="flex flex-col sm:w-[336px] w-full gap-16 p-6 border-[2px] border-[#F5F5F5] shadow-[0_2px_4px_0_rgba(245,245,245,0.5)] rounded-[8px] ">
                  <p>Coreseco.tech flagged hidden defects instantly. Every container now meets our standards before shipping.</p>
                  <div className="flex items-center gap-3">
                    <Image src={'/team/profile3.png'} width={80} height={80} />
                      <div>
                           <p className="text-[24px]  font-[700] leading-[120%]">John Doe</p>
                            <p className="text-[16px]  text-[#808080] leading-[150%]">CEO, JD Global</p>
                      </div>
                  </div>
               </div>
                <div className="flex flex-col  sm:w-[336px] w-full gap-16 p-6 border-[2px] border-[#F5F5F5] shadow-[0_2px_4px_0_rgba(245,245,245,0.5)] rounded-[8px] ">
                  <p>Coreseco.tech flagged hidden defects instantly. Every container now meets our standards before shipping.</p>
                  <div className="flex items-center gap-3">
                    <Image src={'/team/profile3.png'} width={80} height={80} />
                      <div>
                           <p className="text-[24px]  font-[700] leading-[120%]">John Doe</p>
                            <p className="text-[16px]  text-[#808080] leading-[150%]">CEO, JD Global</p>
                      </div>
                  </div>
               </div>
                <div className="flex flex-col   sm:w-[336px] w-full gap-16 p-6  border-[2px] border-[#F5F5F5] shadow-[0_2px_4px_0_rgba(245,245,245,0.5)] rounded-[8px] ">
                  <p>Coreseco.tech flagged hidden defects instantly. Every container now meets our standards before shipping.</p>
                  <div className="flex items-center gap-3">
                    <Image src={'/team/profile3.png'} width={80} height={80} />
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
