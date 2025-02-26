<<<<<<< HEAD
import { styles } from "@/app/styles/style";
import CoursePlayer from "@/app/utils/CoursePlayer";
import Ratings from "@/app/utils/Ratings";
import React, { FC } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
=======
import React, { FC } from 'react'
import CoursePlayer from "../../../utils/CoursePlayer"
import { styles } from '@/app/styles/style';
import Ratings from '@/app/utils/Ratings';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
>>>>>>> bc4c904da31581c701dce1b672f7afd58c3668ef

type Props = {
  active: number;
  setActive: (active: number) => void;
  courseData: any;
  handleCourseCreate: any;
  isEdit?: boolean;
<<<<<<< HEAD
};

const CoursePreview: FC<Props> = ({
  courseData,
  handleCourseCreate,
  setActive,
  active,
  isEdit,
}) => {
  const discountPercentenge =
    ((courseData?.estimatedPrice - courseData?.price) /
      courseData?.estimatedPrice) *
    100;

  const discountPercentengePrice = discountPercentenge.toFixed(0);

  const prevButton = () => {
    setActive(active - 1);
  };

  const createCourse = () => {
    handleCourseCreate();
  };

  return (
    <div className="w-[80%] mt-24 py-5 m-auto mb-5">
      <div className="w-full relative">
=======
}

const CoursePreview: FC<Props> = ({
    courseData,
    handleCourseCreate,
    setActive,
    active,
    isEdit,
}) => {

  const discountPercentenge =
  ((courseData?.estimatedPrice - courseData?.price) /
    courseData?.estimatedPrice) *
  100;

const discountPercentengePrice = discountPercentenge.toFixed(0);

const prevButton = () => {
  setActive(active - 1);
};

const createCourse = () => {
  handleCourseCreate();
};



  return (
    <div className="w-[80%] mt-24 py-5 m-auto mb-5">
        <div className="w-full relative">
>>>>>>> bc4c904da31581c701dce1b672f7afd58c3668ef
        <CoursePlayer
          videoUrl={courseData?.demoUrl}
          title={courseData?.title}
        />
      </div>
<<<<<<< HEAD
=======

>>>>>>> bc4c904da31581c701dce1b672f7afd58c3668ef
      <div className="flex items-center">
        <h1 className="pt-5 text-[25px]">
          {courseData?.price === 0 ? "Free" : courseData?.price + "5"}$
        </h1>
        <h5 className="pl-3 text-[20px] mt-2 line-through opacity-80">
          {courseData?.estimatedPrice}$
        </h5>

        <h4 className="pl-5 pt-4 text-[22px]">
          {discountPercentengePrice}% Off
        </h4>
      </div>

      <div className="flex items-center">
        <div
          className={`${styles.button} !w-[180px] my-3 font-Poppins !bg-[crimson] cursor-not-allower`}
        >
          Buy Now {courseData?.price}$
        </div>
      </div>

      <div className="flex items-center">
        <input
          type="text"
          name=""
          id=""
          placeholder="Discount code..."
          className={`${styles.input} 1500px:!w-[50%] 1100px:w-[60%] ml-3 !mt-0`}
        />
        <div
          className={`${styles.button} !w-[120px] my-3 ml-4 font-Poppins cursor-pointer`}
        >
          Apply
        </div>
      </div>
<<<<<<< HEAD
      <p className="pb-1">* Source code included</p>
      <p className="pb-1">* Source code included</p>
      <p className="pb-1">* Source code included</p>
      <p className="pb-1 800px:pb-1">* Source code included</p>

      <div className="w-full">
        <div className="w-full 800px:pr-5">
          <h1 className="text-[25px] font-Poppins font-[600]">
=======

      <p className="pb-1">* Source code included</p>
      <p className="pb-1">* Full life time access</p>
      <p className="pb-1">* Certification of completion</p>
      <p className="pb-1 800px:pb-1">*Premium Support</p>

      <div  className="w-full">
        <div className="w-full 800px:pr-5">
        <h1 className="text-[25px] font-Poppins font-[600]">
>>>>>>> bc4c904da31581c701dce1b672f7afd58c3668ef
            {courseData?.name}
          </h1>
          <div className="flex items-center justify-between pt-3">
            <div className="flex items-center">
              <Ratings rating={0} />
              <h5>0 Reviews</h5>
            </div>
            <h5>0 Students</h5>
          </div>
          <br />
        </div>
<<<<<<< HEAD
        <h1 className="text-[25px] font-Poppins font-[600]">
          What you will learn from this course?
        </h1>
=======

        <h1 className="text-[25px] font-Poppins font-[600]">
          What you will learn from this course?
        </h1>

>>>>>>> bc4c904da31581c701dce1b672f7afd58c3668ef
        {courseData?.benefits?.map((item: any, index: number) => (
          <div className="w-full flex 800px:items-center py-2" key={index}>
            <div className="w-[15px] mr-1">
              <IoIosCheckmarkCircleOutline size={20} />
            </div>
            <p className="pl-2">{item.title}</p>
          </div>
        ))}
<<<<<<< HEAD
        <br />
        <br />
=======

         <br />
        <br />

>>>>>>> bc4c904da31581c701dce1b672f7afd58c3668ef
        <h1 className="text-[25px] font-Poppins font-[600]">
          What are the prerequisites for starting this course?{" "}
        </h1>
        {courseData?.prerequisites?.map((item: any, index: number) => (
          <div className="w-full flex 800px:items-center py-2" key={index}>
            <div className="w-[15px] mr-1">
              <IoIosCheckmarkCircleOutline size={20} />
            </div>
            <p className="pl-2">{item.title}</p>
          </div>
        ))}
        <br />
        <br />
<<<<<<< HEAD
        {/* course description */}
        <div className="w-full">
=======

         {/* course description */}
         <div className="w-full">
>>>>>>> bc4c904da31581c701dce1b672f7afd58c3668ef
          <h1 className="text-[25px] font-Poppins font-[600[">
            Course Details
          </h1>
          <p className="text-[18px] mt-[20px] whitespace-pre-line w-full overflow-hidden">
            {courseData?.description}
          </p>
        </div>
<<<<<<< HEAD
        <br />
        <br />
      </div>
=======

        <br />
        <br />
      </div>

>>>>>>> bc4c904da31581c701dce1b672f7afd58c3668ef
      <div className="w-full flex items-center justify-between">
        <div
          className="w-full 800px:w-[180px] flex items-center justify-center h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer"
          onClick={() => prevButton()}
        >
          Prev
        </div>
        <div
          className="w-full 800px:w-[180px] flex items-center justify-center h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer"
          onClick={() => createCourse()}
        >
          {isEdit ? "Update" : "Create"}
        </div>
      </div>
<<<<<<< HEAD
    </div>
  );
};

export default CoursePreview;
=======

    </div>
  )
}

export default CoursePreview
>>>>>>> bc4c904da31581c701dce1b672f7afd58c3668ef
