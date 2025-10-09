import { styles } from '@/app/styles/style';
import CoursePlayer from "@/app/utils/CoursePlayer";
import Ratings from "@/app/utils/Ratings";
import React, { FC } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

interface CourseData {
  title?: string;
  name?: string;
  description?: string;
  demoUrl?: string;
  price?: number;
  estimatedPrice?: number;
  benefits?: { title: string }[];
  prerequisites?: { title: string }[];
}

type Props = {
  active: number;
  setActive: (active: number) => void;
  courseData: Partial<CourseData>; 
  handleCourseCreate:() => void; 
  isEdit?: boolean;
};

const CoursePreview: FC<Props> = ({
  courseData,
  handleCourseCreate,
  setActive,
  active,
  isEdit,
}) => {
  // CHANGE: Extracted price and estimatedPrice with nullish coalescing to ensure number types and fix undefined access in calculation
  const price = courseData.price ?? 0;
  const estimatedPrice = courseData.estimatedPrice ?? 0;

  const discountPercentenge =
    ((estimatedPrice - price) / (estimatedPrice || 1)) * 100;

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
        <CoursePlayer
          videoUrl={courseData?.demoUrl || ''}
          title={courseData?.title || courseData?.name || ''}
        />
      </div>
      <div className="flex items-center">
        <h1 className="pt-5 text-[25px]">
          {price === 0 ? "Free" : price + " "}Rs
        </h1>
        <h5 className="pl-3 text-[20px] mt-2 line-through opacity-80">
          {estimatedPrice + " "}Rs
        </h5>

        <h4 className="pl-5 pt-4 text-[22px]">
          {discountPercentengePrice}% Off
        </h4>
      </div>

      <div className="flex items-center">
        <div
          className={`${styles.button} !w-[180px] my-3 font-Poppins !bg-[crimson] cursor-not-allower`}
        >
          Buy Now {price}Rs
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
      <p className="pb-1">* Source code included</p>
      <p className="pb-1">* Source code included</p>
      <p className="pb-1">* Source code included</p>
      <p className="pb-1 800px:pb-1">* Source code included</p>

      <div className="w-full">
        <div className="w-full 800px:pr-5">
          <h1 className="text-[25px] font-Poppins font-[600]">
            {courseData?.name || ''}
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
        <h1 className="text-[25px] font-Poppins font-[600]">
          What you will learn from this course?
        </h1>
        
        {courseData?.benefits?.map((item: { title: string }, index: number) => (
          <div className="w-full flex 800px:items-center py-2" key={index}>
            <div className="w-[15px] mr-1">
              <IoIosCheckmarkCircleOutline size={20} />
            </div>
            <p className="pl-2">{item.title}</p>
          </div>
        ))}
        <br />
        <br />
        <h1 className="text-[25px] font-Poppins font-[600]">
          What are the prerequisites for starting this course?{" "}
        </h1>
        {courseData?.prerequisites?.map((item: { title: string }, index: number) => (
          <div className="w-full flex 800px:items-center py-2" key={index}>
            <div className="w-[15px] mr-1">
              <IoIosCheckmarkCircleOutline size={20} />
            </div>
            <p className="pl-2">{item.title}</p>
          </div>
        ))}
        <br />
        <br />
        {/* course description */}
        <div className="w-full">
          <h1 className="text-[25px] font-Poppins font-[600]">Course Details</h1>
          <p className="text-[18px] mt-[20px] whitespace-pre-line w-full overflow-hidden">
            {courseData?.description || ''}
          </p>
        </div>
        <br />
        <br />
      </div>
      <div className="w-full flex items-center justify-between">
        <div
          className="w-full 800px:w-[180px] flex items-center justify-center h-[40px] bg-[#1a1b1a] text-center text-[#fff] rounded mt-8 cursor-pointer"
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
    </div>
  );
};

export default CoursePreview;