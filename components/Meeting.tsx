import Image from "next/image";

const Meeting = () => {
  return (
    <>
      <section className="mt-[100px] max-w-[1440px] mx-auto px-[100px]
        max-lg:px-10 max-md:px-6 max-sm:px-4">
        <h2 className="text-[50px] leading-[120%] font-montserrat font-bold text-brand-blue text-center
          max-md:text-[38px] max-sm:text-[30px] hover:underline hover:decoration-brand-blue">
          Meetings don&apos;t have to suck
        </h2>
        <div className="flex justify-center gap-10 mt-[70px]
          max-lg:flex-col max-lg:items-center max-md:gap-5">
          
          <div className="h-[215px] w-[590px] bg-background rounded-[20px] p-[40px] shadow-sm
            max-lg:w-full 
            max-md:h-auto 
            transition duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-brand-blue/30">
            <h3 className="text-[20px] leading-[120%] font-montserrat font-bold text-brand-blue
              max-md:text-[20px] max-sm:text-[18px]">
              Meetings are essential to the way we work
            </h3>
            <p className="mt-[15px] text-[14px] leading-[26px] font-montserrat text-brand-black
              max-md:text-[14px]">
              They are a place for people to come together, exchange ideas and
              move objectives forward. When done effectively, meetings play a
              critical role in enabling collaboration and fostering creative problem
              solving.
            </p>
          </div>

          <div className="h-[215px] w-[590px] bg-background rounded-[20px] p-[40px] shadow-sm
            max-lg:w-full 
            max-md:h-auto 
            transition duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-brand-blue/30">
            <h3 className="text-[20px] leading-[120%] font-montserrat font-bold text-brand-blue
              max-md:text-[20px] max-sm:text-[18px]">
              But too many meetings are a waste of time
            </h3>
            <p className="mt-[15px] text-[14px] leading-[26px] font-montserrat text-brand-black
              max-md:text-[14px]">
              People spend most of their workday in meetings, but most meetings
              are often poorly run and ineffective. Every minute spent in a wasteful
              meeting is a minute lost in areas where productive work could be
              getting done.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-[100px] pb-[100px] max-w-[1440px] mx-auto px-[100px]
        max-lg:px-10 max-md:px-6 max-sm:px-4">
        <h2 className="text-[50px] leading-[120%] font-montserrat font-bold text-brand-blue text-center
          max-md:text-[38px] max-sm:text-[30px] hover:underline hover:decoration-brand-blue">
          Make Every Meeting Meaningful
        </h2>
        
        <div>
          <Image src="/images/heroDot.svg" alt="Dot Image" width={114} height={100} className="absolute mt-[370px] ml-[12px]"/>
        </div>

        <div className="grid grid-cols-3 gap-10 mt-[70px]
          max-lg:grid-cols-2 max-lg:gap-8 
          max-md:grid-cols-1 max-md:gap-5 relative z-10">
          
          <div className="h-[358px] w-full bg-white rounded-[20px] p-[40px] shadow-sm text-center
            max-lg:w-full max-md:h-auto
            transition duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-brand-blue/30">
            <div className="flex justify-center mb-6">
              <Image
                src="/images/M1.svg" 
                alt="Stay Organized Icon"
                width={90}
                height={90}
              />
            </div>
            
            <h3 className="text-[20px] leading-[120%] font-montserrat font-bold text-brand-blue
              max-md:text-[20px] max-sm:text-[18px]">
              Stay Organized
            </h3>
            <p className="mt-[15px] text-[14px] leading-[26px] font-montserrat text-brand-black
              max-md:text-[14px]">
              Centralized meeting directory where any member of the team can search, filter and 
              find the information they need in one place, rather than separate devices & apps
            </p>
          </div>
          <div className="h-[358px] w-full bg-white rounded-[20px] p-[40px] shadow-sm text-center
            max-lg:w-full max-md:h-auto
            transition duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-brand-blue/30">
            <div className="flex justify-center mb-6">
              <Image
                src="/images/M2.svg" 
                alt="Keep Meetings Focused Icon"
                width={90}
                height={90}
              />
            </div>

            <h3 className="text-[20px] leading-[120%] font-montserrat font-bold text-brand-blue
              max-md:text-[20px] max-sm:text-[18px]">
              Keep Meetings Focused
            </h3>
            <p className="mt-[15px] text-[14px] leading-[26px] font-montserrat text-brand-black
              max-md:text-[14px]">
              Noda enables product managers to maintain team alignemnt through effective meeting 
              practices like agendas, collaborative note taking, decision tracking and more
            </p>
          </div>
          <div className="h-[358px] w-full bg-white rounded-[20px] p-[40px] shadow-sm text-center
            max-lg:w-full max-md:h-auto
            transition duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-brand-blue/30">
            <div className="flex justify-center mb-6">
              <Image
                src="/images/M3.svg" 
                alt="Emphasize Execution Icon"
                width={90}
                height={90}
              />
            </div>

            <h3 className="text-[20px] leading-[120%] font-montserrat font-bold text-brand-blue
              max-md:text-[20px] max-sm:text-[18px]">
              Emphasize Execution
            </h3>
            <p className="mt-[15px] text-[14px] leading-[26px] font-montserrat text-brand-black
              max-md:text-[14px]">
              Translate meeting discussions into actionable product decisions that push your objectives 
              forward, enhance team productivity and improve collaboration for positive outcomes
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <button className="
            h-[60px] w-[200px] bg-brand-blue rounded-[10px]
            max-lg:w-[180px] max-md:w-[150px] max-sm:w-[120px]
            text-[20px] leading-[100%] text-background font-bold font-montserrat
            max-md:text-[16px] max-sm:text-[14px] mt-[40px]
            transition duration-300 hover:scale-105 hover:shadow-[0_0_0_3px] hover:shadow-brand-blue/50
          ">
            Sign Up
          </button>
        </div>
      </section>
    </>
  );
};

export default Meeting;