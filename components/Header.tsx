const Header = () => {
  return (
    <div className="pt-[45px]">
      <header>
        <div className="
          max-w-[1440px] mx-auto px-[100px] 
          flex justify-between items-center
          max-lg:px-10 max-md:px-6 max-sm:px-4
        ">
          
          <div className="text-[30px] leading-[100%] font-normal text-brand-blue font-krona 
            max-md:text-[26px] max-sm:text-[22px] hover:underline hover:decoration-brand-blue hover:underline hover:decoration-brand-blue
          ">
            Noda
          </div>

          <div className="flex gap-4 max-md:gap-3 max-sm:gap-2">
            
            <button className="
              px-[32px] py-[15px] h-[60px] w-[154px] text-[18px] 

              max-md:h-auto max-md:w-auto max-md:px-4 max-md:py-2 max-md:text-[16px]

              max-sm:px-3 max-sm:py-1.5 max-sm:text-[14px] 

              border-[1px] rounded-[10px] 
              leading-[100%] font-montserrat font-medium text-brand-blue
              
              /* Added hover effect for Sign In */
              border-brand-blue transition duration-300 hover:scale-105 hover:border-brand-blue
              hover:shadow-[0_0_0_3px] hover:shadow-brand-blue/50
            ">
              Sign In
            </button>
            <button className="
              px-[32px] py-[15px] h-[60px] w-[154px] text-[18px] 

              max-md:h-auto max-md:w-auto max-md:px-4 max-md:py-2 max-md:text-[16px]

              max-sm:px-3 max-sm:py-1.5 max-sm:text-[14px]

              border-[1px] border-brand-blue rounded-[10px] 
              leading-[100%] font-montserrat 
              text-background bg-brand-blue font-bold
              
              /* Added hover effect for Sign Up */
              transition duration-300 hover:scale-105 hover:shadow-[0_0_0_3px] hover:shadow-brand-blue/50
            ">
              Sign Up
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;