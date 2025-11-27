import Image from "next/image";
const Hero = () => {
  return (
    <section className="relative w-full pt-[210px] overflow-hidden 
      max-lg:pt-[180px] max-md:pt-[120px] max-sm:pt-[80px]
    ">
      
      <div className="max-lg:flex max-lg:flex-col max-lg:items-center">

        <div className="
          w-[523px] ml-[100px] max-w-[1440px] mx-auto 
          text-[50px] font-montserrat font-bold text-brand-black leading-[120%]
          
          max-lg:ml-0 max-lg:px-6 max-lg:w-full 
          max-lg:text-center max-lg:order-2 
          max-md:text-[38px] max-sm:text-[30px]
        ">
          
          Make Meetings More <span className="text-brand-blue">Efficient and Effective</span>

          <div className="
            text-[20px] leading-[35px] font-montserrat text-brand-black w-[543px] font-normal mt-[10px]
            max-lg:w-[450px] max-lg:mx-auto max-lg:px-4 
            max-md:w-full max-md:text-[18px] max-md:leading-[28px]
            max-sm:text-[16px] max-sm:leading-[24px]
          ">
            Noda helps digital product teams improve the way they meet by encouraging productive meeting behaviors and adding structure to meeting facilitation
          </div>

          <button className="
            h-[60px] w-[217px] bg-brand-blue rounded-[10px]
            max-lg:w-[180px] max-md:w-[150px] max-sm:w-[120px]
            text-[20px] leading-[100%] text-background font-bold font-montserrat
            max-md:text-[16px] max-sm:text-[14px] mt-[40px]
            transition duration-300 hover:scale-105 hover:shadow-[0_0_0_3px] hover:shadow-brand-blue/50
          ">
            Sign Up
          </button>
        </div>
        <Image
          src="/images/HeroPic.svg"
          alt="Hero"
          width={586}
          height={359}
          className="
              lg:absolute lg:top-[220px] lg:left-[754px] lg:z-10

              max-xl:left-[550px] max-xl:w-[500px] max-xl:h-[300px] max-xl:top-[400px]
              max-lg:left-auto max-lg:top-auto

              max-lg:static max-lg:mt-[40px] max-lg:mx-auto max-lg:block max-lg:order-1
              
              max-sm:w-full max-sm:h-[180px] max-sm:px-4
          "/>

        <Image
          src="/images/bgHero.svg"
          alt="Background Hero Shape"
          width={900}
          height={632}
          className="
            absolute top-[10px] left-[700px] rotate-[8deg]
            max-xl:left-[500px] 
            lg:block max-lg:hidden 
          "
        />
        
        <Image
          src="/images/heroDot.svg"
          alt="Background Hero Dots"
          width={114}
          height={100}
          className="
            absolute top-[160px] left-[720px]
            max-xl:left-[520px]
            lg:block max-lg:hidden 
          "
        />
      </div>
    </section>
  );
};

export default Hero;