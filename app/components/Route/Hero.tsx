"use client";
import React from "react";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "../../../public/assests/AdminImage-removebg.png";


const Hero: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <div className="w-full flex flex-col lg:flex-row items-center pt-20 px-4 lg:px-20 overflow-hidden">
        <div className="relative flex items-center justify-center mx-4 sm:mx-6 md:mx-7 my-4 sm:my-5 mt-6 pt-8 sm:pt-10 px-4 sm:px-6 py-6 sm:py-8 z-0">
          <div className="relative flex items-center justify-center rounded-full hero_animation 
    bg-gradient-to-r dark:from-blue-500 dark:to-purple-100 from-blue-300 to-purple-400 
    opacity-60 h-[25vw] w-[25vw] sm:h-[30vh] sm:w-[30vh] md:h-[40vh] md:w-[40vh] lg:h-[500px] lg:w-[500px] 
    xl:h-[500px] xl:w-[500px] shadow-lg overflow-hidden">
            <Image 
              src={HeroImage}
              // src={data?.layout?.banner?.image?.url}
              alt="Hero Image"
              // width={500}
              // height={500}
              className="absolute inset-0 w-full h-full max-w-full max-h-full object-cover rounded-full"
              priority
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="lg:w-[60%] flex flex-col items-center lg:items-start text-center lg:text-left mt-12 lg:mt-0 ">
          <p className="px-4 lg:px-0 font-semibold text-2xl lg:text-4xl xl:text-5xl dark:text-white text-black ">
            Improve Your Online Learning Experience Instantly
          </p>
          <p className="mt-4 px-4 lg:px-0 dark:text-gray-300 text-gray-700 text-sm lg:text-base xl:text-lg">
            We have 40k+ online courses & 500K+ registered students. Find your
            desired courses today.
          </p>  
          <br />
          <br />
          <div className="mt-6 w-full lg:w-[80%] relative z-10">
            <input
              type="text"
              placeholder="Search Courses..."
              className="border dark:border-gray-700 border-gray-500 dark:bg-gray-800 bg-gray-200 dark:placeholder-gray-400 placeholder-gray-800 
              rounded-md p-3 w-full h-12 outline-none text-black dark:text-white z-10"
              aria-label="Search Courses"
            />
            <div className="absolute flex items-center justify-center w-12 h-12 top-0 right-0 bg-blue-500 rounded-r-md cursor-pointer">
              <BiSearch className="text-white" size={24} />
            </div>
          </div>
          <p className="mt-6 dark:text-gray-200 text-gray-800 text-sm lg:text-base font-semibold text-center lg:text-left">
            Trusted by many students. {" "}
            <Link
              href="/courses"
              className="text-blue-500 dark:text-green-400 underline"
            >
              View Courses
            </Link>
          </p>
        </div>
      </div>   


       </div>
  );
}; 

export default Hero;