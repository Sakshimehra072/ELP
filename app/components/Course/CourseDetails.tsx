// import { styles } from "@/app/styles/style";
// import CoursePlayer from "@/app/utils/CoursePlayer";
// import Ratings from "@/app/utils/Ratings";
// import Link from "next/link";
// import { format } from "timeago.js";
// import React, { useEffect, useState } from "react";
// import {
//   IoMdCheckmarkCircleOutline,
//   IoMdCloseCircleOutline,
// } from "react-icons/io";
// import ContentCourseList from "./ContentCourseList";
// import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
// import Image from "next/image";
// import defaultImage from "../../../public/assests/avatar.jpg";
// import { VscVerifiedFilled } from "react-icons/vsc";

// type CommentReply = {
//   user: {
//     name: string;
//     avatar?: { url: string };
//     role: string;
//   };
//   comment: string;
//   createdAt: string;
// };

// type Review = {
//   user: {
//     name: string;
//     avatar?: { url: string };
//   };
//   rating: number;
//   comment: string;
//   createdAt: string;
//   commentReplies: CommentReply[];
// };

// type CourseContent = {
//   _id: string;
//   title: string;
//   videoLength: number;
//   videoSection: string;
//   videoUrl: string;
//   description?: string;
//   isDemo?: boolean;
// };

// type Course = {
//   _id: string;
//   name: string;
//   ratings: number;
//   reviews: Review[];
//   purchased: number;
//   benefits: { title: string }[];
//   prerequisites: { title: string }[];
//   courseData: CourseContent[];
//   description: string;
//   demoUrl: string;
//   title: string;
//   price: number;
//   estimatedPrice: number;
//   setimatedPrice?: number;
// };

// type User = {
//   _id: string;
//   name: string;
//   avatar?: { url: string };
//   role: string;
//   courses: { _id: string }[];
// };

// type Props = {
//   data: Course;
//   clientSecret?: string;
//   setRoute: (route: string) => void;
//   setOpen: (open: boolean) => void;
// };

// const CourseDetails = ({
//   data,
//   setRoute,
//   setOpen: openAuthModal,
// }: Props) => {
//   const [open, setOpen] = useState(false);
//   const { data: userData } = useLoadUserQuery(undefined, {});
//   const [user, setUser] = useState<User | undefined>();

//   useEffect(() => {
//     setUser(userData?.user);
//   }, [userData]);

//   const discountprecentange =
//     ((data?.setimatedPrice ?? data.estimatedPrice) - data?.price) /
//     data?.estimatedPrice *
//     100;
//   const discountPercentngePrice = discountprecentange.toFixed(0);

//   const isPurchased =
//     user && user?.courses?.find((item) => item._id === data._id);

//   const handleOrder = () => {
//     if (user) {
//       setOpen(true);
//     } else {
//       setRoute("Login");
//       openAuthModal(true);
//     }
//   };

//   return (
//     <div className="pt-[100px] px-4 sm:px-6 md:px-8 lg:px-10">
//       <div className="w-full max-w-[1200px] mx-auto py-5">
//         <div className="w-full flex flex-col-reverse lg:flex-row gap-10">
//           {/* ===== Left Section ===== */}
//           <div className="w-full lg:w-[65%] lg:pr-[40px]">
//             <h1 className="text-[22px] sm:text-[25px] font-Poppins font-[600] text-black dark:text-white text-center lg:text-left">
//               {data?.name}
//             </h1>

//             {/* Ratings and Students */}
//             <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-3 gap-2">
//               <div className="flex items-center justify-center sm:justify-start gap-2">
//                 {/* <Ratings rating={data.ratings} /> */}
//                 {/* <h5 className="text-black dark:text-white">
//                   {data.reviews?.length} Reviews
//                 </h5> */}
//               </div>
//               {/* <h5 className="text-black dark:text-white text-center sm:text-right">
//                 {data.purchased} Students
//               </h5> */}
//             </div>

//             <br />

//             {/* What You Will Learn */}
//             <h1 className="text-[22px] sm:text-[25px] font-Poppins font-[600] text-black dark:text-white">
//               What you will learn from this course?
//             </h1>
//             <div>
//               {data.benefits?.map((item, index) => (
//                 <div
//                   className="w-full flex items-start sm:items-center py-2"
//                   key={index}
//                 >
//                   <IoMdCheckmarkCircleOutline
//                     size={20}
//                     className="text-black dark:text-white mt-1 sm:mt-0"
//                   />
//                   <p className="pl-2 text-black dark:text-white text-[15px] sm:text-[16px] leading-relaxed">
//                     {item.title}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             <br />

//             {/* Prerequisites */}
//             <h1 className="text-[22px] sm:text-[25px] font-Poppins font-[600] text-black dark:text-white">
//               What are the prerequisites for starting this course?
//             </h1>
//             <div>
//               {data.prerequisites?.map((item, index) => (
//                 <div
//                   className="w-full flex items-start sm:items-center py-2"
//                   key={index}
//                 >
//                   <IoMdCheckmarkCircleOutline
//                     size={20}
//                     className="text-black dark:text-white mt-1 sm:mt-0"
//                   />
//                   <p className="pl-2 text-black dark:text-white text-[15px] sm:text-[16px] leading-relaxed">
//                     {item.title}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             <br />

//             <div className="w-full">
//   <h1 className="text-[22px] sm:text-[25px] font-Poppins font-[600] text-black dark:text-white mt-6">
//     Course Details
//   </h1>
//   <p className="text-[12px] sm:text-[18px] mt-[15px] whitespace-pre-line text-black dark:text-white leading-relaxed text-justify max-w-[900px] mx-auto">
//     {data.description}
//   </p>
// </div>
// <br />
// <div>
// </div>
//             <br />

//             {/* Ratings */}
//             <div className="w-full">
//               <div className="flex flex-col sm:flex-row sm:items-center gap-2">
//               </div>

//               <br />

//               {/* Reviews */}
//               {(data?.reviews && [...data.reviews].reverse()).map(
//                 (item, index) => (
//                   <div className="w-full pb-4" key={index}>
//                     <div className="flex flex-col sm:flex-row gap-3">
//                       <Image
//                         src={
//                           item.user.avatar
//                             ? item.user.avatar.url
//                             : defaultImage
//                         }
//                         width={50}
//                         height={50}
//                         alt=""
//                         className="w-[50px] h-[50px] rounded-full object-cover"
//                       />
//                       <div>
//                         <div className="flex items-center gap-2 flex-wrap">
//                           <h5 className="text-[16px] sm:text-[18px] text-black dark:text-white">
//                             {item.user.name}
//                           </h5>
//                           <Ratings rating={item.rating} />
//                         </div>
//                         <p className="text-black dark:text-white text-[15px] sm:text-[16px] leading-relaxed">
//                           {item.comment}
//                         </p>
//                         <small className="text-[#000000d1] dark:text-[#ffffff83]">
//                           {format(item.createdAt)}
//                         </small>
//                       </div>
//                     </div>

//                     {/* Replies */}
//                     {item.commentReplies.map((i, idx) => (
//                       <div
//                         className="w-full flex flex-col sm:flex-row sm:ml-12 mt-4"
//                         key={idx}
//                       >
//                         <Image
//                           src={
//                             i.user.avatar ? i.user.avatar.url : defaultImage
//                           }
//                           width={50}
//                           height={50}
//                           alt=""
//                           className="w-[45px] h-[45px] rounded-full object-cover"
//                         />
//                         <div className="pl-2">
//                           <div className="flex items-center flex-wrap gap-1">
//                             <h5 className="text-[16px] sm:text-[18px]">
//                               {i.user.name}
//                             </h5>
//                             {i.user.role === "admin" && (
//                               <VscVerifiedFilled className="text-[#0095f6] text-[18px]" />
//                             )}
//                           </div>
//                           <p className="text-[15px] sm:text-[16px] leading-relaxed">
//                             {i.comment}
//                           </p>
//                           <small className="text-[#ffffff83]">
//                             {format(i.createdAt)}
//                           </small>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )
//               )}
//             </div>
//           </div>

//           {/* ===== Right Section (Sidebar) ===== */}

//           <div className="w-full lg:w-[35%] relative">
//   <div className="sticky top-[120px] md:top-[140px] lg:top-[160px] left-0 z-40 w-full flex flex-col items-center">
//     <CoursePlayer videoUrl={data?.demoUrl} title={data?.title} />

//     <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-4">
//       <h1 className="text-[22px] sm:text-[25px] text-black dark:text-white">
//         {data.price === 0 ? "Free" : `${data.price} Rs`}
//       </h1>
//       <h5 className="text-[18px] sm:text-[20px] text-black dark:text-white">
//         {discountPercentngePrice}% off
//       </h5>
//     </div>

//     <div className="flex justify-center sm:justify-start mt-3">
//       {isPurchased ? (
//         <Link
//           className={`${styles.button} !w-[180px] font-Poppins cursor-pointer !bg-[crimson]`}
//           href={`/course-access/${data._id}`}
//         >
//           Enter Course
//         </Link>
//       ) : (
//         <div
//           className={`${styles.button} !w-[180px] font-Poppins cursor-pointer !bg-[crimson]`}
//           onClick={handleOrder}
//         >
//           Buy Now
//          <br />
//           {/* Buy Now {data.price} Rs */}
//           </div>
//       )}
//     </div>  
//             {/* Course Overview */}
//             <br/>
//             <br/>
          
//             <h1 className="text-[22px] sm:text-[25px]  font-Poppins font-[600] text-black dark:text-white">
//               Course Overview
//             </h1>
//             <ContentCourseList data={data?.courseData} isDemo={true} />
//   </div>
// </div>
//         </div>
//       </div>

//       {/* ===== Popup (Payment Modal) ===== */}
//       <>
//         {open && (
//           <div className="w-full h-screen bg-[#00000036] fixed top-0 left-0 z-50 flex items-center justify-center px-4">
//             <div className="w-full max-w-[500px] min-h-[420px] bg-white rounded-xl shadow p-3">
//               <div className="w-full flex justify-end">
//                 <IoMdCloseCircleOutline
//                   size={40}
//                   className="text-black cursor-pointer"
//                   onClick={() => setOpen(false)}
//                 />
//               </div>
//             </div>
//           </div>
//         )}
//       </>
//     </div>
//   );
// };

// export default CourseDetails;











// import { styles } from "@/app/styles/style";
import CoursePlayer from "@/app/utils/CoursePlayer";
import Ratings from "@/app/utils/Ratings";
// import Link from "next/link";
import { format } from "timeago.js";
import React, { useEffect, useState } from "react";
import {
  IoMdCheckmarkCircleOutline,
  // IoMdCloseCircleOutline,
} from "react-icons/io";
import ContentCourseList from "./ContentCourseList";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import Image from "next/image";
import defaultImage from "../../../public/assests/avatar.jpg";
// import { VscVerifiedFilled } from "react-icons/vsc";

type CommentReply = {
  user: {
    name: string;
    avatar?: { url: string };
    role: string;
  };
  comment: string;
  createdAt: string;
};

type Review = {
  user: {
    name: string;
    avatar?: { url: string };
  };
  rating: number;
  comment: string;
  createdAt: string;
  commentReplies: CommentReply[];
};

type CourseContent = {
  _id: string;
  title: string;
  videoLength: number;
  videoSection: string;
  videoUrl: string;
  description?: string;
  isDemo?: boolean;
};

type Course = {
  _id: string;
  name: string;
  ratings: number;
  reviews: Review[];
  purchased: number;
  benefits: { title: string }[];
  prerequisites: { title: string }[];
  courseData: CourseContent[];
  description: string;
  demoUrl: string;
  title: string;
  price: number;
  estimatedPrice: number;
  setimatedPrice?: number;
};

type User = {
  _id: string;
  name: string;
  avatar?: { url: string };
  role: string;
  courses: { _id: string }[];
};

type Props = {
  data: Course;
  clientSecret?: string;
  setRoute: (route: string) => void;
  setOpen: (open: boolean) => void;
};

type PaymentPayload = {
  amount: number;
  courseId: string;
};



// =============================
// PHONEPE PAYMENT API FUNCTION
// =============================
const initiatePhonePePayment = async ({amount, courseId} : PaymentPayload) => {
  const response = await fetch(`https://www.liveenglishwithsushil.com/api/v1/payment/initiate`, {
    method: "POST",
    credentials : "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
    amount, 
    courseId,
    }),
  });

  const data = await response.json();
  return data;
};

const CourseDetails = ({
  data,
  setRoute,
  setOpen: openAuthModal,
}: Props) => {
  // const [open, setOpen] = useState(false);
  const { data: userData } = useLoadUserQuery(undefined, {});
  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    setUser(userData?.user);
  }, [userData]);

  const discountprecentange =
    ((data?.setimatedPrice ?? data.estimatedPrice) - data?.price) /
    data?.estimatedPrice *
    100;
  const discountPercentngePrice = discountprecentange.toFixed(0);

  // const isPurchased = user && user?.courses?.find((item) => item._id === data._id);

  // ===============================
  // HANDLE PHONEPE PAYMENT
  // ===============================
  const handlePhonePePayment = async () => {
    if (!user) {
      setRoute("Login");
      openAuthModal(true);
      return;
    }

    try {
      const res = await initiatePhonePePayment({
        amount : data.price, courseId: data._id
      });
      console.log("COURSE ID:", data._id);
      console.log("PRICE:", data.price);


      if (res.success) {
        // REDIRECT TO PHONEPE PAYMENT PAGE
        console.log("Order ID:", res.orderId);  // For manual status check
        window.location.href = res.redirectUrl;
      } else {
        alert("Payment creation failed!");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="pt-[100px] px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="w-full max-w-[1200px] mx-auto py-5">
        <div className="w-full flex flex-col-reverse lg:flex-row gap-10">
          
          {/* LEFT Section */}
          <div className="w-full lg:w-[65%] lg:pr-[40px]">
            <h1 className="text-[22px] sm:text-[25px] font-Poppins font-[600]">
              {data?.name}
            </h1>

            {/* ==== What You Will Learn ==== */}
            <h1 className="text-[22px] sm:text-[25px] font-[600] mt-5">
              What you will learn from this course?
            </h1>
            <div>
              {data.benefits?.map((item, index) => (
                <div className="w-full flex items-start py-2" key={index}>
                  <IoMdCheckmarkCircleOutline size={20} />
                  <p className="pl-2 text-[16px]">{item.title}</p>
                </div>
              ))}
            </div>

            <br />

            {/* ==== Prerequisites ==== */}
            <h1 className="text-[22px] sm:text-[25px] font-[600]">
              What are the prerequisites for starting this course?
            </h1>
            <div>
              {data.prerequisites?.map((item, index) => (
                <div className="w-full flex items-start py-2" key={index}>
                  <IoMdCheckmarkCircleOutline size={20} />
                  <p className="pl-2 text-[16px]">{item.title}</p>
                </div>
              ))}
            </div>

            <br />

            {/* ==== Description ==== */}
            <div className="w-full">
              <h1 className="text-[22px] sm:text-[25px] font-[600] mt-6">
                Course Details
              </h1>
              <p className="text-[16px] mt-[15px] leading-relaxed whitespace-pre-line">
                {data.description}
              </p>
            </div>

            <br />

            {/* ==== Reviews ==== */}
            {(data?.reviews && [...data.reviews].reverse()).map((item, index) => (
              <div className="w-full pb-4" key={index}>
                <div className="flex gap-3">
                  <Image
                    src={
                      item.user.avatar ? item.user.avatar.url : defaultImage
                    }
                    width={50}
                    height={50}
                    alt="avatar"
                    className="w-[50px] h-[50px] rounded-full"
                  />
                  <div>
                    <h5 className="text-[18px]">{item.user.name}</h5>
                    <Ratings rating={item.rating} />
                    <p className="text-[16px]">{item.comment}</p>
                    <small>{format(item.createdAt)}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT Section */}
          <div className="w-full lg:w-[35%] relative">
            <div className="sticky top-[150px] flex flex-col items-center">
              
              <CoursePlayer videoUrl={data?.demoUrl} title={data?.title} />

              <div className="flex items-center gap-3 mt-4">
                <h1 className="text-[25px]">{data.price} Rs</h1>
                <h5 className="text-[20px]">{discountPercentngePrice}% Off</h5>
              </div>

              {/* ================================
                  PHONEPE PAYMENT BUTTON
                  ================================ */}
              <button
                onClick={handlePhonePePayment}
                className="mt-4 bg-red-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-indigo-700"
              >
                Buy Now
              </button>

              <br />
              <h1 className="text-[22px] sm:text-[25px] font-[600] mt-6">
                Course Overview
              </h1>
              <ContentCourseList data={data?.courseData} isDemo={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;