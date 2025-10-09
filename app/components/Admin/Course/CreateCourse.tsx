// "use client";

// import { useEffect, useState } from "react";
// import CourseInformation from "./CourseInformation"
// import CourseData from "./CourseData"
// import CourseContent from "./CourseContent"
// import CoursePreview from "./CoursePreview"
// import { useCreateCourseMutation } from "@/redux/features/courses/coursesApi";
// import toast from "react-hot-toast";
// import { redirect } from "next/navigation";
// import CourseOptions from "./CourseOptions";
// import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

// const CreateCourse = () => {
//     const [createCourse, {isLoading, isSuccess, error}] = useCreateCourseMutation();

//     useEffect(() => {
//       if (isSuccess) {
//         toast.success("Course success successfully");
  
//         redirect("/admin/courses");
//       }
//       // if (error) {
//       //   if ("data" in error) {
//       //     const errorMessage = error as any;
//       //     toast.error(errorMessage.data.message);
//       //   }
//       // }
      
//        if (error) {
//     if ("data" in (error as FetchBaseQueryError)) {
//       const err = error as FetchBaseQueryError & { data?: { message?: string } };
//       toast.error(err.data?.message || "Something went wrong");
//     } else {
//       toast.error("An unexpected error occurred");
//     }
//   }

//     }, [isLoading, isSuccess, error]);

//     const [active, setActive] = useState(0);
//     const [courseInfo, setCourseInfo] = useState({
//         name: "",
//         description: "",
//         categories: "",
//         price: "",
//         estimatedPrice: "",
//         tags: "",
//         level: "",
//         demoUrl: "",
//         thumbnail: "",
//       });
//       const [benefits, setBenefits] = useState([{ title: "" }]);
//       const [prerequisites, setPrerequisites] = useState([{ title: "" }]); 
//       const [courseContentData, setCourseContentData] = useState([
//         {
//           videoUrl: "",
//           title: "",
//           description: "",
//           videoSection: "Untitled Section",
//           videoLength: "",
//           links: [
//             {
//               title: "",
//               url: "",
//             },
//           ],
//           suggestion: "",
//         },
//       ]);
//       const [courseData, setCourseData] = useState({});

//       const handleSubmit = async () => {
//         //format benefits array
//         const formattedBenefits = benefits.map((benefit) => ({
//           title: benefit.title,
//         }));
//         //format prerequisites array
//         const formattedPrerequisites = prerequisites.map((prerequisite) => ({
//           title: prerequisite.title,
//         }));
//         // format course content array
//         const formattedCourseContentData = courseContentData.map(
//           (courseContent) => ({
//             videoUrl: courseContent.videoUrl,
//             title: courseContent.title,
//             description: courseContent.description,
//             videoLength: courseContent.videoLength,
//             videoSection: courseContent.videoSection,
//             links: courseContent.links.map((link) => ({
//               title: link.title,
//               url: link.url,
//             })),
//             suggestion: courseContent.suggestion,
//           })
//         );

//          // prepare our data object
//           const data = {
//             name: courseInfo.name,
//             description: courseInfo.description,
//             price: courseInfo.price,
//             estimatedPrice: courseInfo.estimatedPrice,
//             tags: courseInfo.tags,
//             thumbnail: courseInfo.thumbnail,

//     //         thumbnail: typeof courseInfo.thumbnail === "string"
//     // ? { url: courseInfo.thumbnail } // fallback if it's only base64
//     // : courseInfo.thumbnail,

//             level: courseInfo.level,
//             demoUrl: courseInfo.demoUrl,
//             categories: courseInfo.categories,
//             totalVideos: courseContentData.length,
//             benefits: formattedBenefits,
//             prerequisites: formattedPrerequisites,
//             courseData: formattedCourseContentData,
//           };
//           setCourseData(data);
//     }
    

        
//   const handleCourseCreate = async () => {
//     const data = courseData;

//     if (!isLoading) {
//       await createCourse(data);
//     }
//   };

 
//   return (
//     <div className="w-full flex min-h-screen">
//         <div  className="w-[80%]">
//         {active === 0 && (
//           <CourseInformation
//             courseInfo={courseInfo}
//             setCourseInfo={setCourseInfo}
//             active={active}
//             setActive={setActive}
//           />
//         )}
//         {active === 1 && (
//           <CourseData
//             benefits={benefits}
//             setBenefits={setBenefits}
//             prerequisites={prerequisites}
//             setPrerequisites={setPrerequisites}
//             active={active}
//             setActive={setActive}
//           />
//         )}
//         {active === 2 && (
//           <CourseContent
//             active={active}
//             setActive={setActive}
//             courseContentData={courseContentData}
//             setCourseContentData={setCourseContentData}
//             handleSubmit={handleSubmit}
//           />
//         )}
//         {active === 3 && (
//           <CoursePreview
//             active={active}
//             setActive={setActive}
//             courseData={courseData}
//             handleCourseCreate={handleCourseCreate}
//           />
//         )}

//         </div>
//         <div className="w-[20%] mt-[100px] h-screen fixed z-[-1] top-18 right-0">
//         <CourseOptions active={active} setActive={setActive} />
//       </div>


//     </div>
//   )
// }  

// export default CreateCourse


// =======================================================================


"use client";

import { useEffect, useState } from "react";
import CourseInformation from "./CourseInformation"
import CourseData from "./CourseData"
import CourseContent from "./CourseContent"
import CoursePreview from "./CoursePreview"
import { useCreateCourseMutation } from "@/redux/features/courses/coursesApi";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
import CourseOptions from "./CourseOptions";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

interface CourseInfo {
  name: string;
  description: string;
  categories: string;
  price: string;
  estimatedPrice: string;
  tags: string;
  level: string;
  demoUrl: string;
  thumbnail: string;
}

interface ChildCourseInfo {
  name: string;
  description: string;
  price: string | number;
  estimatedPrice?: string | number;
  tags: string;
  level: string;
  demoUrl: string;
  thumbnail?: string | ArrayBuffer | null;
}

interface Link {
  title: string;
  url: string;
}

interface Content {
  videoUrl: string;
  title: string;
  description: string;
  videoSection: string;
  videoLength?: number;
  links: Link[];
  suggestion?: string;
}

const CreateCourse = () => {
    const [createCourse, {isLoading, isSuccess, error}] = useCreateCourseMutation();

    useEffect(() => {
      if (isSuccess) {
        toast.success("Course success successfully");
        redirect("/admin/courses");
      }
      // if (error) {
      //   if ("data" in error) {
      //     const errorMessage = error as any;
      //     toast.error(errorMessage.data.message);
      //   }
      // }
      
       if (error) {
    if ("data" in (error as FetchBaseQueryError)) {
      const err = error as FetchBaseQueryError & { data?: { message?: string } };
      toast.error(err.data?.message || "Something went wrong");
    } else {
      toast.error("An unexpected error occurred");
    }
  }

    }, [isLoading, isSuccess, error]);

    const [active, setActive] = useState(0);
    const [courseInfo, setCourseInfo] = useState<CourseInfo>({
        name: "",
        description: "",
        categories: "",
        price: "",
        estimatedPrice: "",
        tags: "",
        level: "",
        demoUrl: "",
        thumbnail: "",
      });
      const [benefits, setBenefits] = useState([{ title: "" }]);
      const [prerequisites, setPrerequisites] = useState([{ title: "" }]); 
      const [courseContentData, setCourseContentData] = useState<Content[]>([
        {
          videoUrl: "",
          title: "",
          description: "",
          videoSection: "Untitled Section",
          videoLength: undefined,
          links: [
            {
              title: "",
              url: "",
            },
          ],
          suggestion: "",
        },
      ]);
      const [courseData, setCourseData] = useState({});

      const updateCourseInfo = (updatedInfo: ChildCourseInfo) => {
        setCourseInfo((prev: CourseInfo) => ({ 
          ...prev, 
          ...updatedInfo,
          price: String(updatedInfo.price),
          estimatedPrice: updatedInfo.estimatedPrice !== undefined ? String(updatedInfo.estimatedPrice) : prev.estimatedPrice,
          thumbnail: updatedInfo.thumbnail !== undefined 
            ? (typeof updatedInfo.thumbnail === 'string' 
                ? updatedInfo.thumbnail 
                : (updatedInfo.thumbnail as ArrayBuffer)?.toString() || prev.thumbnail)
            : prev.thumbnail,
        }));
      };

      const handleSubmit = async () => {
        const formattedBenefits = benefits.map((benefit) => ({
          title: benefit.title,
        }));
        const formattedPrerequisites = prerequisites.map((prerequisite) => ({
          title: prerequisite.title,
        }));
        const formattedCourseContentData = courseContentData.map(
          (courseContent) => ({
            videoUrl: courseContent.videoUrl,
            title: courseContent.title,
            description: courseContent.description,
            videoLength: courseContent.videoLength !== undefined ? String(courseContent.videoLength) : undefined,
            videoSection: courseContent.videoSection,
            links: courseContent.links.map((link) => ({
              title: link.title,
              url: link.url,
            })),
            suggestion: courseContent.suggestion,
          })
        );

         const data = {
            name: courseInfo.name,
            description: courseInfo.description,
            price: courseInfo.price,
            estimatedPrice: courseInfo.estimatedPrice,
            tags: courseInfo.tags,
            thumbnail: courseInfo.thumbnail,

    //         thumbnail: typeof courseInfo.thumbnail === "string"
    // ? { url: courseInfo.thumbnail } // fallback if it's only base64
    // : courseInfo.thumbnail,

            level: courseInfo.level,
            demoUrl: courseInfo.demoUrl,
            categories: courseInfo.categories,
            totalVideos: courseContentData.length,
            benefits: formattedBenefits,
            prerequisites: formattedPrerequisites,
            courseData: formattedCourseContentData,
          };
          setCourseData(data);
    }
    

        
  const handleCourseCreate = async () => {
    const data = courseData;
  

    if (!isLoading) {
      await createCourse(data);
    }
  };

 
  return (
    <div className="w-full flex min-h-screen">
        <div  className="w-[80%]">
        {active === 0 && (
          <CourseInformation
            courseInfo={courseInfo}
            setCourseInfo={updateCourseInfo}
            active={active}
            setActive={setActive}
          />
        )}
        {active === 1 && (
          <CourseData
            benefits={benefits}
            setBenefits={setBenefits}
            prerequisites={prerequisites}
            setPrerequisites={setPrerequisites}
            active={active}
            setActive={setActive}
          />
        )}
        {active === 2 && (
          <CourseContent
            active={active}
            setActive={setActive}
            courseContentData={courseContentData}
            setCourseContentData={setCourseContentData}
            handleSubmit={handleSubmit}
          />
        )}
        {active === 3 && (
          <CoursePreview
            active={active}
            setActive={setActive}
            courseData={courseData}
            handleCourseCreate={handleCourseCreate}
          />
        )}

        </div>
        <div className="w-[20%] mt-[100px] h-screen fixed z-[-1] top-18 right-0">
        <CourseOptions active={active} />
      </div>
    </div>
  )
} 

export default CreateCourse