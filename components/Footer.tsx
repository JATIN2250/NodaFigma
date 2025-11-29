import Image from "next/image";
import React from 'react';
import { footerLinksData } from "@/public/constants/data";
import { 
  FaInstagram, 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaYoutube 
} from 'react-icons/fa';

const Footer = () => {
  const socialPlatforms = [
    { name: 'Instagram', icon: FaInstagram, link: 'https://www.instagram.com' },
    { name: 'Facebook', icon: FaFacebook, link: 'https://www.facebook.com' },
    { name: 'Twitter', icon: FaTwitter, link: 'https://www.twitter.com' },
    { name: 'LinkedIn', icon: FaLinkedin, link: 'https://www.linkedin.com' },
    { name: 'YouTube', icon: FaYoutube, link: 'https://www.youtube.com' },
  ];

  return (
    <footer className="bg-white border-t border-gray-100 pt-[60px] pb-[20px] mt-[270px]">
      <div className="max-w-[1440px] mx-auto px-[100px] max-lg:px-10 max-md:px-6 max-sm:px-4">
        <div className="flex justify-between max-lg:flex-wrap max-md:flex-col max-md:gap-10">
          <div className="flex gap-20 max-lg:gap-10 max-md:gap-16 max-sm:gap-8 max-sm:grid max-sm:grid-cols-2">
            {footerLinksData.map((col, colIndex) => (
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
            <div className="text-[50px] leading-[100%] font-normal text-brand-blue font-krona mb-6 mt-[100px] max-md:mt-0 hover:underline hover:decoration-brand-blue">
              Noda
            </div>
            <div className="flex gap-3">
              {socialPlatforms.map((platform) => {
                const IconComponent = platform.icon;
                return (
                  <a
                    key={platform.name}
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[30px] h-[30px] bg-brand-blue rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300"
                  >
                    <IconComponent size={18} color="white" />
                  </a>
                );
              })}
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
  );
};

export default Footer;
