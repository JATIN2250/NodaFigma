import Image from "next/image";
import { FaGoogle, FaApple } from "react-icons/fa";
import Link from "next/link";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Noda | SignUp Page",
  description: "Noda helps product teams improve meeting quality by encouraging productive behaviors and adding structure.",
  openGraph: {
    title: 'Noda | SignUp Page',
    description: 'Noda helps product teams improve meeting quality.',
    url: 'https://noda-figma-jmjhikhg5-jitendra-tulswanis-projects.vercel.app/SignUp', 
    siteName: 'Noda',
    locale: 'en_US',
    type: 'website',
  },
};
export default function SignUp() {
  return (
    <section className="bg-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 w-full h-full">

        <div className="[box-shadow:rgba(149,157,165,0.3)_0px_4px_18px] rounded-md w-full h-full min-h-[700px] flex overflow-hidden mx-auto bg-brand-blue/5">

          <div className="grid md:grid-cols-2 w-full h-full">

            <div className="w-full max-w-[720px] bg-brand-blue/5 p-8 flex flex-col justify-start relative overflow-hidden">
              <div className="relative z-20">
                <div className="text-[30px] leading-[100%] text-brand-blue font-krona mb-6 lg:mt-10 ml-10">
                  Noda
                </div>

                <div className="max-w-[520px]">
                  <p className="text-brand-black font-normal font-montserrat text-[16px] leading-[30px] max-w-[400px] ml-10 mb-12">
                    Stop wasting time with unproductive meetings and improve the way you collaborate
                  </p>
                </div>
              </div>

              <div className="aspect-[12/11] flex justify-center items-end z-10 max-md:relative max-md:mt-10 md:absolute bottom-0 md:left-1/2 md:transform md:-translate-x-1/2 md:w-[80%] md:max-h-[70%]">
                <div className="w-full lg:h-full bg-contain bg-no-repeat mb-10 max-md:mb-0 max-md:p-4">
                  <Image
                    src="/images/signIn.svg"
                    alt="Sign Up image"
                    height={430}
                    width={600}
                    className="max-h-full w-auto object-contain max-md:w-full max-md:h-auto"
                  />
                </div>
              </div>
            </div>

            <form className="w-full p-12 flex flex-col justify-center h-full bg-background">

              <div className="mb-10 text-center">
                <p className="text-[20px] font-montserrat font-bold text-blue-700">Sign Up</p>
              </div>

              <div className="mb-4 relative lg:ml-15">
                <input
                  id="fullname-input"
                  required
                  className="w-full lg:h-[48px] lg:w-[400px] text-sm border border-brand-blue rounded-md px-4 pt-[18px] pb-2 outline-none peer"
                />
                <label
                  htmlFor="fullname-input"
                  className="absolute left-4 top-0 -translate-y-1/2 scale-[0.8] bg-background px-2 text-[14px] text-brand-blue font-medium"
                >
                  Full Name
                </label>
              </div>

              <div className="mb-4 relative mt-5 lg:ml-15">
                <input
                  type="email"
                  id="email-input"
                  required
                  className="w-full lg:h-[48px] lg:w-[400px] text-sm border border-brand-gray rounded-md px-4 pt-[18px] pb-2 outline-none"
                />
                <label
                  htmlFor="email-input"
                  className="absolute left-4 top-0 -translate-y-1/2 scale-[0.8] bg-background px-2 text-[14px] text-brand-gray font-medium"
                >
                  Email Address
                </label>
              </div>

              <div className="mb-4 relative mt-5 lg:ml-15">
                <input
                  type="password"
                  id="password-input"
                  required
                  className="w-full lg:h-[48px] lg:w-[400px] text-sm border border-brand-gray rounded-md px-4 pt-[18px] pb-2 outline-none"
                />
                <label
                  htmlFor="password-input"
                  className="absolute left-4 top-0 -translate-y-1/2 scale-[0.8] bg-background px-2 text-[14px] text-brand-gray font-medium"
                >
                  Password
                </label>
              </div>
              <div className="mb-4 relative mt-5 lg:ml-15">
                <input
                  type="password"
                  id="repeatPassword-input"
                  required
                  className="w-full lg:h-[48px] lg:w-[400px] text-sm border border-brand-gray rounded-md px-4 pt-[18px] pb-2 outline-none"
                />
                <label
                  htmlFor="repeatPassword-input"
                  className="absolute left-4 top-0 -translate-y-1/2 scale-[0.8] bg-background px-2 text-[14px] text-brand-gray font-medium"
                >
                  Repeat Password
                </label>
              </div>
              <div className="lg:ml-15">
                <button
                  type="submit"
                  className="w-full lg:w-[400px] lg:h-[50px] shadow-lg text-[16px] font-bold rounded-[10px] cursor-pointer text-white bg-brand-blue hover:bg-brand-blue/90 mt-10"
                >
                  Sign Up
                </button>
              </div>
              <div className="flex items-center my-6 mt-10">
                <div className="flex-grow h-px bg-gray-300"></div>
                <span className="mx-4 text-[14px] text-gray-400 font-medium">or Sign Up with</span>
                <div className="flex-grow h-px bg-gray-300"></div>
              </div>
              <div className="h-[50px] w-[200px] flex items-center justify-center mx-auto mb-10 gap-6">
                <div className="h-[50px] w-[50px] bg-brand-blue/5 rounded-full flex items-center justify-center">
                  <FaApple size={24} className="text-blue-600 cursor-pointer" />
                </div>
                <div className="h-[50px] w-[50px] bg-brand-blue/5 rounded-full flex items-center justify-center">
                  <FaGoogle size={24} className="text-blue-600 cursor-pointer" />
                </div>
              </div>
              <div className="h-[50px] w-full flex items-center justify-center mt-4">
                <p className="text-gray-400 text-[14px]">
                  Already have an account?{" "}
                  <Link href="/SignIn" className="text-brand-blue font-semibold underline">
                    Login
                  </Link>
                </p>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
