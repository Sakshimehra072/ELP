// import { useGetUsersAllCoursesQuery } from "@/redux/features/courses/coursesApi";
// import React, { useEffect, useState } from "react";
// import CourseCard from "../Course/CourseCard";

// // type Props = {};

// interface Course {
//   _id: string;
//   name: string;
//   description: string;
//   // HIGHLIGHT: Changed thumbnail from string | undefined to { url: string } to match CourseItem type
//   thumbnail: {
//     url: string;
//   };
//   price: number;
//   estimatedPrice?: number; // HIGHLIGHT: Added estimatedPrice to match CourseItem (optional)
//   courseData?: Array<{
//     _id: string;
//     title: string;
//     videoLength: number;
//     videoSection: string;
//   }>; // HIGHLIGHT: Added courseData to match CourseItem for lecture count
//   [key: string]: unknown; // optional for extra fields
// }
// const Courses = () => {
//   const { data } = useGetUsersAllCoursesQuery({});
//   const [courses, setCourses] = useState<Course[]>([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const cardsPerRow = 4; // 4 cards per row

//   useEffect(() => {
//     if (data?.courses) {
//       // Latest courses first
//       setCourses([...data.courses].reverse());
//     }
//   }, [data]);

//   const nextSlide = () => {
//     if (currentIndex + cardsPerRow < courses.length) {
//       setCurrentIndex(currentIndex + cardsPerRow);
//     }
//   };

//   const prevSlide = () => {
//     if (currentIndex - cardsPerRow >= 0) {
//       setCurrentIndex(currentIndex - cardsPerRow);
//     }
//   };

//   const visibleCourses = courses.slice(currentIndex, currentIndex + cardsPerRow);

//   return (
//     <div className="w-full min-h-screen flex items-center py-12 mt-[1px]">
//       <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto px-4">
//         <h1 className="text-center font-Poppins text-[25px] sm:text-5xl font-bold leading-[35px] lg:leading-[60px] text-zinc-600 dark:text-white tracking-wide drop-shadow-md">
//           Our Latest{" "}
//           <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
//             Courses
//           </span>
//         </h1>

//         <div className="relative h-auto flex flex-col justify-center mt-28">
//           {/* Navigation Buttons */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-0 -translate-x-[150%] top-1/2 -translate-y-1/2 z-10 bg-blue-100 text-gray-900 dark:bg-gray-700 px-3 py-2 rounded-full shadow"
//           >
//             {"<"}
//           </button>

//           <button
//             onClick={nextSlide}
//             className="absolute right-0 translate-x-[150%] top-1/2 -translate-y-1/2 z-10 bg-blue-100 text-gray-900 dark:bg-gray-700 px-3 py-2 rounded-full shadow"
//           >
//             {">"}
//           </button>

//           {/* Courses Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6  ">
//             {visibleCourses.map((item: Course, index: number) => (
//               <CourseCard item={item} key={index} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Courses;




import { useGetUsersAllCoursesQuery } from "@/redux/features/courses/coursesApi";
import React, { useEffect, useState, useRef } from "react";
import CourseCard from "../Course/CourseCard";

interface Course {
  _id: string;
  name: string;
  description: string;
  thumbnail: { url: string };
  price: number;
  estimatedPrice?: number;
  courseData?: Array<{
    _id: string;
    title: string;
    videoLength: number;
    videoSection: string;
  }>;
  [key: string]: unknown;
}

const Courses = () => {
  const { data } = useGetUsersAllCoursesQuery({});
  const [courses, setCourses] = useState<Course[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerRow = 4;

  // Refs for swipe and scroll
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (data?.courses) {
      setCourses([...data.courses].reverse());
    }
  }, [data]);

  const nextSlide = () => {
    if (currentIndex + cardsPerRow < courses.length) {
      setCurrentIndex(currentIndex + cardsPerRow);
    }
  };

  const prevSlide = () => {
    if (currentIndex - cardsPerRow >= 0) {
      setCurrentIndex(currentIndex - cardsPerRow);
    }
  };

  // Swipe detection for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) nextSlide();
    else if (distance < -50) prevSlide();

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const totalPages = Math.ceil(courses.length / cardsPerRow);
  const currentPage = Math.floor(currentIndex / cardsPerRow);
  const visibleCourses = courses.slice(currentIndex, currentIndex + cardsPerRow);

  // Scroll to "Our Latest Courses" section smoothly
  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div ref={sectionRef} className="w-full min-h-screen flex items-center py-12 mt-[1px]">
      <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto px-4">
        {/* Title */}
        <h1 className="text-center font-Poppins text-[25px] sm:text-5xl font-bold leading-[35px] lg:leading-[60px] text-zinc-600 dark:text-white tracking-wide drop-shadow-md">
          Our Latest{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Courses
          </span>
        </h1>

        <div className="relative h-auto flex flex-col justify-center mt-28">
          {/* Desktop Navigation Buttons */}
          <button
            type="button"
            onClick={prevSlide}
            className="hidden sm:flex absolute left-0 -translate-x-[150%] top-1/2 -translate-y-1/2 z-10 
              bg-blue-100 text-gray-900 dark:bg-gray-700 px-3 py-2 rounded-full shadow"
          >
            {"<"}
          </button>

          <button
            type="button"
            onClick={nextSlide}
            className="hidden sm:flex absolute right-0 translate-x-[150%] top-1/2 -translate-y-1/2 z-10 
              bg-blue-100 text-gray-900 dark:bg-gray-700 px-3 py-2 rounded-full shadow"
          >
            {">"}
          </button>

          {/* Courses Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {visibleCourses.map((item: Course, index: number) => (
              <CourseCard item={item} key={index} />
            ))}
          </div>

          {/* Pagination Dots (Mobile Only) */}
          <div className="flex sm:hidden justify-center items-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                type="button"
                key={i}
                onClick={() => {
                  setCurrentIndex(i * cardsPerRow);
                  scrollToSection(); // Scroll to "Our Latest Courses"
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === currentPage
                    ? "bg-blue-500 scale-110"
                    : "bg-gray-400 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
