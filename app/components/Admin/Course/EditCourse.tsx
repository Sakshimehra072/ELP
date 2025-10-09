"use client";

import React, { useEffect, useState, FC } from "react";
import CourseInformation from "./CourseInformation";
import CourseOptions from "./CourseOptions";
import CourseData from "./CourseData";
import CourseContent from "./CourseContent";
import CoursePreview from "./CoursePreview";

import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { useEditCourseMutation, useGetAllCoursesQuery } from "@/redux/features/courses/coursesApi";
import Loader from "../../Loader/Loader";

type Props = {
  id: string;
};

interface Course {
  _id: string;
  name: string;
  description: string;
  price: string;
  categories: string;
  estimatedPrice?: string;
  tags: string;
  level: string;
  demoUrl: string;
  thumbnail?: { url: string };
  benefits: { title: string }[];
  prerequisites: { title: string }[];
  courseData: {
    videoUrl: string;
    title: string;
    description: string;
    videoSection: string;
    videoLength: string;
    links: { title: string; url: string }[];
    suggestion: string;
  }[];
}

// CHANGE: Added CourseInfo and ChildCourseInfo interfaces to match CreateCourse and handle type compatibility
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

// CHANGE: Added Link and Content interfaces to type state and match CourseContent
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

const EditCourse: FC<Props> = ({ id }) => {
  const [editCourse, { isSuccess, error }] = useEditCourseMutation();
  const { isLoading, data } = useGetAllCoursesQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );

  const editCourseData = data && data.courses.find((i: Course) => i._id === id);

  // const [createCourse, { isLoading, isSuccess, error }] =
  //   useCreateCourseMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Course upadate successfully");

      redirect("/admin/courses");
    }
    // if (error) {
    //   if ("data" in error) {
    //     const errorMessage = error as any;
    //     toast.error(errorMessage.data.message);
    //   }
    // }
     if (error && "data" in error) {
      const errorMessage = error as { data: { message: string } };
      toast.error(errorMessage.data.message);
    }
  }, [isLoading, isSuccess, error]);

  const [active, setActive] = useState(0);

  // CHANGE: Explicitly typed state as CourseInfo to match parent expectations
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
  // CHANGE: Typed as Content[] to match CourseContent expectation
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

  // CHANGE: Added updateCourseInfo wrapper function to merge partial child updates while preserving categories
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

  useEffect(() => {
    if (editCourseData) {
      setCourseInfo({
        name: editCourseData.name,
        description: editCourseData.description,
        price: editCourseData.price,
        categories: editCourseData.categories,
        estimatedPrice: editCourseData?.estimatedPrice,
        tags: editCourseData.tags,
        level: editCourseData.level,
        demoUrl: editCourseData.demoUrl,
        thumbnail: editCourseData?.thumbnail?.url,
      });
      setBenefits(editCourseData.benefits);
      setPrerequisites(editCourseData.prerequisites);
      // CHANGE: Transform API data to match Content[] (parse videoLength string to number, add optional suggestion if missing)
      setCourseContentData(
        editCourseData.courseData.map((item: Course['courseData'][0]) => ({
          ...item,
          videoLength: item.videoLength ? Number(item.videoLength) : undefined,
          suggestion: item.suggestion || '',
        }))
      );
    }
  }, [editCourseData]);

  console.log(courseData)
  const handleSubmit = async () => {
    //format benefits array
    const formattedBenefits = benefits.map((benefit) => ({
      title: benefit.title,
    }));
    //format prerequisites array
    const formattedPrerequisites = prerequisites.map((prerequisite) => ({
      title: prerequisite.title,
    }));
    // format course content array
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

    // prepare our data object
    const data = {  
      name: courseInfo.name,
      description: courseInfo.description,
      price: courseInfo.price,
      estimatedPrice: courseInfo.estimatedPrice,
      tags: courseInfo.tags,
      thumbnail: courseInfo.thumbnail,
      level: courseInfo.level,
      demoUrl: courseInfo.demoUrl,
      categories: courseInfo.categories,
      totalVideos: courseContentData.length,
      benefits: formattedBenefits,
      prerequisites: formattedPrerequisites,
      courseData: formattedCourseContentData,
    };
    setCourseData(data);
  };

  const handleCourseCreate = async () => {
    const data = courseData;

    if (!isLoading) {
      // console.log(data);
      await editCourse({ id: editCourseData?._id, data });
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full flex min-h-screen">
          <div className="w-[80%]">
            {active === 0 && (
              <CourseInformation
                courseInfo={courseInfo}
                // CHANGE: Use updateCourseInfo wrapper to pass compatible type to child (handles missing categories)
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
                isEdit={true}
              />
            )}
          </div>
          <div className="w-[20%] mt-[100px] h-screen fixed z-[-1] top-18 right-0">
            <CourseOptions active={active} />
          </div>
        </div>
      )}
    </>
  );
};

export default EditCourse;