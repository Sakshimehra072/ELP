// "use client";
// import { useGetUsersAllCoursesQuery } from "@/redux/features/courses/coursesApi";
// import { useSearchParams } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import Loader from "../components/Loader/Loader";
// import Header from "../components/Header";
// import Heading from "../utils/Heading";
// import { styles } from "../styles/style";
// import CourseCard from "../components/Course/CourseCard";
// import Footer from "../components/Footer";

// // interface Course {
// //   _id: string;
// //   name: string;
// //   categories: string;
// //   [key: string]: any; 
// // }

// interface Course {
//   _id: string;
//   name: string;
//   categories: string;
//   description?: string;
//   price?: number;
//   thumbnail?: string;
//   createdAt?: string;
//   updatedAt?: string;
// }


// const Page = () => {
//   const searchParams = useSearchParams();
//   const search = searchParams?.get("title");
//   const { data, isLoading } = useGetUsersAllCoursesQuery(undefined, {});
//   // const { data: categoriesData } = useGetHeroDataQuery("Categories", {});
//   const [route, setRoute] = useState("Login");
//   const [open, setOpen] = useState(false);
//   const [courses, setCourses] = useState<Course[]>([]);
//   const [category, setCategory] = useState("All");

//   useEffect(() => {
//     let filteredCourses = data?.courses || [];
    
//     if (category !== "All") {
//       filteredCourses = filteredCourses.filter((item: Course) => item.categories === category);
//     }

//     if (search) {
//       filteredCourses = filteredCourses.filter((item: Course) =>
//         item.name.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     setCourses(filteredCourses);
//   }, [data, category, search]);

//   return (
//     <div>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <>
//           <Header route={route} setRoute={setRoute} open={open} setOpen={setOpen} activeItem={1} />
//           <div className="w-[96%] 800px:w-[85%] m-auto min-h-[70vh]">
//             <Heading
//               title="All course - ELearning"
//               description="Elearning is a programming community"
//               keywords="Programming community, coding skills, expert insights, collaboration, growth"
//             />
//             <br />
//             <div className="w-full flex items-center pt-[80px] flex-wrap">
//               <div
//                 className={`h-[35px] ${category === "All" ? "bg-[crimson]" : "bg-[#5050cb]"} m-3 px-3 rounded-[30px] flex items-center justify-center font-Poppins cursor-pointer`}
//                 onClick={() => setCategory("All")}
//               >
//                 All Courses
//               </div>
      
//             </div>
//             {courses.length === 0 && (
//               <p className={`${styles.label} justify-center min-h-[50vh] flex items-center`}>
//                 {search ? "No course found" : "No courses found in this category. Please try another one!"}
//               </p>
//             )}
//             <br /><br />
//             <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] 1500px:grid-cols-4 1500px:gap-[35px] mb-12 border-0">
//               {courses.map((item: Course, index: number) => (
//                 <CourseCard item={item} key={index} />
//               ))}
//             </div>
//           </div>
//           <Footer />
//         </>
//       )}
//     </div>
//   );
// };
// export default Page;





// "use client";
// import { useGetUsersAllCoursesQuery } from "@/redux/features/courses/coursesApi";
// import { useSearchParams } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import Loader from "../components/Loader/Loader";
// import Header from "../components/Header";
// import Heading from "../utils/Heading";
// import { styles } from "../styles/style";
// import CourseCard from "../components/Course/CourseCard";
// import Footer from "../components/Footer";

// // interface Course {
// //   _id: string;
// //   name: string;
// //   categories: string;
// //   [key: string]: any;
// // }

// interface RawCourse {
//   _id: string;
//   name: string;
//   categories: string;
//   description?: string;
//   price: number;
//   thumbnail?: string;
//   createdAt?: string;
//   updatedAt?: string;
// }

// interface Course {
//   _id: string;
//   name: string;
//   categories: string;
//   description?: string;
//   price: number;
//   thumbnail: { url: string };
//   createdAt?: string;
//   updatedAt?: string;
// }


// const Page = () => {
//   const searchParams = useSearchParams();
//   const search = searchParams?.get("title");
//   const { data, isLoading } = useGetUsersAllCoursesQuery(undefined, {});
//   // const { data: categoriesData } = useGetHeroDataQuery("Categories", {});
//   const [route, setRoute] = useState("Login");
//   const [open, setOpen] = useState(false);
//   const [courses, setCourses] = useState<Course[]>([]);
//   const [category, setCategory] = useState("All");

//   useEffect(() => {
//     let filteredCourses: RawCourse[] = data?.courses || [];
    
//     if (category !== "All") {
//       filteredCourses = filteredCourses.filter((item: RawCourse) => item.categories === category);
//     }

//     if (search) {
//       filteredCourses = filteredCourses.filter((item: RawCourse) =>
//         item.name.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     const transformedCourses: Course[] = filteredCourses.map((item: RawCourse) => ({
//       ...item,
//       thumbnail: { url: item.thumbnail || '' }
//     }));

//     setCourses(transformedCourses);
//   }, [data, category, search]);

//   return (
//     <div>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <>
//           <Header route={route} setRoute={setRoute} open={open} setOpen={setOpen} activeItem={1} />
//           <div className="w-[96%] 800px:w-[85%] m-auto min-h-[70vh]">
//             <Heading
//               title="All course - ELearning"
//               description="Elearning is a programming community"
//               keywords="Programming community, coding skills, expert insights, collaboration, growth"
//             />
//             <br />
//             <div className="w-full flex items-center pt-[80px] flex-wrap">
//               <div
//                 className={`h-[35px] ${category === "All" ? "bg-[crimson]" : "bg-[#5050cb]"} m-3 px-3 rounded-[30px] flex items-center justify-center font-Poppins cursor-pointer`}
//                 onClick={() => setCategory("All")}
//               >
//                 All Courses
//               </div>
      
//             </div>
//             {courses.length === 0 && (
//               <p className={`${styles.label} justify-center min-h-[50vh] flex items-center`}>
//                 {search ? "No course found" : "No courses found in this category. Please try another one!"}
//               </p>
//             )}
//             <br /><br />
//             <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] 1500px:grid-cols-4 1500px:gap-[35px] mb-12 border-0">
//               {courses.map((item: Course, index: number) => (
//                 <CourseCard item={item} key={index} />
//               ))}
//             </div>
//           </div>
//           <Footer />
//         </>
//       )}
//     </div>
//   );
// };

// export default Page;



// // "use client";
// // import { useGetUsersAllCoursesQuery } from "@/redux/features/courses/coursesApi";
// // import { useSearchParams } from "next/navigation";
// // import React, { useEffect, useState, Suspense } from "react";
// // import Loader from "../components/Loader/Loader";
// // import Header from "../components/Header";
// // import Heading from "../utils/Heading";
// // import { styles } from "../styles/style";
// // import CourseCard from "../components/Course/CourseCard";
// // import Footer from "../components/Footer";

// // interface RawCourse {
// //   _id: string;
// //   name: string;
// //   categories: string;
// //   description?: string;
// //   price: number;
// //   thumbnail?: string;
// //   createdAt?: string;
// //   updatedAt?: string;
// // }

// // interface Course {
// //   _id: string;
// //   name: string;
// //   categories: string;
// //   description?: string;
// //   price: number;
// //   thumbnail: { url: string };
// //   createdAt?: string;
// //   updatedAt?: string;
// // }

// // // Separate inner component so it can safely use useSearchParams inside Suspense
// // const CoursesContent = () => {
// //   const searchParams = useSearchParams();
// //   const search = searchParams?.get("title");

// //   const { data, isLoading } = useGetUsersAllCoursesQuery(undefined, {});
// //   const [route, setRoute] = useState("Login");
// //   const [open, setOpen] = useState(false);
// //   const [courses, setCourses] = useState<Course[]>([]);
// //   const [category, setCategory] = useState("All");

// //   useEffect(() => {
// //     let filteredCourses: RawCourse[] = data?.courses || [];

// //     if (category !== "All") {
// //       filteredCourses = filteredCourses.filter(
// //         (item: RawCourse) => item.categories === category
// //       );
// //     }

// //     if (search) {
// //       filteredCourses = filteredCourses.filter((item: RawCourse) =>
// //         item.name.toLowerCase().includes(search.toLowerCase())
// //       );
// //     }

// //     const transformedCourses: Course[] = filteredCourses.map((item: RawCourse) => ({
// //       ...item,
// //       thumbnail: { url: item.thumbnail || "" },
// //     }));

// //     setCourses(transformedCourses);
// //   }, [data, category, search]);

// //   if (isLoading) return <Loader />;

// //   return (
// //     <>
// //       <Header
// //         route={route}
// //         setRoute={setRoute}
// //         open={open}
// //         setOpen={setOpen}
// //         activeItem={1}
// //       />
// //       <div className="w-[96%] 800px:w-[85%] m-auto min-h-[70vh]">
// //         <Heading
// //           title="All course - ELearning"
// //           description="Elearning is a programming community"
// //           keywords="Programming community, coding skills, expert insights, collaboration, growth"
// //         />
// //         <br />
// //         <div className="w-full flex items-center pt-[80px] flex-wrap">
// //           <div
// //             className={`h-[35px] ${
// //               category === "All" ? "bg-[crimson]" : "bg-[#5050cb]"
// //             } m-3 px-3 rounded-[30px] flex items-center justify-center font-Poppins cursor-pointer`}
// //             onClick={() => setCategory("All")}
// //           >
// //             All Courses
// //           </div>
// //         </div>

// //         {courses.length === 0 && (
// //           <p
// //             className={`${styles.label} justify-center min-h-[50vh] flex items-center`}
// //           >
// //             {search
// //               ? "No course found"
// //               : "No courses found in this category. Please try another one!"}
// //           </p>
// //         )}

// //         <br />
// //         <br />
// //         <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] 1500px:grid-cols-4 1500px:gap-[35px] mb-12 border-0">
// //           {courses.map((item: Course, index: number) => (
// //             <CourseCard item={item} key={index} />
// //           ))}
// //         </div>
// //       </div>
// //       <Footer />
// //     </>
// //   );
// // };

// // const Page = () => {
// //   return (
// //     <Suspense fallback={<Loader />}>
// //       <CoursesContent />
// //     </Suspense>
// //   );
// // };

// // export default Page;




// "use client";
// import { useGetUsersAllCoursesQuery } from "@/redux/features/courses/coursesApi";
// import { useSearchParams } from "next/navigation";
// import React, { useEffect, useState, Suspense } from "react";
// import Loader from "../components/Loader/Loader";
// import Header from "../components/Header";
// import Heading from "../utils/Heading";
// import { styles } from "../styles/style";
// import CourseCard from "../components/Course/CourseCard";
// import Footer from "../components/Footer";

// interface RawCourse {
//   _id: string;
//   name: string;
//   categories: string;
//   description?: string;
//   price: number;
//   thumbnail?: string; // raw API may return just string
//   createdAt?: string;
//   updatedAt?: string;
// }

// interface Course {
//   _id: string;
//   name: string;
//   categories: string;
//   description?: string;
//   price: number;
//   thumbnail: { url: string }; // normalized
//   createdAt?: string;
//   updatedAt?: string;
// }

// // Inner content wrapped in Suspense to allow useSearchParams
// const CoursesContent: React.FC = () => {
//   const searchParams = useSearchParams();
//   const search = searchParams?.get("title");

//   const { data, isLoading } = useGetUsersAllCoursesQuery(undefined);
//   const [route, setRoute] = useState("Login");
//   const [open, setOpen] = useState(false);
//   const [courses, setCourses] = useState<Course[]>([]);
//   const [category, setCategory] = useState("All");

//   useEffect(() => {
//     let filteredCourses: RawCourse[] = data?.courses || [];

//     // Filter by category
//     if (category !== "All") {
//       filteredCourses = filteredCourses.filter(
//         (item) => item.categories === category
//       );
//     }
    
//     // Filter by search query
//     if (search) {
//       filteredCourses = filteredCourses.filter((item) =>
//         item.name.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     // Normalize thumbnail into { url: string }
//     const transformedCourses: Course[] = filteredCourses.map((item) => ({
//       ...item,
//       thumbnail: {
//         url: item.thumbnail
//           ? item.thumbnail
//             ? item.thumbnail
//             : `${process.env.NEXT_PUBLIC_BASE_URL || ""}/${item.thumbnail}`
//           : "/default-course.png", // fallback image
//       },
//     }));

//     setCourses(transformedCourses);
//   }, [data, category, search]);

//   if (isLoading) return <Loader />;

//   return (
//     <>
//       <Header
//         route={route}
//         setRoute={setRoute}
//         open={open}
//         setOpen={setOpen}
//         activeItem={1}
//       />

//       <div className="w-[96%] 800px:w-[85%] m-auto min-h-[70vh]">
//         <Heading
//           title="All Courses - ELearning"
//           description="Elearning is a programming community"
//           keywords="Programming community, coding skills, expert insights, collaboration, growth"
//         />

//         {/* Category Selector */}
//         <div className="w-full flex items-center pt-[80px] flex-wrap">
//           <div
//             className={`h-[35px] ${
//               category === "All" ? "bg-[crimson]" : "bg-[#5050cb]"
//             } m-3 px-3 rounded-[30px] flex items-center justify-center font-Poppins cursor-pointer text-white`}
//             onClick={() => setCategory("All")}
//           >
//             All Courses
//           </div>
//         </div>

//         {/* No courses message */}
//         {courses.length === 0 && (
//           <p
//             className={`${styles.label} justify-center min-h-[50vh] flex items-center`}
//           >
//             {search
//               ? "No course found"
//               : "No courses found in this category. Please try another one!"}
//           </p>
//         )}

//         {/* Course Grid */}
//         <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] 1500px:grid-cols-4 1500px:gap-[35px] mb-12 border-0">
//           {courses.map((item) => (
//             <CourseCard item={item} key={item._id} />
//           ))}
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// // Main Page with Suspense
// const Page: React.FC = () => {
//   return (
//     <Suspense fallback={<Loader />}>
//       <CoursesContent />
//     </Suspense>
//   );
// };

// export default Page;





// =========================================================================================


// "use client";
// import React, { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import { useGetUsersAllCoursesQuery } from "@/redux/features/courses/coursesApi";
// import Loader from "../components/Loader/Loader";
// import Header from "../components/Header";
// import Heading from "../utils/Heading";
// import { styles } from "../styles/style";
// import CourseCard from "../components/Course/CourseCard";
// import Footer from "../components/Footer";

// /**
//  * Final normalized Course type (matches CourseCard's CourseItem)
//  */
// interface Course {
//   _id: string;
//   name: string;
//   categories: string;
//   description?: string;
//   price: number; // required number (was optional in original)
//   estimatedPrice?: number;
//   thumbnail: { url: string }; // matches CourseCard
//   courseData?: Array<{
//     _id: string;
//     title: string;
//     videoLength: number;
//     videoSection: string;
//   }>;
//   createdAt?: string;
//   updatedAt?: string;
// }

// /**
//  * Raw API shape (fields optional / can be string | number).
//  * No `any` used — fields are typed permissively.
//  */
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

// const Page: React.FC = () => {
//   const searchParams = useSearchParams();
//   const search = searchParams?.get("title") ?? "";
//   const { data, isLoading } = useGetUsersAllCoursesQuery(undefined, {});
//   const [route, setRoute] = useState("Login");
//   const [open, setOpen] = useState(false);
//   const [courses, setCourses] = useState<Course[]>([]);
//   const [category, setCategory] = useState("All");

//   useEffect(() => {
//     // Safely read raw API array and cast to ApiCourseRaw[]
//     const rawCourses = (data?.courses ?? []) as ApiCourseRaw[];

//     // Normalize every incoming record into our strict `Course` shape
//     let normalized: Course[] = rawCourses.map((rc) => {
//       // Normalize price & estimatedPrice to numbers (default 0 or undefined)
//       const normalizedPrice =
//         typeof rc.price === "number" ? rc.price : Number(rc.price ?? 0) || 0;
//       const normalizedEstimated =
//         rc.estimatedPrice !== undefined
//           ? typeof rc.estimatedPrice === "number"
//             ? rc.estimatedPrice
//             : Number(rc.estimatedPrice) || undefined
//           : undefined;

//       // Normalize thumbnail: if API gives a string, wrap it; if object, read url; else empty string
//       let thumbnailUrl = "";
//       if (typeof rc.thumbnail === "string") {
//         thumbnailUrl = rc.thumbnail;
//       } else if (rc.thumbnail && typeof rc.thumbnail === "object" && "url" in rc.thumbnail) {
//         thumbnailUrl = (rc.thumbnail as { url?: string }).url ?? "";
//       }

//       // Normalize courseData array
//       const normalizedCourseData =
//         rc.courseData?.map((cd) => ({
//           _id: cd._id ?? "",
//           title: cd.title ?? "",
//           videoLength:
//             typeof cd.videoLength === "number" ? cd.videoLength : Number(cd.videoLength ?? 0) || 0,
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

//     // Keep your existing logic: filter by category and search (unchanged)
//     if (category !== "All") {
//       normalized = normalized.filter((c) => c.categories === category);
//     }

//     if (search) {
//       const q = search.toLowerCase();
//       normalized = normalized.filter((c) => c.name.toLowerCase().includes(q));
//     }

//     setCourses(normalized);
//   }, [data, category, search]);

//   return (
//     <div>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <>
//           <Header route={route} setRoute={setRoute} open={open} setOpen={setOpen} activeItem={1} />
//           <div className="w-[96%] 800px:w-[85%] m-auto min-h-[70vh]">
//             <Heading
//               title="All course - ELearning"
//               description="Elearning is a programming community"
//               keywords="Programming community, coding skills, expert insights, collaboration, growth"
//             />
//             <br />
//             <div className="w-full flex items-center pt-[80px] flex-wrap">
//               <div
//                 className={`h-[35px] ${category === "All" ? "bg-[crimson]" : "bg-[#5050cb]"} m-3 px-3 rounded-[30px] flex items-center justify-center font-Poppins cursor-pointer`}
//                 onClick={() => setCategory("All")}
//               >
//                 All Courses
//               </div>
//             </div>

//             {courses.length === 0 && (
//               <p className={`${styles.label} justify-center min-h-[50vh] flex items-center`}>
//                 {search ? "No course found" : "No courses found in this category. Please try another one!"}
//               </p>
//             )}

//             <br />
//             <br />
//             <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] 1500px:grid-cols-4 1500px:gap-[35px] mb-12 border-0">
//               {courses.map((item) => (
//                 <CourseCard item={item} key={item._id || item.name} />
//               ))}
//             </div>
//           </div>
//           <Footer />
//         </>
//       )}
//     </div>
//   );
// };

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

    if (category !== "All") {
      normalized = normalized.filter((c) => c.categories === category);
    }

    if (search) {
      const q = search.toLowerCase();
      normalized = normalized.filter((c) => c.name.toLowerCase().includes(q));
    }

    setCourses(normalized);
  }, [data, category, search]);

  if (isLoading) return <Loader />;

  return (
    <>
      <Header route={route} setRoute={setRoute} open={open} setOpen={setOpen} activeItem={1} />
      <div className="w-[96%] 800px:w-[85%] m-auto min-h-[70vh]">
        <Heading
          title="All course - ELearning"
          description="Elearning is a programming community"
          keywords="Programming community, coding skills, expert insights, collaboration, growth"
        />
        <br />
        <div className="w-full flex items-center pt-[80px] flex-wrap">
          <div
            className={`h-[35px] ${category === "All" ? "bg-[crimson]" : "bg-[#5050cb]"} m-3 px-3 rounded-[30px] flex items-center justify-center font-Poppins cursor-pointer`}
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


