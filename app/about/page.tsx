// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import {
//   Mail,
//   Instagram,
//   Phone,
//   Youtube,
//   Linkedin,
// } from "lucide-react";
// import SpokenEnglishImage from "../../public/assests/Spoken-English.jpg";
// import AccentClassesImage from "../../public/assests/Accent-classes.jpg";
// import EnglishCourseImage from "../../public/assests/English_course.jpg";
// import IeltsImage from "../../public/assests/Ielts.jpg";
// import Header from "../components/Header";

// const Page: React.FC = () => {
//   const [open, setOpen] = useState(false);
//   const [route, setRoute] = useState("Login");
//   const activeItem = 2;
//   const courses = [
//     {
//       img: AccentClassesImage,
//       title: "Accent Classes",
//       desc: "Improve pronunciation and clarity with guided practice. Our structured lessons ensure that you master sound patterns step by step.",
//     },
//     {
//       img: SpokenEnglishImage,
//       title: "Spoken English",
//       desc: "This course is designed to help you not only learn new words but also use them naturally in everyday conversations. You’ll practice real-life speaking situations, improve your pronunciation, and develop the confidence to express yourself clearly.",
//     },

// // {
// //   img: SpokenEnglishImage,
// //   title: "Spoken English",
// //   desc: `Are you ready to speak English fluently, confidently, and naturally in everyday conversations, professional settings, and public speaking situations?

// // Our *Spoken English Mastery Course* is designed for learners of all levels who want to improve their English communication skills. Whether you're a student, a working professional, or simply someone looking to enhance your language abilities, this course offers a structured yet flexible approach to help you speak English with clarity, confidence, and impact.

// // ### *What You’ll Learn:*

// // * Master everyday vocabulary and conversational phrases
// // * Improve pronunciation, fluency, and sentence structure
// // * Build confidence through real-life speaking practice
// // * Learn to think in English, not translate
// // * Handle interviews, meetings, and social conversations with ease
// // * Overcome hesitation and fear of speaking in public

// // ### *Course Features:*

// // * 💬 *Live interactive sessions* with expert guidance
// // * 📚 *Practical speaking activities* and real-world scenarios
// // * 🎧 *Listening & comprehension* exercises
// // * 📝 *Personalized feedback* to track your progress
// // * 📱 *Accessible on mobile and desktop*
// // * 🕒 *Flexible, self-paced learning* with lifetime access

// // ### *Who This Course Is For:*

// // * Beginners who want to start speaking confidently
// // * Intermediate learners looking to refine their fluency
// // * Professionals preparing for interviews, presentations, or global communication
// // * Anyone eager to develop fluent spoken English for daily or academic use

// // *Join thousands of learners who have transformed their English skills. Speak fluently, express yourself clearly, and open doors to new opportunities.*`,
// // },

//     {
//       img: IeltsImage,
//       title: "IELTS",
//       desc: "Prepare with targeted practice in all test modules. Focus on listening, speaking, reading, and writing to achieve your best score.",
//     },
//     {
//       img: EnglishCourseImage,
//       title: "English Course",
//       desc: "Strengthen grammar, vocabulary, and comprehension through engaging exercises, practical lessons, and interactive discussions.",
//     },
//     {
//       img: SpokenEnglishImage,
//       title: "Daily English",
//       desc: "Gain confidence in daily conversations with friends, family, and colleagues using simple yet effective communication strategies that enhance clarity, improve listening skills, and make your interactions more impactful and engaging in everyday situations.",
//     },
//     {
//       img: EnglishCourseImage,
//       title: "Advanced English",
//       desc: "Master advanced lessons for academic & career success. Learn presentation skills, academic writing, and professional vocabulary.",
//     },
//   ];

//   // Truncate helper
//   const truncateText = (text: string, wordLimit: number) => {
//     const words = text.trim().split(/\s+/);
//     if (words.length <= wordLimit) return text;
//     return words.slice(0, wordLimit).join(" ") + "…";
//   };

//   // Track expanded courses
//   const [expanded, setExpanded] = useState<Record<number, boolean>>({});

//   const toggleExpand = (index: number) => {
//     setExpanded((prev) => ({
//       ...prev,
//       [index]: !prev[index],
//     }));
//   };

//   return (
//     <div className="w-full font-sans bg-gray-50 dark:bg-gray-900">
//       {/* ✅ Header */}
//       <Header
//         open={open}
//         setOpen={setOpen}
//         activeItem={activeItem}
//         setRoute={setRoute}
//         route={route}
//       />

//       {/* 🌟 Hero Section */}
//       <section className="relative w-full py-24 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-slate-800 dark:to-slate-900 text-center">
//         <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 dark:text-white drop-shadow-lg mb-6">
//           Welcome to{" "}
//           <span className="text-purple-700 dark:text-purple-400">
//             Live English With Sushil
//           </span>
//         </h1>
//         <p className="max-w-2xl mx-auto text-xl lg:text-2xl text-gray-800 dark:text-gray-200 opacity-90">
//           Learn 📖 Grow 📈 Achieve 🏆
//         </p>
//         <p className="max-w-3xl mx-auto text-lg lg:text-xl text-gray-700 dark:text-gray-300 mt-6 leading-relaxed">
//           We empower learners with structured and interactive courses. <br />
//           Discover practical skills, flexible learning, and expert guidance — all
//           in one platform to help you reach your goals with confidence.
//         </p>
//       </section>

//       {/* 👨‍🏫 Trainer Section */}
//       <div id="mentor" className="w-full mt-20 mb-16 scroll-mt-24">
//         <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-slate-800 dark:to-slate-900 p-12 text-center shadow-xl">
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
//             Know your Mentor <br /> Sushil Kumar
//           </h2>
//           <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed max-w-4xl mx-auto">
//             With more than 10+ years of professional experience, Sushil Kumar has guided over 6,000 students in speaking, reading skills, accent training, and English. His interests go far beyond language training because he is quite passionate about guiding young people and developing their latent potential through full-fledged personal development.
//             <br />
//             His training sessions cover diverse competencies, ranging from Communication Skills, and Personality Development to a complete approach to achievement and success.
//             <br />
//             If you desire to develop communication skills, improve your personal image, and obtain overall well-being, you are welcome to receive professional guidance at:
//           </p>

//           {/* 🎯 Social Icons */}
//           <div className="mt-8 flex justify-center space-x-6">
//             {[
//               { Icon: Youtube, href: "https://youtube.com/@mrenglishsushil?si=5CsNKpLSkCpb5p1G", color: "from-red-400 to-red-600" },
//               { Icon: Instagram, href: "https://www.instagram.com/mrenglishsushil?igsh=MXR5MHJ4dHdscjNhdg%3D%3D&utm_source=qr", color: "from-pink-400 to-pink-600" },
//               { Icon: Mail, href: "mailto:sushildnn78@gmail.com", color: "from-blue-400 to-blue-600" },
//               { Icon: Phone, href: "tel:9888050007", color: "from-green-400 to-green-600" },
//               { Icon: Linkedin, href: "https://www.linkedin.com/in/sushilkumarr/", color: "from-blue-500 to-indigo-600" },
//             ].map(({ Icon, href, color }, i) => (
//               <a
//                 key={i}
//                 href={href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="social link"
//                 className={`w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br ${color} text-white shadow-lg transform hover:scale-110 transition-all`}
//               >
//                 <Icon className="w-6 h-6" />
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>


//       {/* 🎯 Mission & Vision */}

//       <section id="mission" className="py-20 px-6 lg:px-20 bg-gray-200 dark:bg-gray-900">
//         <h2 className="text-3xl font-bold text-center mb-14 text-gray-900 dark:text-white">
//           Mission & Vision
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           <div className="p-10 rounded-2xl shadow-lg bg-white dark:bg-gray-800 hover:scale-105 transition-all">
//             <h3 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-purple-500">
//               Our Mission 🎯
//             </h3>
//             <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
//               To make quality education accessible to everyone, anytime and anywhere,
//               by providing engaging and practical online courses that help learners
//               grow personally and professionally.
//             </p>
//           </div>
//           <div className="p-10 rounded-2xl shadow-lg bg-white dark:bg-gray-800 hover:scale-105 transition-all">
//             <h3 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-purple-500">
//               Our Vision 👁️
//             </h3>
//             <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
//               To become a trusted global platform that empowers individuals with
//               knowledge and skills, bridging the gap between learning and real-world
//               success.
//             </p>
//           </div>
//         </div>
//       </section>


//       {/* ✅ Why Choose Us */}
//       <section className="py-16 px-6 lg:px-20 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
//         <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
//           Why Choose Us?
//         </h2>

//         <div className="relative w-full overflow-hidden">
//           {/* Duplicated track for seamless loop */}
//           <div className="flex gap-6 animate-scroll">
//             {[
//               { title: "Easy to Learn", desc: "Courses explained in simple language." },
//               { title: "Affordable", desc: "Quality learning without high costs." },
//               { title: "Flexible", desc: "Learn anytime, anywhere at your pace." },
//               { title: "Beginner Friendly", desc: "Start from basics with easy-to-follow lessons." },
//               { title: "Step-by-Step", desc: "Clear path from beginner to advanced level." },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="min-w-[260px] p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-500"
//               >
//                 <h3 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-300">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
//               </div>
//             ))}

//             {/* Duplicate again for smooth infinite scroll */}
//             {[
//               { title: "Easy to Learn", desc: "Courses explained in simple language." },
//               { title: "Affordable", desc: "Quality learning without high costs." },
//               { title: "Flexible", desc: "Learn anytime, anywhere at your pace." },
//               { title: "Beginner Friendly", desc: "Start from basics with easy-to-follow lessons." },
//               { title: "Step-by-Step", desc: "Clear path from beginner to advanced level." },
//             ].map((item, i) => (
//               <div
//                 key={`dup-${i}`}
//                 className="min-w-[260px] p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-500"
//               >
//                 <h3 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-300">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>



//       <section
//         id="courses"
//         className="py-20 px-6 lg:px-20 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-slate-800 dark:to-slate-900 relative"
//       >
//         <h2 className="text-4xl font-bold text-center mb-14 text-gray-900 dark:text-white">
//           Explore Our Popular Courses
//         </h2>

//         {/* ⬅️ Left Button (now extreme left of section) */}
//         <button
//           onClick={() => {
//             const container = document.getElementById("courses-row");
//             if (container) container.scrollLeft -= 320; // scroll left
//           }}
//           className="absolute left-4 top-1/2 -translate-y-1/2 bg-blue-200 dark:bg-gray-800 text-gray-800 dark:text-white p-3 rounded-full shadow-md z-20 hover:bg-blue-200 dark:hover:bg-gray-700"
//         >
//           &lt;
//         </button>

//         {/* ➡️ Right Button (now extreme right of section) */}
//         <button
//           onClick={() => {
//             const container = document.getElementById("courses-row");
//             if (container) container.scrollLeft += 320; // scroll right
//           }}
//           className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-200 dark:bg-gray-800 text-gray-800 dark:text-white p-3 rounded-full shadow-md z-20 hover:bg-blue-400 dark:hover:bg-gray-700"

//         >
//           &gt;
//         </button>

//         {/* Horizontal scrollable row with visible scrollbar */}
//         <div
//           id="courses-row"
//           className="flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth pb-4"
//           style={{ scrollbarWidth: "thin" }} // Firefox
//         >
//           {courses.map((course, i) => {
//             const words = course.desc.trim().split(/\s+/);
//             const isLong = words.length > 20;
//             const isExpanded = expanded[i];
//             return (
//               <div
//                 key={i}
//                 className="min-w-[300px] max-w-[300px] bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-md hover:shadow-2xl rounded-2xl p-6 flex flex-col items-center transition-all hover:scale-105"
//               >
//                 <Image
//                   src={course.img}
//                   alt={course.title}
//                   className="rounded-xl object-cover mb-4"
//                   width={280}
//                   height={180}
//                 />
//                 <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
//                   {course.title}
//                 </h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-300 mt-3 text-center">
//                   {isLong && !isExpanded ? truncateText(course.desc, 20) : course.desc}
//                 </p>
//                 {isLong && (
//                   <button
//                     onClick={() => toggleExpand(i)}
//                     className="text-gray-700 dark:text-gray-300 mt-2 underline underline-offset-4 text-sm hover:opacity-80"
//                   >
//                     {isExpanded ? "Show Less" : "Show More"}
//                   </button>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </section>




//       {/* 🚀 Call to Action */}
//       <section className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-slate-800 dark:to-slate-900 p-12 text-center shadow-xl relative overflow-hidden">
//         <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
//           Ready to Start Learning? 🚀
//         </h2>
//         <p className="max-w-3xl mx-auto mb-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
//           Take your English skills to the next level with our expert-designed courses.
//           Learn at your own pace, gain confidence in communication, and open doors to new opportunities.
//         </p>
//         <p className="max-w-3xl mx-auto mb-8 text-md text-gray-600 dark:text-gray-400 leading-relaxed">
//           Join thousands of learners worldwide who have improved their speaking, writing, and professional skills.
//           Our interactive lessons, real-life practice, and dedicated mentorship will guide you every step of the way.
//         </p>

//         <div className="overflow-hidden w-full flex justify-center mt-6">
//           <h3 className="text-5xl lg:text-7xl font-extrabold bg-gradient-to-br from-purple-500 to-blue-500 text-transparent bg-clip-text drop-shadow-lg transform -translate-x-full animate-slide-in">
//             Enroll Now
//           </h3>
//         </div>

//         {/* Optional decorative elements */}
//         <div className="absolute top-0 left-0 w-32 h-32 bg-purple-200 dark:bg-purple-700 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
//         <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-200 dark:bg-blue-700 rounded-full opacity-30 translate-x-1/2 translate-y-1/2 animate-pulse-slow"></div>
//       </section>
//     </div>
//   );
// };

// export default Page;






"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, Instagram, Phone, Youtube, Linkedin } from "lucide-react";
import SpokenEnglishImage from "../../public/assests/Spoken-English.jpg";
import AccentClassesImage from "../../public/assests/Accent-classes.jpg";
import EnglishCourseImage from "../../public/assests/English_course.jpg";
import IeltsImage from "../../public/assests/Ielts.jpg";
import Header from "../components/Header";

const Page: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [route, setRoute] = useState("Login");
  const activeItem = 2;

  const courses = [
    {
      img: AccentClassesImage,
      title: "Accent Classes",
      desc: "Improve pronunciation and clarity with guided practice. Our structured lessons ensure that you master sound patterns step by step.",
    },
    {
      img: SpokenEnglishImage,
      title: "Spoken English",
      desc: "This course is designed to help you not only learn new words but also use them naturally in everyday conversations. You’ll practice real-life speaking situations, improve your pronunciation, and develop the confidence to express yourself clearly.",
    },
    {
      img: IeltsImage,
      title: "IELTS",
      desc: "Prepare with targeted practice in all test modules. Focus on listening, speaking, reading, and writing to achieve your best score.",
    },
    {
      img: EnglishCourseImage,
      title: "English Course",
      desc: "Strengthen grammar, vocabulary, and comprehension through engaging exercises, practical lessons, and interactive discussions.",
    },
    {
      img: SpokenEnglishImage,
      title: "Daily English",
      desc: "Gain confidence in daily conversations with friends, family, and colleagues using simple yet effective communication strategies that enhance clarity, improve listening skills, and make your interactions more impactful and engaging in everyday situations.",
    },
    {
      img: EnglishCourseImage,
      title: "Advanced English",
      desc: "Master advanced lessons for academic & career success. Learn presentation skills, academic writing, and professional vocabulary.",
    },
  ];

  // Truncate helper
  const truncateText = (text: string, wordLimit: number) => {
    const words = text.trim().split(/\s+/);
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "…";
  };

  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggleExpand = (index: number) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="w-full font-sans bg-gray-50 dark:bg-gray-900 overflow-x-hidden">
      {/* ✅ Header */}
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />

      {/* 🌟 Hero Section */}
      <section className="relative w-full py-24 px-6 lg:px-20 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-slate-900 dark:to-slate-900 text-center">
        <h1 className="text-4xl sm:text-3xl lg:text-5xl font-extrabold text-gray-900 dark:text-white drop-shadow-lg mb-6">
          Welcome to{" "}
          <span className="text-purple-700 dark:text-purple-400">
            Live English With Sushil
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl lg:text-2xl text-gray-800 dark:text-gray-200 opacity-90">
          Learn 📖 Grow 📈 Achieve 🏆
        </p>
        <p className="max-w-4xl mx-auto mt-6 text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
          We empower learners with structured and interactive courses.
          Discover practical skills, flexible learning, and expert guidance — all
          in one platform to help you reach your goals with confidence.
        </p>
      </section>

      {/* 👨‍🏫 Trainer Section */}
      <section
        id="mentor"
        className="relative w-full py-20 px-6 lg:px-20 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-slate-800 dark:to-slate-800 text-center"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Know your Mentor  <span className="text-purple-700 dark:text-purple-400">
            Sushil Kumar
          </span>
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed text-justify">
            With more than 10+ years of professional experience, Sushil Kumar has
            guided over 6,000 students in speaking, reading skills, accent training,
            and English. His interests go far beyond language training because he is
            quite passionate about guiding young people and developing their latent
            potential through full-fledged personal development.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed mt-4 text-justify">
            His training sessions cover diverse competencies, ranging from
            Communication Skills, and Personality Development to a complete approach
            to achievement and success.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed mt-4 text-justify">
            If you desire to develop communication skills, improve your personal
            image, and obtain overall well-being, you are welcome to receive
            professional guidance at:
          </p>

          {/* 🎯 Social Icons */}
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {[
              {
                Icon: Youtube,
                href: "https://youtube.com/@mrenglishsushil?si=5CsNKpLSkCpb5p1G",
                color: "from-red-400 to-red-600",
              },
              {
                Icon: Instagram,
                href: "https://www.instagram.com/mrenglishsushil?igsh=MXR5MHJ4dHdscjNhdg%3D%3D&utm_source=qr",
                color: "from-pink-400 to-pink-600",
              },
              {
                Icon: Mail,
                href: "mailto:sushildnn78@gmail.com",
                color: "from-blue-400 to-blue-600",
              },
              {
                Icon: Phone,
                href: "tel:9888050007",
                color: "from-green-400 to-green-600",
              },
              {
                Icon: Linkedin,
                href: "https://www.linkedin.com/in/sushilkumarr/",
                color: "from-blue-500 to-indigo-600",
              },
            ].map(({ Icon, href, color }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="social link"
                className={`w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br ${color} text-white shadow-lg transform hover:scale-110 transition-all`}
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 🎯 Mission & Vision */}
      <section
        id="mission"
        className="py-20 px-6 sm:px-10 lg:px-20 bg-gray-200 dark:bg-gray-900"
      >
        <h2 className="text-3xl font-bold text-center mb-14 text-gray-900 dark:text-white">
          Mission & Vision
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-8 sm:p-10 rounded-2xl shadow-lg bg-white dark:bg-gray-800 hover:scale-105 transition-all">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-purple-500">
              Our Mission 🎯
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              To make quality education accessible to everyone, anytime and anywhere,
              by providing engaging and practical online courses that help learners
              grow personally and professionally.
            </p>
          </div>
          <div className="p-8 sm:p-10 rounded-2xl shadow-lg bg-white dark:bg-gray-800 hover:scale-105 transition-all">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-purple-500">
              Our Vision 👁️
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              To become a trusted global platform that empowers individuals with
              knowledge and skills, bridging the gap between learning and real-world
              success.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Why Choose Us */}
      <section className="py-16 px-6 sm:px-10 lg:px-20 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Why Choose Us?
        </h2>
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-6 animate-scroll">
            {[
              { title: "Easy to Learn", desc: "Courses explained in simple language." },
              { title: "Affordable", desc: "Quality learning without high costs." },
              { title: "Flexible", desc: "Learn anytime, anywhere at your pace." },
              { title: "Beginner Friendly", desc: "Start from basics with easy lessons." },
              { title: "Step-by-Step", desc: "Clear path from beginner to advanced." },
            ].map((item, i) => (
              <div
                key={i}
                className="min-w-[260px] p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-500"
              >
                <h3 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-justify">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📘 Courses Section */}
      <section
        id="courses"
        className="py-20 px-6 sm:px-10 lg:px-20 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-slate-800 dark:to-slate-900 relative"
      >
        <h2 className="text-4xl font-bold text-center mb-14 text-gray-900 dark:text-white">
          Explore Our Popular Courses
        </h2>

        {/* Left Scroll Button */}
        <button
          onClick={() => {
            const container = document.getElementById("courses-row");
            if (container) container.scrollLeft -= 320;
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-blue-200 dark:bg-gray-800 text-gray-800 dark:text-white p-3 rounded-full shadow-md z-20 hover:bg-blue-300 dark:hover:bg-gray-700"
        >
          &lt;
        </button>

        {/* Right Scroll Button */}
        <button
          onClick={() => {
            const container = document.getElementById("courses-row");
            if (container) container.scrollLeft += 320;
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-200 dark:bg-gray-800 text-gray-800 dark:text-white p-3 rounded-full shadow-md z-20 hover:bg-blue-300 dark:hover:bg-gray-700"
        >
          &gt;
        </button>

        {/* Scrollable Courses */}
        <div
          id="courses-row"
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
          style={{ scrollbarWidth: "thin" }}
        >
          {courses.map((course, i) => {
            const words = course.desc.trim().split(/\s+/);
            const isLong = words.length > 20;
            const isExpanded = expanded[i];
            return (
              <div
                key={i}
                className="min-w-[280px] sm:min-w-[300px] bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-md hover:shadow-2xl rounded-2xl p-6 flex flex-col items-center transition-all hover:scale-105"
              >
                <Image
                  src={course.img}
                  alt={course.title}
                  className="rounded-xl object-cover mb-4"
                  width={280}
                  height={180}
                />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-3 text-center text-justify">
                  {isLong && !isExpanded ? truncateText(course.desc, 20) : course.desc}
                </p>
                {isLong && (
                  <button
                    onClick={() => toggleExpand(i)}
                    className="text-gray-700 dark:text-gray-300 mt-2 underline underline-offset-4 text-sm hover:opacity-80"
                  >
                    {isExpanded ? "Show Less" : "Show More"}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 🚀 Call to Action */}
      <section className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-slate-800 dark:to-slate-900 p-12 text-center shadow-xl relative overflow-hidden">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Ready to Start Learning? 🚀
        </h2>
        <p className="max-w-3xl mx-auto mb-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
          Take your English skills to the next level with our expert-designed courses.
          Learn at your own pace, gain confidence in communication, and open doors to new opportunities.
        </p>
        <p className="max-w-3xl mx-auto mb-8 text-md text-gray-600 dark:text-gray-400 leading-relaxed text-justify">
          Join thousands of learners worldwide who have improved their speaking,
          writing, and professional skills. Our interactive lessons, real-life practice,
          and dedicated mentorship will guide you every step of the way.
        </p>

        <div className="overflow-hidden w-full flex justify-center mt-6">
          <h3 className="text-5xl lg:text-7xl font-extrabold bg-gradient-to-br from-purple-500 to-blue-500 text-transparent bg-clip-text drop-shadow-lg transform -translate-x-full animate-slide-in">
            Go Enroll Now!
          </h3>
        </div>

        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-purple-200 dark:bg-purple-700 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-200 dark:bg-blue-700 rounded-full opacity-30 translate-x-1/2 translate-y-1/2 animate-pulse-slow"></div>
      </section>
    </div>
  );
};

export default Page;
