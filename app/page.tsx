import Image from "next/image";

export default function Feature() {
  const keyFeatures = [
    { 
      title: "Real Time Collaboration", 
      description: "Facilitate meetings together and take notes in one place with multiple contributors" 
    },
    { 
      title: "Centralized Meeting Directory", 
      description: "A persistent location that contains everything you need regarding team meetings" 
    },
    { 
      title: "Calendar Integrations", 
      description: "Through integrations, once a meeting is added in your calendar it shows up in Noda" 
    },
    { 
      title: "Agenda Keeping", 
      description: "Set a clear plan for talking points during meetings & make sure everyone is prepared." 
    },
    { 
      title: "Document Key Outcomes", 
      description: "Document desired outcomes before the meeting so everyone's goals are aligned" 
    },
    { 
      title: "Decision & Action Item Tracking", 
      description: "Document what decisions were made in meetings and who has to do what" 
    },
  ];

  const useCases = [
    {
      title: "Freelancers",
      description: "Centralized meeting directory where you can search",
      imageSrc: "/images/U1.png",
    },
    {
      title: "Financial Services",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imageSrc: "/images/U2.jpg",
    },
    {
      title: "Software Development",
      description: "Centralized meeting directory where you can search",
      imageSrc: "/images/U3.webp",
    },
  ];
  const footerLinks = [
    {
      title: "Our Company",
      links: ["About us", "Join Meeting", "Our Sevices", "Careers", "Contact Us", "Let's Talk", "Blog"],
    },
    {
      title: "Lorem Ipsum",
      links: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    },
    {
      title: "Lorem Ipsum",
      links: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    },
  ];
  return (
    <main className="overflow-hidden">

      
      <div className="pt-[45px]">
        <header>
          <div className="
            max-w-[1440px] mx-auto px-[100px] 
            flex justify-between items-center
            max-lg:px-10 max-md:px-6 max-sm:px-4
          ">

            <div className="text-[30px] leading-[100%] font-normal text-brand-blue font-krona 
              max-md:text-[26px] max-sm:text-[22px] hover:underline hover:decoration-brand-blue
            ">
              Noda
            </div>

            <div className="flex gap-4 max-sm:gap-2">
              <button className="
                px-[32px] py-[15px] border-[1px] border-brand-blue rounded-[10px] 
                h-[60px] w-[154px] text-[18px] leading-[100%] font-montserrat font-medium text-brand-blue
                max-md:h-auto max-md:w-auto max-md:px-4 max-md:py-2 max-md:text-[16px]
              ">
                Sign In
              </button>

              <button className="
                px-[32px] py-[15px] border-[1px] border-brand-blue rounded-[10px] 
                h-[60px] w-[154px] text-[18px] leading-[100%] font-montserrat 
                text-background bg-brand-blue font-bold
                max-md:h-auto max-md:w-auto max-md:px-4 max-md:py-2 max-md:text-[16px]
              ">
                Sign Up
              </button>
            </div>
          </div>
        </header>
      </div>
      
      <section className="relative w-full pt-[210px] overflow-hidden 
        max-lg:pt-[180px] max-md:pt-[120px] max-sm:pt-[80px]
      ">
        <div className="max-sm:flex max-sm:flex-col max-sm:items-center">
        <div className="
          w-[523px] ml-[100px] max-w-[1440px] mx-auto 
          text-[50px] font-montserrat font-bold text-brand-black leading-[120%]
          max-lg:ml-[60px] max-md:ml-[40px] max-sm:ml-4 
          max-md:text-[38px] max-sm:text-[30px] max-sm:w-full max-sm:order-2
        ">
          
          Make Meetings More <span className="text-brand-blue">Efficient and Effective</span>

          <div className="
            text-[20px] leading-[35px] font-montserrat text-brand-black w-[543px] font-normal mt-[10px]
            max-lg:w-[450px] max-md:w-full max-md:text-[18px] max-md:leading-[28px]
            max-sm:text-[16px] max-sm:leading-[24px]
          ">
            Noda helps digital product teams improve the way they meet by encouraging productive meeting behaviors and adding structure to meeting facilitation
          </div>

          <button className="
            h-[60px] w-[217px] bg-brand-blue rounded-[10px]
            max-lg:w-[180px] max-md:w-[150px] max-sm:w-[120px]
            text-[20px] leading-[100%] text-background font-bold font-montserrat
            max-md:text-[16px] max-sm:text-[14px] mt-[40px]
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
                absolute top-[220px] left-[754px] z-10
                max-xl:left-[550px] max-xl:w-[500px] max-xl:h-[300px] max-xl:top-[400px]
                max-lg:left-[400px] max-lg:w-[420px] max-lg:h-[250px] max-lg:top-[500px]
                max-md:left-[200px] max-md:w-[350px] max-md:h-[200px] max-md:top-[200px]
                max-sm:static max-sm:mt-[40px] max-sm:mx-auto max-sm:block max-sm:order-1
                max-sm:w-[260px] max-sm:h-[150px]
            "/>

          {/* Background Image Responsive Fix */}
        <Image
          src="/images/bgHero.svg"
          alt="Background Hero Shape"
          width={900}
          height={632}
          className="absolute top-[10px] left-[700px] rotate-[8deg]
            max-xl:left-[500px] 
            max-lg:left-[350px] max-lg:w-[700px]
            max-md:left-[150px] max-md:w-[500px]
            max-sm:left-[50px]  max-sm:w-[350px]
          "
        />

        
        <Image
          src="/images/heroDot.svg"
          alt="Background Hero Dots"
          width={114}
          height={100}
          className="absolute top-[160px] left-[720px]
            max-xl:left-[520px]
            max-lg:left-[380px]
            max-md:left-[180px]
            max-sm:left-[80px]
          "
        />
        </div>


      </section>

      
      <section className="relative mt-[100px] overflow-hidden">
        <h2
          className="
            w-[353px] h-[60px]
            text-[50px] leading-[120%]
            font-montserrat font-bold text-brand-blue
            ml-[543px]
            max-lg:w-[300px]
            max-xl:ml-[400px]
            max-lg:w-[300px] max-lg:ml-[250px]
            max-md:w-[250px] max-md:text-[40px] max-md:ml-[100px]
            max-sm:w-full max-sm:text-[28px] max-sm:ml-0 max-sm:text-center hover:underline hover:decoration-brand-blue
          ">
          How it Works
        </h2>
        
        <div className="mt-[70px] max-md:mt-10 max-sm:mt-5">
            
            
            <div className="absolute z-0 top-[175px] left-1/2 -translate-x-1/2 
              w-[900px] h-[0px] 
              border-t-[3px] border-brand-blue opacity-40
              border-dashed
              max-xl:w-[800px]
              max-lg:w-[650px]
              max-md:hidden 
              [border-dasharray:0.2_10]">
            </div>

            
            <div className="max-w-[1100px] mx-auto px-4 relative z-10">

                
                <div className="grid grid-cols-4 gap-[160px] justify-items-center
                  max-xl:gap-[120px]
                  max-lg:gap-[80px]
                  max-md:grid-cols-2 max-md:gap-x-[150px] max-md:gap-y-10
                  max-sm:grid-cols-1 max-sm:gap-x-0
                  ">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-[100px] h-[100px] relative">
                      <Image
                        src="/images/featureShade.svg"
                        alt="Feature Shade"
                        width={100}
                        height={100}
                        className="absolute"
                      />
                      <Image
                        src={`/images/h${i}.svg`}
                        alt={`Icon ${i}`}
                        width={37.14}
                        height={40}
                        className="relative z-10 top-[30px] left-[30px]"
                      />
                    </div>
                  ))}
                </div>

                
                <div className="flex justify-between mt-5 
                  max-xl:px-[50px] 
                  max-lg:px-[50px] 
                  max-md:flex-col max-md:items-center max-md:gap-5 max-md:px-0">
                  {["Create Meetings", "Invite Attendees", "Run Meeting", "Always Accessible"].map(
                    (title, idx) => (
                      <div
                        key={idx}
                        
                        className="w-[200px] font-montserrat font-bold text-[20px] leading-[120%] text-brand-blue text-center max-md:w-full"
                      >
                        {title}
                      </div>
                    )
                  )}
                </div>

                
                <div className="flex justify-between mt-3 
                  max-xl:px-[50px] 
                  max-lg:px-[50px] 
                  max-md:flex-col max-md:items-center max-md:gap-5 max-md:px-0">
                  {[
                    "Enter meeting agendas and key outcomes before the meeting begins",
                    "Sync Noda with email and add it to meeting invites",
                    "Conduct structured meetings within Noda to help stay organized",
                    "Easily find important meeting notes & decisions whenever you need",
                  ].map((desc, idx) => (
                    <div
                      key={idx}
                      
                      className="w-[200px] text-brand-black text-[14px] font-montserrat leading-[26px] text-center max-md:w-full"
                    >
                      {desc}
                    </div>
                  ))}
                </div>

            </div>
        </div>

      </section>

      
      
      <section className="mt-[100px] max-w-[1440px] mx-auto px-[100px]
        max-lg:px-10 max-md:px-6 max-sm:px-4">
        <h2 className="text-[50px] leading-[120%] font-montserrat font-bold text-brand-blue text-center
          max-md:text-[38px] max-sm:text-[30px]">
          Meetings don&apos;t have to suck
        </h2>

        <div className="flex justify-center gap-10 mt-[70px]
          max-lg:flex-col max-lg:items-center max-md:gap-5">
          
          <div className="h-[215px] w-[590px] bg-backgeound rounded-[20px] p-[40px] shadow-sm
            max-lg:w-full">
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
            max-lg:w-full">
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
          max-md:text-[38px] max-sm:text-[30px]">
          Make Every Meeting Meaningful
        </h2>
        <div>
          <Image src="/images/heroDot.svg" alt="Dot Image" width={114} height={100} className="absolute mt-[370px] ml-[12px]"></Image>
        </div>

        <div className="flex justify-center gap-10 mt-[70px]
          max-lg:grid max-lg:grid-cols-2 max-lg:gap-8 max-md:grid-cols-1 max-md:gap-5 relative z-10">
          <div className="h-[358px] w-[380px] bg-white rounded-[20px] p-[40px] shadow-sm text-center
            max-lg:w-full">
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
          <div className="h-[358px] w-[380px] bg-white rounded-[20px] p-[40px] shadow-sm text-center
            max-lg:w-full">
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
          <div className="h-[358px] w-[380px] bg-white rounded-[20px] p-[40px] shadow-sm text-center
            max-lg:w-full">
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
          ">
            Sign Up
          </button>
        </div>
      </section>

      <section className="mt-[100px] max-w-[1440px] mx-auto px-[100px]
        max-lg:px-10 max-md:px-6 max-sm:px-4">
        
        <h2 className="text-[50px] leading-[120%] font-montserrat font-bold text-brand-blue text-center mb-[70px]
          max-md:text-[38px] max-sm:text-[30px] max-md:mb-10 max-sm:mb-8">
          Key Features
        </h2>
        
        <div className="grid grid-cols-3 gap-8
          max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-5">
          {keyFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[20px] p-[30px] shadow-sm h-[148px] w-[380px] flex flex-col justify-start
                max-lg:h-auto max-md:h-auto max-md:p-5"
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
          ">
            Sign Up
          </button></div>
      </section>

      <section className="mt-[100px] max-w-[1440px] mx-auto px-[100px] pb-[100px]
        max-lg:px-10 max-md:px-6 max-sm:px-4">
        
        <div className="flex justify-center items-start gap-16
          max-lg:gap-10 max-md:flex-col max-md:items-center max-md:gap-16">

          
          <div className="h-[120px] w-[356px] pt-10
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

          
          <div className="flex gap-8 pt-20 max-lg:gap-4 max-md:flex-col max-md:w-full max-md:pt-0 max-md:order-1">
            
            
            <div className="w-[350px] h-[450px] bg-brand-blue rounded-[20px] p-8 text-background shadow-xl flex flex-col justify-between
              max-lg:w-[250px] max-md:w-full max-md:h-auto max-md:order-2">
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
              <button className="mt-8 bg-background text-brand-blue font-bold py-3 rounded-[10px] text-[20px] leading-[100%] h-[60px] w-[268px] font-montserrat font-bold">
                Start Now
              </button>
            </div>
            
            
            <div className="w-[350px] h-[450px] bg-background rounded-[20px] p-8 text-montserrat text-brand-blue shadow-xl border border-gray-100 flex flex-col justify-between
              max-lg:w-[250px] max-md:w-full max-md:h-auto max-md:order-1">
              <div>
                <h3 className="text-[28px]  font-bold leading-[100%]">Free</h3>
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
              <button className="mt-8 bg-brand-blue text-background font-bold py-3 rounded-[10px] text-[20px] leading-[100%] w-[268px] h-[60px] font-montserrat">
                Start Now
              </button>
            </div>

          </div>
        </div>
      </section>

      <section className="mt-[100px] max-w-[1440px] mx-auto px-[100px]
        max-lg:px-10 max-md:px-6 max-sm:px-4">
        
        <h2 className="h-[60px] w-[264px] text-[50px] leading-[120%] font-montserrat font-bold text-brand-blue text-center mb-[70px]
          max-md:text-[38px] max-sm:text-[30px] max-md:mb-10 max-sm:mb-8 ml-[500px]">
          Use Cases
        </h2>
        
        <div className="flex justify-center gap-8
          max-lg:grid max-lg:grid-cols-2 max-lg:gap-6 max-md:grid-cols-1 max-md:gap-5">
          {useCases.map((useCase, index) => (
            <div 
              key={index} 
              className="h-[350px] w-[365px] bg-background rounded-[10px] p-[20px] shadow-sm flex flex-col justify-start
                max-lg:w-full max-md:p-5"
            >
              
              <div className="relative w-full h-[220px] overflow-hidden rounded-[8px]">
                <Image
                  src={useCase.imageSrc} 
                  alt={useCase.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="w-full h-full"
                />
                
              </div>

              <h3 className="text-[20px] leading-[120%] font-montserrat font-bold text-brand-blue mt-4
                max-md:text-[20px] max-sm:text-[18px]">
                {useCase.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[26px] font-montserrat text-brand-black font-normal
                max-md:text-[14px]">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
        
        
        <div className="flex justify-center gap-2 mt-8">
            <div className="w-3 h-3 bg-brand-blue rounded-full"></div>
            <div className="w-3 h-3 bg-brand-blue opacity-30 rounded-full"></div>
            <div className="w-3 h-3 bg-brand-blue opacity-30 rounded-full"></div>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-100 pt-[60px] pb-[20px] mt-[270px]">
        <div className="max-w-[1440px] mx-auto px-[100px]
          max-lg:px-10 max-md:px-6 max-sm:px-4">

          
          <div className="flex justify-between max-lg:flex-wrap max-md:flex-col max-md:gap-10">
            
            
            <div className="flex gap-20 max-lg:gap-10 max-md:gap-16 max-sm:gap-8 max-sm:grid max-sm:grid-cols-2">
              {footerLinks.map((col, colIndex) => (
                <div key={colIndex} className="w-[180px] max-sm:w-full">
                  <h4 className="text-[20px] font-montserrat font-bold text-brand-blue mb-4 leading-normal">
                    {col.title}
                  </h4>
                  <ul className="space-y-3 font-montserrat text-[16px] text-brand-black">
                    {col.links.map((link, linkIndex) => (
                      <li key={linkIndex} className="hover:text-brand-blue transition cursor-pointer">
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            
            <div className="flex flex-col items-end max-md:items-start max-sm:items-center max-sm:w-full max-sm:order-first">
              <div className="text-[50px] leading-[100%] font-normal text-brand-blue font-krona mb-6 mt-[100px]">
                Noda
              </div>
              <div className="flex gap-3">
                
                {['f2', 'f3', 'f4'].map((platform) => (
                  <div key={platform} className="w-[30px] h-[30px] bg-brand-blue rounded-full flex items-center justify-center cursor-pointer">
                    <Image
                      src={`/images/${platform}.svg`} 
                      alt={platform}
                      width={18}
                      height={18}
                      className="invert" 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          
          <div className="mt-12 pt-6 border-t border-gray-200 text-center font-montserrat text-[14px] text-brand-black flex justify-center items-center gap-4 max-sm:flex-col max-sm:gap-2 max-sm:mt-8">
            <span>Copyright © 2022</span>
            <span className="w-px h-4 bg-gray-400 max-sm:hidden"></span>
            <span>Noda Private Limited</span>
            <span className="w-px h-4 bg-gray-400 max-sm:hidden"></span>
            <span>All rights reserved</span>
          </div>

        </div>
      </footer>

    </main>
  );
}