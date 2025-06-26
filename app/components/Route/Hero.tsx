"use client";
import React from "react";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "../../../public/assests/AdminImage-removebg.png";
import SpokenEnglishImageCourese from "../../../public/assests/Spoken-English-courses.jpg";
import AccentClassesImage from "../../../public/assests/Accent-classes.jpg";
import SpokenEnglishImage from "../../../public/assests/Spoken-English.jpg";
import EnglishCourseImage from "../../../public/assests/English_course.jpg";
import IeltsImage from "../../../public/assests/Ielts.jpg";
import { Mail, Instagram, Phone, Youtube } from "lucide-react";

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
              alt="Hero Image"
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

      {/* Courses Section Below */}
      <div id="courses" className="w-full px-4 lg:px-20 mt-20">
        <h2 className="text-center text-2xl lg:text-3xl font-bold dark:text-white text-black mb-8">
          Explore Our Popular Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="dark:bg-gray-800 bg-gray-300 shadow-lg rounded-lg p-4 flex flex-col items-center">
            <Image
              src={AccentClassesImage}
              alt="Spoken English Course"
              className="rounded-lg w-full h-auto object-cover"
              width={300}
              height={200}
            />
            <p className="mt-4 dark:text-white text-gray-800 font-medium text-center">
              Accent Classes
            </p>
          </div>
          <div className="dark:bg-gray-800 bg-gray-300 shadow-lg rounded-lg p-4 flex flex-col items-center">
            <Image
              src={SpokenEnglishImageCourese}
              alt="Grammar Course"
              className="rounded-lg w-full h-auto object-cover"
              width={300}
              height={200}
            />
            <p className="mt-4 dark:text-white text-gray-800 font-medium text-center">
              Spoken English Course
            </p>
          </div>
          <div className="dark:bg-gray-800 bg-gray-300 shadow-lg rounded-lg p-4 flex flex-col items-center">
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
              src={EnglishCourseImage}
              alt="Grammar Course"
              className="rounded-lg w-full h-auto object-cover"
              width={300}
              height={200}
            />
            <p className="mt-4 dark:text-white text-gray-800 font-medium text-center">
              English Course
            </p>
          </div>

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
          <div className="dark:bg-gray-800 bg-gray-300  shadow-lg rounded-lg p-4 flex flex-col items-center">
            <Image
              src={EnglishCourseImage}
              alt="Grammar Course"
              className="rounded-lg w-full h-auto object-cover"
              width={300}
              height={200}
            />
            <p className="mt-4 dark:text-white text-gray-800 font-medium text-center">
              English Course
            </p>
          </div>
        </div>
      </div>

        {/* Trainer Section */}
        <div className="w-full px-4 lg:px-20 mt-16 mb-12">
        <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-slate-800 dark:to-slate-800 p-6 md:p-10 rounded-lg text-center shadow-lg">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">Know your Mentor <br />Sushil Kumar </h2>
          <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
            With more than 10+ years of professional experience, Sushil Kumar has guided over 6,000 students in speaking, reading skills, accent training, and English. His interests go far beyond language training because he is quite passionate about guiding young people and developing their latent potential through full-fledged personal development.
            <br />
            His training sessions cover diverse competencies, ranging from Communication Skills, and Personality Development to a complete approach to achievement and success.
            <br />
            If you desire to develop communication skills, improve your personal image, and obtain overall well-being, you are welcome to receive professional guidance at:          
            {/* Contact Information */}
<div className="mt-4 flex  flex-col items-center text-lg space-y-2">
<div className="flex items-center space-x-2">
    <Youtube className="w-6 h-6 text-red-600 dark:text-red-500" />
    <a
      href="https://www.youtube.com/@liveenglishwithsushil"
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-gray-800 dark:text-gray-200 underline hover:text-red-400 transition duration-300"
    >
      https://www.youtube.com/@mrenglishsushil
    </a>
  </div>

  {/* Instagram */}

  <div className="flex items-center space-x-2">
    <Instagram className="w-5 h-5 text-pink-900 dark:text-pink-800" />
    <a
      href="https://www.instagram.com/liveenglishwithsushil"
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-gray-800 dark:text-gray-200 underline hover:text-pink-600"
    >
      {/* https://www.instagram.com/mrenglishsushil */}
     @mrenglishsushil
      
    </a>
  </div>
  


  {/* Email */}
  <div className="flex items-center space-x-2">
    <Mail className="w-5 h-5 text-blue-00 dark:text-blue-300" />
    <a
      href="mailto:liveenglishwithsushil@gmail.com"
      className="font-semibold tex-gray-800 dark:text-gray-200 underline hover:text-red-900 transition"
    >
      liveenglishwithsushil@gmail.com
    </a>
  </div>
  {/* Phone */}
  <div className="flex items-center space-x-2">
    <Phone className="w-5 h-5 text-green-600 dark:text-green-400" />
    <a
      href="tel:87654345"
      className="font-semibold text-grat-800 dark:text-gray-200 underline hover:text-green-500"
    >      +91 87654345
    </a>
  </div>
</div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

















// "use client";
// import React from "react";
// import { BiSearch } from "react-icons/bi";
// import Image from "next/image";
// import Link from "next/link";
// import HeroImage from "../../../public/assests/AdminImage-removebg.png";
// // import HeroImage from "../../../public/assests/avatar.jpg";
// import SpokenEnglishImageCourese from "../../../public/assests/Spoken-English-courses.jpg"
// import AccentClassesImage from "../../../public/assests/Accent-classes.jpg";
// import SpokenEnglishImage from "../../../public/assests/Spoken-English.jpg";
// import EnglishCourseImage from "../../../public/assests/English_course.jpg";
// import IeltsImage from "../../../public/assests/Ielts.jpg";

// const Hero: React.FC = () => {
//   return (
//     <div className="w-full flex flex-col items-center">
//       {/* Hero Section */}
//       <div className="w-full flex flex-col lg:flex-row items-center pt-20 px-4 lg:px-20 overflow-hidden">
//         <div className="relative flex items-center justify-center mx-4 sm:mx-6 md:mx-7 my-4 sm:my-5 mt-6 pt-8 sm:pt-10 px-4 sm:px-6 py-6 sm:py-8 z-0">
//           {/* Animated Circle Background */}
    //       <div className="relative flex items-center justify-center rounded-full hero_animation 
    // bg-gradient-to-r dark:from-blue-500 dark:to-purple-100 from-blue-300 to-purple-400 
    // opacity-60 h-[25vw] w-[25vw] sm:h-[30vh] sm:w-[30vh] md:h-[40vh] md:w-[40vh] lg:h-[500px] lg:w-[500px] 
    // xl:h-[500px] xl:w-[500px] shadow-lg overflow-hidden">
//             {/* Hero Image - Centered Inside the Circle */}
//             <Image
//               src={HeroImage}
//               alt="Hero Image"
//               className="absolute inset-0 w-full h-full max-w-full max-h-full object-cover rounded-full"
//               priority
//               width={500}
//               height={500}
//             />
//           </div>
//         </div>




//         {/* Text and Search Section */}
//         <div className="lg:w-[60%] flex flex-col items-center lg:items-start text-center lg:text-left mt-12 lg:mt-0 ">
//           <p className="px-4 lg:px-0 font-semibold text-2xl lg:text-4xl xl:text-5xl dark:text-white text-black ">
//             Improve Your Online Learning Experience Instantly
//           </p>
//           <p className="mt-4 px-4 lg:px-0 dark:text-gray-300 text-gray-700 text-sm lg:text-base xl:text-lg">
//             We have 40k+ online courses & 500K+ registered students. Find your
//             desired courses today.
//           </p>
//           <br />
//           <br />

//           {/* Search Bar */}
//           <div className="mt-6 w-full lg:w-[80%] relative z-10">
//             <input
//               type="text"
//               placeholder="Search Courses..."
//               className="border dark:border-gray-700 border-gray-500 dark:bg-gray-800 bg-gray-200 dark:placeholder-gray-400 placeholder-gray-800 
//               rounded-md p-3 w-full h-12 outline-none text-black dark:text-white z-10"
//               aria-label="Search Courses"
//             />
//             <div className="absolute flex items-center justify-center w-12 h-12 top-0 right-0 bg-blue-500 rounded-r-md cursor-pointer">
//               <BiSearch className="text-white" size={24} />
//             </div>
//           </div>
//           <p className="mt-6 dark:text-gray-200 text-gray-800 text-sm lg:text-base font-semibold text-center lg:text-left">
//             Trusted by many students.{" "}
//             <Link
//               href="/courses"
//               className="text-blue-500 dark:text-green-400 underline"
//             >
//               View Courses
//             </Link>
//           </p>
//         </div>
//       </div>

//       {/* Courses Section Below */}
//       <div id="courses" className="w-full px-4 lg:px-20 mt-20">
//         <h2 className="text-center text-2xl lg:text-3xl font-bold dark:text-white text-black mb-8">
//           Explore Our Popular Courses
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           <div className="dark:bg-gray-800 bg-gray-300 shadow-lg rounded-lg p-4 flex flex-col items-center">
//             <Image
//               src={AccentClassesImage}
//               alt="Spoken English Course"
//               className="rounded-lg w-full h-auto object-cover"
//               width={300}
//               height={200}
//             />
//             <p className="mt-4 dark:text-white text-gray-800 font-medium text-center">
//               Accent Classes
//             </p>
//           </div>
//           {/* Spoken English */}
//           <div className="dark:bg-gray-800 bg-gray-300  shadow-lg rounded-lg p-4 flex flex-col items-center">
//             <Image
//               src={SpokenEnglishImageCourese}
//               alt="Grammar Course"
//               className="rounded-lg w-full h-auto object-cover"
//               width={300}
//               height={200}
//             />
//             <p className="mt-4 dark:text-white text-gray-800 font-medium text-center">
//               Spoken English Course
//             </p>
//           </div>

//           {/* IELTS */}
//           <div className="dark:bg-gray-800 bg-gray-300  shadow-lg rounded-lg p-4 flex flex-col items-center">
//             <Image
//               src={IeltsImage}
//               alt="IELTS Course"
//               className="rounded-lg w-full h-auto object-cover"
//               width={300}
//               height={200}
//             />
//             <p className="mt-4 dark:text-white text-gray-800 font-medium text-center">
//               IELTS
//             </p>
//           </div>
          // {/* Grammar Course */}
          // <div className="dark:bg-gray-800 bg-gray-300  shadow-lg rounded-lg p-4 flex flex-col items-center">
          //   <Image
          //     src={EnglishCourseImage}
          //     alt="Grammar Course"
          //     className="rounded-lg w-full h-auto object-cover"
          //     width={300}
          //     height={200}
          //   />
          //   <p className="mt-4 dark:text-white text-gray-800 font-medium text-center">
          //     English Course
          //   </p>
          // </div>

          // <div className="dark:bg-gray-800 bg-gray-300 shadow-lg rounded-lg p-4 flex flex-col items-center">
          //   <Image
          //     src={SpokenEnglishImage}
          //     alt="Spoken English Course"
          //     className="rounded-lg w-full h-auto object-cover"
          //     width={300}
          //     height={200}
          //   />
          //   <p className="mt-4 dark:text-white text-gray-800 font-medium text-center">
          //     Spoken English
          //   </p>
          // </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
