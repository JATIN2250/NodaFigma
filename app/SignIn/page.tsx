import Image from "next/image";
import { FaGoogle, FaApple } from "react-icons/fa";
import Link from "next/link";
export default function SignIn(){
  return(
    <>
      <div className="bg-white flex items-center justify-center md:h-screen p-4">
        <div className="[box-shadow:rgba(149,157,165,0.3)_0px_4px_18px] rounded-md max-md:max-w-lg lg:w-[1000px] lg:h-[700px] flex overflow-hidden">
          
          <div className="grid md:grid-cols-2 h-full w-full">
            
            <div className="max-md:order-2 bg-brand-blue/5 p-8 flex flex-col justify-start relative overflow-hidden md:h-full">
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
              <div className="aspect-[12/11] flex justify-center items-end z-10 max-md:relative max-md:mt-10 max-md:h-auto max-md:w-full md:absolute bottom-0 md:left-1/2 md:transform md:-translate-x-1/2 md:w-[80%] md:max-h-[70%]">
                <div className="w-full lg:h-full bg-contain bg-no-repeat mb-10 max-md:mb-0 max-md:p-4">
                  <Image src="/images/signIn.svg" alt="Sign In image" height={430} width={600} className="max-h-full w-auto object-contain max-md:w-full max-md:h-auto"></Image>
                </div>
              </div>
            </div>

            <form className="max-md:order-1 md:max-w-md w-full mx-auto p-12 flex flex-col justify-center mt-15">
              <div className="mb-10 text-center">
                <h1 className="text-[20px] font-montserrat font-bold text-blue-700">Sign In</h1>
              </div>
              
              <div className="mb-4 relative">
                <input
                  name="email"
                  type="text"
                  id="username-input"
                  required
                  className="md:w-full lg:h-[48px] lg:w-[400px] text-sm border border-brand-blue rounded-md px-4 pt-[18px] pb-2 outline-none focus:border-brand-blue rounded-[10px] border-[1px] peer "
                  placeholder=""
                />
                <label
                  htmlFor="username-input"
                  className="absolute left-4 top-0 -translate-y-1/2 scale-[0.8] bg-white px-2 text-[14px] text-brand-blue font-montserrat font-medium"
                >
                  Username
                </label>
              </div>
              
              <div className="mb-4 relative mt-5">
                <input
                  name="pass"
                  type="password"
                  id="password-input"
                  required
                  className="md:w-full lg:h-[48px] lg:w-[400px] text-sm border border-brand-blue rounded-md px-4 pt-[18px] pb-2 outline-none focus:border-brand-blue rounded-[10px] border-[1px]"
                  placeholder=""
                />
                <label
                  htmlFor="password-input"
                  className="absolute left-4 top-0 -translate-y-1/2 scale-[0.8] bg-white px-2 text-[14px] text-brand-blue font-montserrat font-medium"
                >
                  Password
                </label>
              </div>


              <div>
                <button type="submit" className="md:w-full lg:w-[400px] lg:h-[50px] shadow-lg py-3 px-4 text-[16px] font-montserrat font-bold leading-[100%] rounded-[10px] cursor-pointer text-background bg-brand-blue hover:bg-brand-blue/90 focus:outline-none lg:mt-10">
                  Sign In
                </button>
              </div>

              <div className="flex items-center my-6 md:ml-10 mt-10">
                <div className="flex-grow h-px bg-gray-300"></div>
                <span className="mx-4 text-[14px] text-gray-400 font-medium font-montserrat">or Sign In with</span>
                <div className="flex-grow h-px bg-gray-300"></div>
              </div>


              <div className="h-[50px] w-[200px] flex items-center justify-center md:ml-20  mb-10 gap-6">
                <div className="h-[50px] w-[50px] bg-brand-blue/5 rounded-full flex items-center justify-center">
                  <FaApple size={24} className="text-blue-600 cursor-pointer" />
                </div>
                <div className="h-[50px] w-[50px] bg-brand-blue/5 rounded-full flex items-center justify-center">
                  <FaGoogle size={24} className="text-blue-600 cursor-pointer" />
                </div>
              </div>


              <div className="h-[50px] md:w-full ml-10 flex items-center justify-center mt-14">
                <div className="h-[25px] w-[250px] text-gray-400 text-[14px] ">
                  Don’t have an account? <Link href="/SignUp" className="text-brand-blue font-semibold underline font-montserrat ">Sign Up</Link>
                </div>
              </div>
            </form>
            
          </div>
        </div>
      </div>
    </>
  )
}