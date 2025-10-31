import { useGetUsersAllCoursesQuery } from "@/redux/features/courses/coursesApi";
import React, { useEffect, useState } from "react";
import CourseCard from "../Course/CourseCard";

// type Props = {};

interface Course {
  _id: string;
  name: string;
  description: string;
  // HIGHLIGHT: Changed thumbnail from string | undefined to { url: string } to match CourseItem type
  thumbnail: {
    url: string;
  };
  price: number;
  estimatedPrice?: number; // HIGHLIGHT: Added estimatedPrice to match CourseItem (optional)
  courseData?: Array<{
    _id: string;
    title: string;
    videoLength: number;
    videoSection: string;
  }>; // HIGHLIGHT: Added courseData to match CourseItem for lecture count
  [key: string]: unknown; // optional for extra fields
}
const Courses = () => {
  const { data } = useGetUsersAllCoursesQuery({});
  const [courses, setCourses] = useState<Course[]>([]);
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
    <div className="w-full min-h-screen flex items-center py-12 mt-[1px]">
      <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto px-4">
        <h1 className="text-center font-Poppins text-[25px] sm:text-5xl font-bold leading-[35px] lg:leading-[60px] text-zinc-600 dark:text-white tracking-wide drop-shadow-md">
          Our Latest{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Courses
          </span>
        </h1>

        <div className="relative h-auto flex flex-col justify-center mt-28">
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
            {visibleCourses.map((item: Course, index: number) => (
              <CourseCard item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;