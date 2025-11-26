import Image from "next/image"
import FeatureCard from "@/components/MeetingCard";
export default function Home(){
  const meeting = [
  {
    imageSrc: "/images/M1.svg",
    title: "Stay Organized",
    description: "Centralized meeting directory where any member of the team can search, filter and find the information they need in one place, rather than separate devices & apps ",
  },
  {
    imageSrc: "/images/M2.svg",
    title: "Keep Meetings Focused",
    description: "Noda enables product managers to maintain team alignemnt through effective meeting practices like agendas, collaborative note taking, decision tracking and more",
  },
  {
    imageSrc: "/images/M3.svg",
    title: "Emphasize Execution",
    description: "Translate meeting discussions into actionable product decisions that push your objectives forward, enhance team productivity and improve collaboration for positive outcomes",
  },
  ];
  return(
    <>
      <nav className="h-[50px] w-full flex">
        <div className="h-[30px] w-[105px] mt-[45px] ml-auto md:ml-[100px]">
          <p className="font-krona text-brand-blue text-[30px] hover:underline hover:decoration-brand-blue">Noda</p>
        </div>
        <div className=" h-[30px] md:h-[60px] w-auto md:w-[154px] mt-[30px] ml-auto md:ml-[900px] border-[1px] items-center justify-center flex md:rounded-lg border-brand-blue">
          <p className=" text-[12px] md:text-[18px] font-montserrat text-brand-blue">Sign In</p>
        </div>
        <div className="h-[60px] w-[154px] mt-[30px] ml-auto md:ml-[30px] rounded-lg bg-brand-blue flex items-center justify-center">
          <p className="text-[18px] font-bold font-montserrat text-background">Sign Up</p>
        </div>
      </nav>

      <div className="h-130 w-full mt-30 flex">
        <div className="h-130 w-[50%] ">
          <div className="h-[180px] w-[523px] ml-[100px] mt-[100px]">
            <p className="font-montserrat text-[50px] font-bold">
              Make Meetings More <span className="font-montserrat text-brand-blue font-bold text-[50px]">Efficient and Effective</span>
            </p>
          </div>
          <div className="h-[105px] w-[543px] mt-[50px] ml-[100px] ">
            <p className="font-montserrat text-[20px] text-brand-black">
              Noda helps digital product teams improve the way they meet by encouraging productive meeting behaviors and adding structure to meeting facilitation
            </p>
          </div>
          <button className="h-[60px] w-[217px] bg-brand-blue rounded-lg font-montserrat font-bold text-[20px] text-background flex items-center justify-center ml-[100px] mt-[20px]">
            Sign Up
          </button>
        </div>

        <div className="h-[359px] w-[586px] ml-[70px]">
          <Image height="100" width="114" src="images/heroDot.svg" alt="Dot image" className="absolute mt-[50px] ml-[50px]"></Image>
          <Image height ="300" width="600" alt="Background" src="/images/bgHero.svg" className="ml-[90px] absolute "/>
          {/* REMOVED: overflow-hidden class from this element */}
          <Image height="359" width="586" src="/images/HeroPic.svg" alt="Hero Pic" className="relative z-10 ml-[80px] mt-[100px]" />
        </div>
      </div>

      <div className="h-70 w-full mt-[20px] ">
        <div className="h-18 w-full items-center justify-center flex">
          <h2 className="font-montserrat font-bold text-[50px] text-brand-blue hover:underline hover:decoration-brand-blue"> How it Works</h2>
        </div> 

        <div className="h-50 w- mt-[30px] flex gap-[10px]">
          <div className="h-50 w-[250px] ml-[120px] ">
            <Image height="100" width="100" src="/images/featureShade.svg" alt="FeatureShade" className="absolute rounded-full ml-[50px]"></Image>
            <Image height="40" width="37" src="/images/h1.svg" alt="First pic" className="relative z-10 rounded-full mt-[30px] ml-[80px]"></Image>
            <p className="h-[24px] w-[173px] font-montserrat font-bold text-brand-blue mt-[30px] ml-[20px] text-[20px]">Create Meetings</p>
            <p className="h-[24px] w-[250px] font-montserrat font-bold text-brand-black mt-[10px] ml-[0px] text-[14px]">Enter meeting agendas and key outcomes before the meeting begins</p>
          </div>

          <div className="h-50 w-[250px] ml-[120px] ">
            <Image height="100" width="100" src="/images/featureShade.svg" alt="FeatureShade" className="absolute rounded-full ml-[50px]"></Image>
            <Image height="40" width="37" src="/images/h2.svg" alt="First pic" className="relative z-10 rounded-full mt-[30px] ml-[80px]"></Image>
            <p className="h-[24px] w-[250px] font-montserrat font-bold text-brand-blue mt-[30px] ml-[20px] text-[20px]">Invite Attendees</p>
            <p className="h-[24px] w-[250px] font-montserrat font-bold text-brand-black mt-[10px] ml-[0px] text-[14px]">Sync Noda with email and add it to meeting invites</p>
          </div>

          <div className="h-50 w-[250px] ml-[120px] ">
            <Image height="100" width="100" src="/images/featureShade.svg" alt="FeatureShade" className="absolute rounded-full ml-[50px]"></Image>
            <Image height="40" width="37" src="/images/h3.svg" alt="First pic" className="relative z-10 rounded-full mt-[30px] ml-[80px]"></Image>
            <p className="h-[24px] w-[250px] font-montserrat font-bold text-brand-blue mt-[30px] ml-[20px] text-[20px]">Run Meeting</p>
            <p className="h-[24px] w-[250px] font-montserrat font-bold text-brand-black mt-[10px] ml-[0px] text-[14px]">Conduct structured meetings within Noda to help stay organized</p>
          </div>

          <div className="h-50 w-[250px] ml-[120px] ">
            <Image height="100" width="100" src="/images/featureShade.svg" alt="FeatureShade" className="absolute rounded-full ml-[50px]"></Image>
            <Image height="40" width="37" src="/images/h4.svg" alt="First pic" className="relative z-10 rounded-full mt-[30px] ml-[80px]"></Image>
            <p className="h-[24px] w-[250px] font-montserrat font-bold text-brand-blue mt-[30px] ml-[20px] text-[20px]">Always Accessible</p>
            <p className="h-[24px] w-[250px] font-montserrat font-bold text-brand-black mt-[10px] ml-[0px] text-[14px]">Easily find important meeting notes & decisions whenever you need</p>
          </div>
        </div>
      </div>

      <div className="h-[500px] w-full  mt-[200px]">
        <div className="h-[60px] w-[712px] ml-[400px]">
          <h2 className="font-montserrat text-brand-blue font-bold text-[50px] hover:underline hover:decoration-brand-blue">Make Meetings Meaningful</h2>
        </div>

        <div className="w-full max-w-[1200px] mx-auto mt-[30px] grid grid-cols-1 md:grid-cols-3 gap-8 p-4">

          {meeting.map((feature) => (
            <FeatureCard
              key={feature.title} 
              imageSrc={feature.imageSrc}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </>
  )
}