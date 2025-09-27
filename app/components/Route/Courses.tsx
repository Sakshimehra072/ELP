// // import { useGetUsersAllCoursesQuery } from "@/redux/features/courses/coursesApi";
// import { useGetUsersAllCoursesQuery } from "@/redux/features/courses/coursesApi";
// import React, { useEffect, useState } from "react";
// import CourseCard from "../Course/CourseCard";

// type Props = {};

// const Courses = (props: Props) => {
//   const { data, isLoading } = useGetUsersAllCoursesQuery({});
//   const [courses, setCourses] = useState<any[]>([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const cardsPerRow = 5; // Number of cards in a row

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
//     <div className="w-full">
//       <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto">
//         <h1 className="text-center font-Poppins text-[25px] sm:text-5xl font-bold leading-[35px] 800px:!leading-[60px] text-gray-900 dark:text-white tracking-wide drop-shadow-md">
//           Our Latest{" "}
//           <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">
//             Courses
//           </span>
//         </h1>

//         <div className="relative mb-12 mt-8">
//           {/* Navigation Buttons */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-0 -translate-x-[150%] top-1a/2 -translate-y-1/2 z-10 bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-full shadow"
//           >
//             {"<"}
//           </button>

//           <button
//             onClick={nextSlide}
//             className="absolute right-0 translate-x-[150%] top-1/2 -translate-y-1/2 z-10 bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-full shadow"
//           >
//             {">"}
//           </button>

//           {/* Courses Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//             {visibleCourses.map((item: any, index: number) => (
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
import React, { useEffect, useState } from "react";
import CourseCard from "../Course/CourseCard";

type Props = {};

const Courses = (props: Props) => {
  const { data, isLoading } = useGetUsersAllCoursesQuery({});
  const [courses, setCourses] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerRow = 4; // 4 cards per row

  useEffect(() => {
    if (data?.courses) {
      // Latest courses first
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

  const visibleCourses = courses.slice(currentIndex, currentIndex + cardsPerRow);

  return (
    <div className="w-full">
      <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto">
        <h1 className="text-center font-Poppins text-[25px] sm:text-5xl font-bold leading-[35px] lg:leading-[60px] text-gray-900 dark:text-white tracking-wide drop-shadow-md">
          Our Latest{" "}
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">
            Courses
          </span>
        </h1>

        <div className="relative mb-12 mt-8">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 -translate-x-[150%] top-1/2 -translate-y-1/2 z-10 bg-blue-100 text-gray-900 dark:bg-gray-700 px-3 py-2 rounded-full shadow"
          >
            {"<"}
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 translate-x-[150%] top-1/2 -translate-y-1/2 z-10 bg-blue-100 text-gray-900 dark:bg-gray-700 px-3 py-2 rounded-full shadow"
          >
            {">"}
          </button>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6  ">
            {visibleCourses.map((item: any, index: number) => (
              <CourseCard item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
