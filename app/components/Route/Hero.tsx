"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "../../../public/assests/AdminImage-removebg.png";

const Hero: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center min-h-screen bg-transparent pt-28 sm:pt-0">
      {/* HERO CONTAINER */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 lg:px-20 py-12 lg:py-20 gap-10 lg:gap-16 xl:gap-20">
        
        {/* IMAGE SECTION (Always Left) */}
          <div className="relative flex items-center justify-center w-full sm:w-1/2 mt-[0.5px] sm:mt-12"> 
          <div
            className="relative flex items-center justify-center rounded-full
            bg-gradient-to-r from-blue-100 to-purple-200 dark:from-gray-800 dark:to-gray-800
            h-[200px] xxs:h-[240px] xs:h-[280px] sm:h-[340px] md:h-[400px] lg:h-[450px] xl:h-[520px]
            w-[200px] xxs:w-[240px] xs:w-[280px] sm:w-[340px] md:w-[400px] lg:w-[450px] xl:w-[520px]
            shadow-xl overflow-hidden"
          >
            <Image
              src={HeroImage}
              alt="Hero Image"
              className="absolute inset-0 w-full h-full object-cover rounded-full"
              priority
            />
          </div>
        </div>

        {/* TEXT SECTION (Always Right) */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left sm:w-1/2 space-y-6">
          <h1 className="font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-zinc-600 dark:text-white leading-tight">
            Empower Your English Learning Journey With
            <span className="bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent block mt-2">
              Sushil Sir
            </span>
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-sm xs:text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed">
            Unlock your true communication potential. Learn to speak English fluently with confidence, express yourself naturally, and connect with people worldwide.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto justify-center sm:justify-start">
            <Link
              href="/allCourses"
              className="px-6 py-3 border border-blue-400 text-blue-500 dark:text-white font-semibold rounded-full text-center hover:bg-blue-50 dark:hover:bg-gray-800 transition duration-300"
            >
              Explore Courses
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 border border-blue-400 text-blue-500 dark:text-white font-semibold rounded-full text-center hover:bg-blue-50 dark:hover:bg-gray-800 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
