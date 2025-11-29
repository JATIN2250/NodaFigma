import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full pt-[150px] overflow-hidden max-lg:pt-[120px] max-md:pt-[90px] max-sm:pt-[60px]">
      
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 max-lg:flex-col">

        <div className="w-full max-w-[550px] text-left max-lg:text-center max-lg:order-2">
          <h1 className="text-[50px] leading-[120%] font-bold font-montserrat text-brand-black max-md:text-[38px] max-sm:text-[30px]">
            Make Meetings More <span className="text-brand-blue">Efficient and Effective</span>
          </h1>

          <p className="mt-3 text-[20px] leading-[32px] font-montserrat text-brand-black max-md:text-[18px] max-sm:text-[16px] max-sm:leading-[24px]">
            Noda helps digital product teams improve the way they meet by encouraging productive meeting behaviors and adding structure to meeting facilitation
          </p>

          <Link href="/SignUp">
            <button className="h-[60px] w-[217px] bg-brand-blue rounded-[10px] text-[20px] text-background font-bold font-montserrat mt-[30px] transition duration-300 hover:scale-105 hover:shadow-[0_0_0_3px] hover:shadow-brand-blue/50 max-lg:mx-auto max-lg:block max-md:w-[160px] max-sm:w-[130px] max-md:text-[16px] max-sm:text-[14px]">
              Sign Up
            </button>
          </Link>
        </div>

        <div className="relative w-full max-w-[650px] flex justify-center max-lg:order-1 mt-[40px] lg:mt-0">
          
          <Image
            src="/images/bgHero.svg"
            alt="Background Shape"
            width={900}
            height={632}
            className="absolute -z-10 w-[70%] max-w-[600px] right-0 top-[-40px] rotate-[8deg] max-lg:hidden"
          />

          <Image
            src="/images/heroDot.svg"
            alt="Hero Dots"
            width={114}
            height={100}
            className="absolute -z-10 w-[120px] left-[40px] top-[20px] max-lg:hidden"
          />

          <Image
            src="/images/HeroPic.svg"
            alt="Hero"
            width={586}
            height={359}
            className="w-full max-w-[520px] h-auto relative z-10"
          />

        </div>

      </div>

    </section>
  );
};

export default Hero;
