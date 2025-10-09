// import Image from "next/image";
// import Link from "next/link";
// import React, { FC } from "react";
// import { AiOutlineUnorderedList } from "react-icons/ai";

// type Props = {
//   item: any;
//   isProfile?: boolean;
// };

// const CourseCard: FC<Props> = ({ item, isProfile }) => {
//   // console.log(item)
//   // console.log(item.thumbnail)

//   return (
//     <Link
//       href={!isProfile ? `/course/${item._id}` : `course-access/${item._id}`}
//     >
//       <div className="w-full h-[420px] dark:bg-slate-500 dark:bg-opacity-20 backdrop-blur border dark:border-[#ffffff1d] 
//       border-[#0000015] dark:shadow-[bg-slate-700] rounded-lg p-3 shadow-sm dark:shadow-inner flex flex-col justify-between">
//         <Image
//           src={item.thumbnail.url}
//           // src={typeof item.thumbnail === "string" ? item.thumbnail : item.thumbnail?.url || "/placeholder.png"}
//           width={500}
//           height={300}
//           objectFit="contain"
//           className="rounded w-full"
//           alt={item.name || "Course Thumbnail"}
//         // unoptimized={item.thumbnail?.startsWith("data:")} // needed for base64 images
//         // src={""}
//         />
//         <br />
//         <h1 className="font-Poppins text-[16px] text-black dark:text-[#fff]">
//           {item.name}
//         </h1>
  
//         <div className="w-full flex items-center justify-between pt-3">
//           <div className="flex">
//             <h3 className="text-black dark:text-[#fff]">
//               {item.price === 0 ? "Free" : item.price + " " + "Rs"}
//             </h3>
//             <h5 className="pl-3 text-[14px] mt-[-5px] line-through opacity-80 text-black dark:text-[#fff]">
//               {item.estimatedPrice} Rs
//             </h5>
//           </div>
//           <div className="flex items-center pb-3">
//             <AiOutlineUnorderedList size={20} fill="#fff" />
//             <h5 className="pl-2 text-black dark:text-[#fff]">
//               {item.courseData?.length} Lecture
//             </h5>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default CourseCard;



import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";

type CourseItem = {
  _id: string;
  name: string;
  price: number;
  estimatedPrice?: number;
  thumbnail: {
    url: string;
  };
  courseData?: Array<{
    _id: string;
    title: string;
    videoLength: number;
    videoSection: string;
  }>;
};


type Props = {
  item: CourseItem;
  isProfile?: boolean;
};

const CourseCard: FC<Props> = ({ item, isProfile }) => {
  return (
    <Link
      href={!isProfile ? `/course/${item._id}` : `course-access/${item._id}`}
    >
           
        <div className="w-full dark:bg-slate-500 bg-blue-100 dark:bg-opacity-20 backdrop-blur border dark:border-blue-100 border-blue-300
dark:shadow-[bg-slate-700] rounded-lg p-3 shadow-sm dark:shadow-inner flex flex-col gap-3">

        {/* Thumbnail */}
        <div className="w-full h-[180px] relative rounded overflow-hidden">
          <Image
            src={item.thumbnail.url}
            alt={item.name || "Course Thumbnail"}
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </div>

        {/* Title */}
        <h1 className="font-Poppins text-[16px] text-black dark:text-[#fff] truncate">
          {item.name}
        </h1>

        {/* Price and Lecture Info */}
        <div className="w-full flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <span className="text-black dark:text-[#fff]">
              {item.price === 0 ? "Free" : item.price + " Rs"}
            </span>
            {item.price !== 0 && item.estimatedPrice && (
              <span className="line-through opacity-70 text-black dark:text-[#fff]">
                {item.estimatedPrice} Rs
              </span>
            )}
          </div>
          


          <div className="flex items-center gap-1 text-black dark:text-[#fff]">
            <AiOutlineUnorderedList size={18} />
            <span>{item.courseData?.length || 0} Lectures</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;

