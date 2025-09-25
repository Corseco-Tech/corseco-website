import Companies from "@/components/companies";
import Descriptions from "@/components/Descriptions";
import FAQs from "@/components/FAQs";
import Header from "@/components/header";
import Qualitycheck from "@/components/quality-check";
import ShipmentVerification from "@/components/shipment-verification";
import Testimonials from "@/components/testimonials";
import Tradeintelligence from "@/components/trade-intelligence";
import Transformshippingexperiance from "@/components/transform-shipping-experiance";
import Image from "next/image";

export default function Home() {
  
  return (
    <div className="flex flex-col bg-[#F5F5F5]">
      <section className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url('/assets/backgorund.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="xl:px-30  md:px-10 px-5 relative z-10 min-h-screen flex items-center justify-center">
          <div className="w-full flex flex-col items-center justify-center text-center gap-4">
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
      
      {/* GITEX Banner */}
      <section className="bg-white py-8 px-5">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-4">We're excited to announce that Corseco.tech will be at North Star!</h2>
          <Image 
            src="/assets/gitex-web-banner.jpg" 
            alt="Expand North Star 2025"
            width={728}
            height={90}
            className="mx-auto rounded"
          />
          <p className="mt-4 text-sm text-gray-600">Visit us at Stand H10-C80 • Oct 12-15, 2025 • Dubai Harbour</p>
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
         <Testimonials />
         <Tradeintelligence/>
         <FAQs/>
         <div className="lg:px-30 md:px-15 px-5 md:py-10 py-5">
          <Transformshippingexperiance/>
         </div>
    </div>
  );
}
