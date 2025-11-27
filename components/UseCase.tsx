import Image from "next/image";
import { useCasesData } from "@/public/constants/data"; 

const UseCase = () => {
  if (!useCasesData || useCasesData.length === 0) {
    return null; 
  }

  return (
    <section className="mt-[100px] max-w-[1440px] mx-auto px-[100px]
      max-lg:px-10 max-md:px-6 max-sm:px-4">
      
      <h2 className="
        text-[50px] leading-[120%] font-montserrat font-bold text-brand-blue text-center mb-[70px]
        max-md:text-[38px] max-sm:text-[30px] max-md:mb-10 max-sm:mb-8 
        w-full max-w-[264px] mx-auto hover:underline hover:decoration-brand-blue
      ">
        Use Cases
      </h2>
      <div className="flex justify-center gap-8
        max-lg:grid max-lg:grid-cols-2 max-lg:gap-6 
        max-md:grid-cols-1 max-md:gap-5">
        
        {useCasesData.map((useCase, index) => (
          <div 
            key={index} 
            className="w-full h-auto min-h-[300px] bg-background rounded-[10px] p-[20px] shadow-sm flex flex-col justify-start
            max-lg:w-full max-md:p-5
            transition duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-brand-blue/30"
          >
            <div className="relative w-full h-[220px] overflow-hidden rounded-[8px] group cursor-pointer">
              <Image
                src={useCase.imageSrc} 
                alt={useCase.title}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 33vw"
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
  );
};

export default UseCase;