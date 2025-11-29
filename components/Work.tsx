import Image from "next/image";

const Work = () => {
  const howItWorksSteps = [
    { title: "Create Meetings", description: "Enter meeting agendas and key outcomes before the meeting begins", icon: "/images/h1.svg" },
    { title: "Invite Attendees", description: "Sync Noda with email and add it to meeting invites", icon: "/images/h2.svg" },
    { title: "Run Meeting", description: "Conduct structured meetings within Noda to help stay organized", icon: "/images/h3.svg" },
    { title: "Always Accessible", description: "Easily find important meeting notes & decisions whenever you need", icon: "/images/h4.svg" },
  ];

  return (
    <section className="relative mt-[100px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="w-[353px] h-[60px] text-[50px] leading-[120%] font-montserrat font-bold text-brand-blue mx-auto max-lg:w-[300px] max-md:w-[250px] max-md:text-[40px] max-sm:w-full max-sm:text-[28px] max-sm:text-center hover:underline hover:decoration-brand-blue">
          How it Works
        </h2>
      </div>

      <div className="mt-[70px] max-md:mt-10 max-sm:mt-5">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="relative">
            <div className="grid grid-cols-4 justify-items-center gap-x-[40px] gap-y-[60px] max-xl:gap-x-[30px] max-md:grid-cols-2 max-md:gap-x-[80px] max-sm:grid-cols-1 max-sm:gap-x-0">
              {howItWorksSteps.map((step, i) => (
                <div key={i} className="flex flex-col items-center w-full max-w-[200px] text-center relative">
                  <div className="w-[100px] h-[100px] relative mb-5 overflow-hidden">
                    <Image src="/images/featureShade.svg" alt="Feature Shade" width={100} height={100} className="absolute inset-0 w-full h-full object-contain" />
                    <Image src={step.icon} alt={`Icon ${i + 1}`} width={40} height={40} className="relative z-10 mx-auto mt-[28px]" />
                  </div>

                  <div className="font-montserrat font-bold text-[20px] leading-[120%] text-brand-blue mb-3 max-md:text-[18px]">
                    {step.title}
                  </div>

                  <div className="text-brand-black text-[14px] font-montserrat leading-[26px] max-md:text-[14px]">
                    {step.description}
                  </div>

                  {i < howItWorksSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-[50px] left-[calc(80%+2px)] w-[100%] border-t-2 border-dotted border-[#1155CC] z-0"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
