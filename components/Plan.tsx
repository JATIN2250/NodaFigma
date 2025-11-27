import Image from "next/image";
import { keyFeatures } from '@/public/constants/data';

const Plan = () => {
  return (
    <>
      
      <section className="mt-[100px] max-w-[1440px] mx-auto px-[100px]
        max-lg:px-10 max-md:px-6 max-sm:px-4">
        
        <h2 className="text-[50px] leading-[120%] font-montserrat font-bold text-brand-blue text-center mb-[70px]
          max-md:text-[38px] max-sm:text-[30px] max-md:mb-10 max-sm:mb-8 hover:underline hover:decoration-brand-blue">
          Key Features
        </h2>
        
        <div className="grid grid-cols-3 gap-8
          max-lg:grid-cols-2 
          max-md:grid-cols-1 max-md:gap-5">
          {keyFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[20px] p-[30px] shadow-sm w-full h-auto flex flex-col justify-start 
              text-left
              max-lg:h-auto max-md:h-auto max-md:p-5
              transition duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-brand-blue/30"
            >
              <h3 className="text-[20px] leading-[120%] font-montserrat font-bold text-brand-blue mb-2
                max-md:text-[20px] max-sm:text-[18px]">
                {feature.title}
              </h3>
              <p className="text-[14px] leading-[26px] font-montserrat text-brand-black
                max-md:text-[14px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button className="
            h-[60px] w-[200px] bg-brand-blue rounded-[10px]
            max-lg:w-[180px] max-md:w-[150px] max-sm:w-[120px]
            text-[20px] leading-[100%] text-background font-bold font-montserrat
            max-md:text-[16px] max-sm:text-[14px] mb-[2px] mt-[30px]
            transition duration-300 hover:scale-105 hover:shadow-[0_0_0_3px] hover:shadow-brand-blue/50
          ">
            Sign Up
          </button>
        </div>
      </section>
      <section className="mt-[100px] max-w-[1440px] mx-auto px-[100px] pb-[100px]
        max-lg:px-10 max-md:px-6 max-sm:px-4">
        
        <div className="flex justify-center items-start gap-16
          max-lg:gap-10 max-md:flex-col max-md:items-center max-md:gap-16">

          <div className="w-[356px] pt-10
            max-lg:w-[350px] max-md:w-full max-md:text-center max-md:order-2 max-sm:pt-0">
            <h2 className="text-[50px] leading-[120%] font-montserrat text-brand-blue font-normal
              max-md:text-[38px] max-sm:text-[30px]">
              Start your <span className="text-brand-black font-bold font-montserrat text-[50px] leading-[120%] text-brand-blue">free plan</span> now
            </h2>
            
            <div className="mt-10 max-md:flex max-md:justify-center">
                <Image
                  src="/images/PigPic.svg"
                  alt="Piggy Bank with coins"
                  width={200}
                  height={150}
                  className="max-md:w-[150px] max-sm:w-[120px]"
                />
            </div>
          </div>

          <div className="flex gap-8 pt-20 
              max-lg:gap-4 
              max-md:flex-col max-md:w-full max-md:pt-0 max-md:order-1">
          
            <div className="w-full h-auto bg-brand-blue rounded-[20px] p-8 text-background shadow-xl flex flex-col justify-between
              max-lg:w-[250px] max-md:w-full max-md:h-auto max-md:order-2
              transition duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-brand-blue/30">
              <div>
                <h3 className="text-[30px] font-montserrat font-bold leading-[100%] text-background">PRO</h3>
                <p className="text-[66px] font-montserrat font-bold mt-4 text-background leading-[100%]">$20<span className="text-[14px] font-bold leading-[100%]">/ month</span></p>
                <ul className="mt-6 space-y-3 font-montserrat text-[14px] text-background">
                  <li className="flex items-center">
                    <span className="mr-2"></span> Unlimited access for all your needs
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 ">✔</span> Unlimited meetings
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 ">✔</span> Unlimited templates
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 ">✔</span> ...and access to other premium features
                  </li>
                </ul>
              </div>
              <button className="mt-8 bg-background text-brand-blue font-bold py-3 rounded-[10px] text-[20px] leading-[100%] h-[60px] w-full font-montserrat font-bold
                transition duration-300 hover:scale-105 hover:shadow-md hover:shadow-blue-900/50">
                Start Now
              </button>
            </div>
            
            <div className="w-full h-auto bg-background rounded-[20px] p-8 text-montserrat text-brand-blue shadow-xl border border-gray-100 flex flex-col justify-between
              max-lg:w-[250px] max-md:w-full max-md:h-auto max-md:order-1
              transition duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-brand-blue/30">
              <div>
                <h3 className="text-[28px] font-bold leading-[100%]">Free</h3>
                <p className="text-[60px] font-bold mt-4">$0<span className="text-[14px] font-bold leading-[100%]">/ month</span></p>
                <ul className="mt-6 space-y-3 font-montserrat text-[16px]">
                  <li className="flex items-center text-brand-black font-normal text-[14px]">
                    <span className="mr-2 text-brand-blue">✔</span> No credit card required
                  </li>
                  <li className="flex items-center text-brand-black font-normal text-[14px]">
                    <span className="mr-2 text-brand-blue">✔</span> Up to 10 meetings
                  </li>
                </ul>
              </div>
              <button className="mt-8 bg-brand-blue text-background font-bold py-3 rounded-[10px] text-[20px] leading-[100%] w-full h-[60px] font-montserrat
                transition duration-300 hover:scale-105 hover:shadow-[0_0_0_3px] hover:shadow-brand-blue/50">
                Start Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Plan;