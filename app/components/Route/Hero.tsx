"use client";

import React from "react";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "../../../public/assests/formalphoto.png";
import SpokenEnglishImage from "../../../public/assests/spoken_english.jpg";
import IeltsImage from "../../../public/assests/Ielts.jpg";
import GrammarCourseImage from "../../../public/assests/Grammar-Course.jpg";

const Hero: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <div className="w-full flex flex-col lg:flex-row items-center pt-20 px-4 lg:px-20 overflow-hidden">
        {/* Animation Circle with Hero Image */} 
        <div className="relative flex items-center justify-center mx-7 my-5 mt-6 pt-10 px-6 py-8">
          <div className="rounded-full hero_animation bg-gradient-to-r dark:from-blue-400 dark:to-purple-100 from-blue-600 to-purple-600 
          opacity-60 h-[20vh] w-[30vh] lg:h-[500px] lg:w-[500px] xl:h-[500px] xl:w-[500px] shadow-lg overflow-hidden object-contain"></div>
          <Image
            src={HeroImage}
            alt="Hero Image"
            className="absolute rounded-full object-contain w-[80%] lg:max-w-[80%] xl:max-w-[70%] h-auto"
            priority
            width={500}
            height={500}
          />
        </div>

        {/* Text and Search Section */}
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

          {/* Search Bar */}
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
            Trusted by many students.{" "}
            <Link
              href="/courses"
              className="text-blue-500 dark:text-green-400 underline"
            >
              View Courses
            </Link>
          </p>
        </div>
      </div>

      {/* Courses Section Below */}
      <div id="courses" className="w-full px-4 lg:px-20 mt-20">
        <h2 className="text-center text-2xl lg:text-3xl font-bold dark:text-white text-black mb-8">
          Explore Our Popular Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Spoken English */}
          <div className="dark:bg-gray-800 bg-gray-300 shadow-lg rounded-lg p-4 flex flex-col items-center">
            <Image
              src={SpokenEnglishImage}
              alt="Spoken English Course"
              className="rounded-lg w-full h-auto object-cover"
              width={300}
              height={200}
            />
            <p className="mt-4 dark:text-white text-gray-800 font-medium text-center">
              Spoken English
            </p>
          </div>
          {/* IELTS */}
          <div className="dark:bg-gray-800 bg-gray-300  shadow-lg rounded-lg p-4 flex flex-col items-center">
            <Image
              src={IeltsImage}
              alt="IELTS Course"
              className="rounded-lg w-full h-auto object-cover"
              width={300}
              height={200}
            />
            <p className="mt-4 dark:text-white text-gray-800 font-medium text-center">
              IELTS
            </p>
          </div>
          {/* Grammar Course */}
          <div className="dark:bg-gray-800 bg-gray-300  shadow-lg rounded-lg p-4 flex flex-col items-center">
            <Image
              src={GrammarCourseImage}
              alt="Grammar Course"
              className="rounded-lg w-full h-auto object-cover"
              width={300}
              height={200}
            />
            <p className="mt-4 dark:text-white text-gray-800 font-medium text-center">
              Grammar Course
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
