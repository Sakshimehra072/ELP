// "use client";
// import React, { useEffect, useState, Suspense } from "react";
// import { useSearchParams } from "next/navigation";
// import { useGetUsersAllCoursesQuery } from "@/redux/features/courses/coursesApi";
// import Loader from "../components/Loader/Loader";
// import Header from "../components/Header";
// import Heading from "../utils/Heading";
// import { styles } from "../styles/style";
// import CourseCard from "../components/Course/CourseCard";
// import Footer from "../components/Footer";

// interface Course {
//   _id: string;
//   name: string;
//   categories: string;
//   description?: string;
//   price: number;
//   estimatedPrice?: number;
//   thumbnail: { url: string };
//   courseData?: Array<{
//     _id: string;
//     title: string;
//     videoLength: number;
//     videoSection: string;
//   }>;
//   createdAt?: string;
//   updatedAt?: string;
// }

// type ApiCourseRaw = {
//   _id?: string;
//   name?: string;
//   categories?: string;
//   description?: string;
//   price?: number | string;
//   estimatedPrice?: number | string;
//   thumbnail?: string | { url?: string };
//   courseData?: Array<{
//     _id?: string;
//     title?: string;
//     videoLength?: number | string;
//     videoSection?: string;
//   }>;
//   createdAt?: string;
//   updatedAt?: string;
// };

// // 👇 Wraps the inner logic safely inside Suspense
// const AllCoursesContent: React.FC = () => {
//   const searchParams = useSearchParams();
//   const search = searchParams?.get("title") ?? "";
//   const { data, isLoading } = useGetUsersAllCoursesQuery(undefined, {});
//   const [route, setRoute] = useState("Login");
//   const [open, setOpen] = useState(false);
//   const [courses, setCourses] = useState<Course[]>([]);
//   const [category, setCategory] = useState("All");

//   useEffect(() => {
//     if (!data) return;

//     const rawCourses = (data?.courses ?? []) as ApiCourseRaw[];

//     let normalized: Course[] = rawCourses.map((rc) => {
//       const normalizedPrice =
//         typeof rc.price === "number" ? rc.price : Number(rc.price ?? 0) || 0;
//       const normalizedEstimated =
//         rc.estimatedPrice !== undefined
//           ? typeof rc.estimatedPrice === "number"
//             ? rc.estimatedPrice
//             : Number(rc.estimatedPrice) || undefined
//           : undefined;

//       let thumbnailUrl = "";
//       if (typeof rc.thumbnail === "string") {
//         thumbnailUrl = rc.thumbnail;
//       } else if (rc.thumbnail && typeof rc.thumbnail === "object" && "url" in rc.thumbnail) {
//         thumbnailUrl = (rc.thumbnail as { url?: string }).url ?? "";
//       }

//       const normalizedCourseData =
//         rc.courseData?.map((cd) => ({
//           _id: cd._id ?? "",
//           title: cd.title ?? "",
//           videoLength:
//             typeof cd.videoLength === "number"
//               ? cd.videoLength
//               : Number(cd.videoLength ?? 0) || 0,
//           videoSection: cd.videoSection ?? "",
//         })) ?? [];

//       return {
//         _id: rc._id ?? "",
//         name: rc.name ?? "Untitled Course",
//         categories: rc.categories ?? "General",
//         description: rc.description,
//         price: normalizedPrice,
//         estimatedPrice: normalizedEstimated,
//         thumbnail: { url: thumbnailUrl },
//         courseData: normalizedCourseData,
//         createdAt: rc.createdAt,
//         updatedAt: rc.updatedAt,
//       };
//     });

//     if (category !== "All") {
//       normalized = normalized.filter((c) => c.categories === category);
//     }

//     if (search) {
//       const q = search.toLowerCase();
//       normalized = normalized.filter((c) => c.name.toLowerCase().includes(q));
//     }

//     setCourses(normalized);
//   }, [data, category, search]);

//   if (isLoading) return <Loader />;

//   return (
//     <>
//       <Header route={route} setRoute={setRoute} open={open} setOpen={setOpen} activeItem={1} />
//       <div className="w-[96%] 800px:w-[85%] m-auto min-h-[70vh]">
//         <Heading
//           title="All course - "
//           description="Elearning is a programming community"
//           keywords="Programming community, coding skills, expert insights, collaboration, growth"
//         />
//         <br />
//         <div className="w-full flex items-center pt-[80px] flex-wrap">
//           <div
//             className={`h-[35px] ${category === "All" ? "bg-[crimson]" : "bg-[#5050cb]"} m-3 px-3 rounded-[30px] flex items-center justify-center font-Poppins cursor-pointer`}
//             onClick={() => setCategory("All")}
//           >
//             All Courses
//           </div>
//         </div>

//         {courses.length === 0 && (
//           <p className={`${styles.label} justify-center min-h-[50vh] flex items-center`}>
//             {search ? "No course found" : "No courses found in this category. Please try another one!"}
//           </p>
//         )}

//         <br />
//         <br />
//         <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] 1500px:grid-cols-4 1500px:gap-[35px] mb-12 border-0">
//           {courses.map((item) => (
//             <CourseCard item={item} key={item._id || item.name} />
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// const Page: React.FC = () => (
//   <Suspense fallback={<Loader />}>
//     <AllCoursesContent />
//   </Suspense>
// );

// export default Page;






"use client";
import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useGetUsersAllCoursesQuery } from "@/redux/features/courses/coursesApi";
import Loader from "../components/Loader/Loader";
import Header from "../components/Header";
import Heading from "../utils/Heading";
import { styles } from "../styles/style";
import CourseCard from "../components/Course/CourseCard";
import Footer from "../components/Footer";

interface Course {
  _id: string;
  name: string;
  categories: string;
  description?: string;
  price: number;
  estimatedPrice?: number;
  thumbnail: { url: string };
  courseData?: Array<{
    _id: string;
    title: string;
    videoLength: number;
    videoSection: string;
  }>;
  createdAt?: string;
  updatedAt?: string;
}

type ApiCourseRaw = {
  _id?: string;
  name?: string;
  categories?: string;
  description?: string;
  price?: number | string;
  estimatedPrice?: number | string;
  thumbnail?: string | { url?: string };
  courseData?: Array<{
    _id?: string;
    title?: string;
    videoLength?: number | string;
    videoSection?: string;
  }>;
  createdAt?: string;
  updatedAt?: string;
};

// 👇 Wraps the inner logic safely inside Suspense
const AllCoursesContent: React.FC = () => {
  const searchParams = useSearchParams();
  const search = searchParams?.get("title") ?? "";
  const { data, isLoading } = useGetUsersAllCoursesQuery(undefined, {});
  const [route, setRoute] = useState("Login");
  const [open, setOpen] = useState(false);
  const [courses, setCourses] = useState<Course[]>([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    if (!data) return;

    const rawCourses = (data?.courses ?? []) as ApiCourseRaw[];

    let normalized: Course[] = rawCourses.map((rc) => {
      const normalizedPrice =
        typeof rc.price === "number" ? rc.price : Number(rc.price ?? 0) || 0;
      const normalizedEstimated =
        rc.estimatedPrice !== undefined
          ? typeof rc.estimatedPrice === "number"
            ? rc.estimatedPrice
            : Number(rc.estimatedPrice) || undefined
          : undefined;

      let thumbnailUrl = "";
      if (typeof rc.thumbnail === "string") {
        thumbnailUrl = rc.thumbnail;
      } else if (rc.thumbnail && typeof rc.thumbnail === "object" && "url" in rc.thumbnail) {
        thumbnailUrl = (rc.thumbnail as { url?: string }).url ?? "";
      }

      const normalizedCourseData =
        rc.courseData?.map((cd) => ({
          _id: cd._id ?? "",
          title: cd.title ?? "",
          videoLength:
            typeof cd.videoLength === "number"
              ? cd.videoLength
              : Number(cd.videoLength ?? 0) || 0,
          videoSection: cd.videoSection ?? "",
        })) ?? [];

      return {
        _id: rc._id ?? "",
        name: rc.name ?? "Untitled Course",
        categories: rc.categories ?? "General",
        description: rc.description,
        price: normalizedPrice,
        estimatedPrice: normalizedEstimated,
        thumbnail: { url: thumbnailUrl },
        courseData: normalizedCourseData,
        createdAt: rc.createdAt,
        updatedAt: rc.updatedAt,
      };
    });

    // Filter by category
    if (category !== "All") {
      normalized = normalized.filter((c) => c.categories === category);
    }

    // Filter by search term
    if (search) {
      const q = search.toLowerCase();
      normalized = normalized.filter((c) => c.name.toLowerCase().includes(q));
    }

    // 🔥 Sort latest courses first (descending order by creation date)
    normalized.sort((a, b) => {
      const dateA = new Date(a.createdAt || 0).getTime();
      const dateB = new Date(b.createdAt || 0).getTime();
      return dateB - dateA; // latest first
    });

    setCourses(normalized);
  }, [data, category, search]);

  if (isLoading) return <Loader />;

  return (
    <>
      <Header route={route} setRoute={setRoute} open={open} setOpen={setOpen} activeItem={1} />
      <div className="w-[96%] 800px:w-[85%] m-auto min-h-[70vh]">
        <Heading
          title="All course - Live English With Sushil"
          description="Live English With Sushil is a Learning Platform."
          keywords="Programming community, coding skills, expert insights, collaboration, growth"
        />
        <br />
        <div className="w-full flex items-center pt-[80px] flex-wrap">
          <div
            className={`h-[35px] ${category === "All" ? "bg-[crimson]" : "bg-[#5050cb]"} m-3 px-3 rounded-[30px] flex items-center justify-center font-Poppins cursor-pointer text-white`}
            onClick={() => setCategory("All")}
          >
            All Courses
          </div>
        </div>

        {courses.length === 0 && (
          <p className={`${styles.label} justify-center min-h-[50vh] flex items-center`}>
            {search ? "No course found" : "No courses found in this category. Please try another one!"}
          </p>
        )}

        <br />
        <br />
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] 1500px:grid-cols-4 1500px:gap-[35px] mb-12 border-0">
          {courses.map((item) => (
            <CourseCard item={item} key={item._id || item.name} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

const Page: React.FC = () => (
  <Suspense fallback={<Loader />}>
    <AllCoursesContent />
  </Suspense>
);

export default Page;

