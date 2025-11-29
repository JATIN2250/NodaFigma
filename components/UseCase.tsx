"use client";

import Image from "next/image";
import { useCasesData } from "@/public/constants/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const UseCase = () => {
  if (!useCasesData || useCasesData.length === 0) return null;

  return (
    <section className="mt-[100px] max-w-[1440px] mx-auto px-[100px] max-lg:px-10 max-md:px-6 max-sm:px-4">
      <h2 className="text-[50px] leading-[120%] font-montserrat font-bold text-brand-blue text-center mb-[70px] max-md:text-[38px] max-sm:text-[30px] max-md:mb-10 max-sm:mb-8 w-full max-w-[264px] mx-auto hover:underline hover:decoration-brand-blue">
        Use Cases
      </h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        loop={false}
        grabCursor={true}
        slidesPerView={3}
        slidesPerGroup={3}
        breakpoints={{
          0: { slidesPerView: 1, slidesPerGroup: 1 },
          640: { slidesPerView: 1, slidesPerGroup: 1 },
          768: { slidesPerView: 2, slidesPerGroup: 2 },
          1024: { slidesPerView: 3, slidesPerGroup: 3 },
        }}
        className="pb-12"
      >
        {useCasesData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-auto min-h-[300px] bg-background rounded-[10px] p-[20px] shadow-sm flex flex-col hover:scale-[1.02] hover:shadow-lg hover:shadow-brand-blue/30 transition">
              <div className="relative w-full h-40 sm:h-44 lg:h-48 rounded-xl overflow-hidden">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/images/play.svg"
                    alt="Play"
                    width={50}
                    height={50}
                    className="opacity-90 hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              <h3 className="text-[20px] leading-[120%] font-montserrat font-bold text-brand-blue mt-4">
                {item.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[26px] text-brand-black">
                {item.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default UseCase;
