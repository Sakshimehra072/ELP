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
// // import { Elements } from "@stripe/react-stripe-js";
// // import CheckOutForm from "../Payment/CheckOutForm";
// import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
// import Image from "next/image";
// // import defaultImage from "../../../public/assets/avatar.jpg";
// import defaultImage from "../../../public/assests/avatar.jpg"
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

// // type Course = {
// //   _id: string;
// //   name: string;
// //   ratings: number;
// //   reviews: Review[];
// //   purchased: number;
// //   benefits: { title: string }[];
// //   prerequisites: { title: string }[];
// //   courseData: any[];
// //   description: string;
// //   demoUrl: string;
// //   title: string;
// //   price: number;
// //   estimatedPrice: number;
// //   setimatedPrice?: number; // kept because you used it in discount calc
// // };

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
//   courseData: CourseContent[];  // ✅ replaced `any[]` with proper type
//   description: string;
//   demoUrl: string;
//   title: string;
//   price: number;
//   estimatedPrice: number;
//   setimatedPrice?: number; // kept because you used it in discount calc
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
//   // stripePromise: any;
//   setRoute: (route: string) => void;
//   setOpen: (open: boolean) => void;
// };

// const CourseDetails = ({
//   data,
//   // clientSecret,
//   // stripePromise,
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
//     <div className="pt-[100px]">
//       <div className="w-[90%] 800px:w-[90%] m-auto py-5">
//         <div className="w-full flex flex-col-reverce 800px:flex-row">
//           <div className="w-full 800px:w-[65%] 800px:pr-[50px]">
//             <h1 className="text-[25px] font-Poppins font-[600] text-black dark:text-white">
//               {data?.name}
//             </h1>
//             <div className="flex items-center justify-between pt-3">
//               <div className="flex items-center">
//                 <Ratings rating={data.ratings} />
//                 <h5 className="text-black dark:text-white">
//                   {data.reviews?.length} Reviews
//                 </h5>
//               </div>
//               <h5 className="text-black dark:text-white">
//                 {data.purchased} Students
//               </h5>
//             </div>
//             <br />
//             <h1 className="text-[25px] font-Poppins font-[600] text-black dark:text-white">
//               What you will learn form this course?
//             </h1>
//             <div>
//               {data.benefits?.map((item, index) => (
//                 <div
//                   className="w-full flex 800px:items-center py-2"
//                   key={index}
//                 >
//                   <div className="w-[15px] mr-1">
//                     <IoMdCheckmarkCircleOutline
//                       size={20}
//                       className="text-black dark:text-white"
//                     />
//                   </div>
//                   <p className="pl-2 text-black dark:text-white">{item.title}</p>
//                 </div>
//               ))}
//               <br />
//               <br />
//             </div>
//             <h1 className="text-[25px] font-Poppins font-[600] text-black dark:text-white">
//               What are the prerequisites for starting this course?
//             </h1>
//             <div>
//               {data.prerequisites?.map((item, index) => (
//                 <div
//                   className="w-full flex 800px:items-center py-2"
//                   key={index}
//                 >
//                   <div className="w-[15px] mr-1">
//                     <IoMdCheckmarkCircleOutline
//                       size={20}
//                       className="text-black dark:text-white"
//                     />
//                   </div>
//                   <p className="pl-2 text-black dark:text-white">{item.title}</p>
//                 </div>
//               ))}
//               <br />
//               <br />
//             </div>
//             <div>
//               <h1 className="text-[25px] font-Poppins font-[600] text-black dark:text-white">
//                 Course Overview
//               </h1>
//               <ContentCourseList data={data?.courseData} isDemo={true} />
//               <div className="w-full">
//                 <h1 className="text-[25px] font-Poppins font-[600] text-black dark:text-white">
//                   Course Details
//                 </h1>
//                 <p className="text-[18px] mt-[20px] whitespace-pre-line w-full overflow-hidden text-black dark:text-white">
//                   {data.description}
//                 </p>
//               </div>
//               <br />
//               <br />
//               <div className="w-full">
//                 <div className="800px:flex items-center">
//                   <Ratings rating={data?.ratings} />
//                   <div className="mb-2 800px:mb-[unset]">
//                     <h5 className="text-[25px] font-Poppins text-black dark:text-white">
//                       {Number.isInteger(data?.ratings)
//                         ? data?.ratings.toFixed(1)
//                         : data?.ratings.toFixed(2)}{" "}
//                       Course Rating * {data?.reviews?.length} Reviews
//                     </h5>
//                   </div>
//                 </div>
//                 <br />
//                 {(data?.reviews && [...data.reviews].reverse()).map(
//                   (item, index) => (
//                     <div className="w-full pb-4" key={index}>
//                       <div className="flex">
//                         <div className="w-[50px] h-[50px]">
//                           <Image
//                             src={
//                               item.user.avatar ? item.user.avatar.url : defaultImage
//                             }
//                             width={50}
//                             height={50}
//                             alt=""
//                             className="w-[50px] h-[50px] rounded-full object-cover"
//                           />
//                         </div>
//                         <div className="hidden 800px:block pl-2">
//                           <div className="flex items-center">
//                             <h5 className="text-[18px] pr-2 text-black dark:text-white">
//                               {item.user.name}
//                             </h5>
//                             <Ratings rating={item.rating} />
//                           </div>
//                           <p className="text-black dark:text-white">
//                             {item.comment}
//                           </p>
//                           <small className="text-[#000000d1] dark:text-[#ffffff83]">
//                             {format(item.createdAt)}
//                           </small>
//                         </div>
//                         <div className="pl-2 flex 800px:hidden items-center">
//                           <h5 className="text-[18px] pr-2 text-black dark:text-white">
//                             <Ratings rating={item.rating} />
//                           </h5>
//                         </div>
//                       </div>
//                       {item.commentReplies.map((i, idx) => (
//                         <div
//                           className="w-full flex 800px:ml-16 my-5"
//                           key={idx}
//                         >
//                           <div className="w-[50px] h-[50px]">
//                             <Image
//                               src={
//                                 i.user.avatar ? i.user.avatar.url : defaultImage
//                               }
//                               width={50}
//                               height={50}
//                               alt=""
//                               className="w-[50px] h-[50px] rounded-full object-cover"
//                             />
//                           </div>
//                           <div className="pl-2">
//                             <div className="flex items-center">
//                               <h5 className="text-[20px]">{i.user.name}</h5>
//                               {i.user.role === "admin" && (
//                                 <VscVerifiedFilled className="text-[#0095f6] ml-2 text-[20px]" />
//                               )}
//                             </div>
//                             <p>{i.comment}</p>
//                             <small className="text-[#ffffff83]">
//                               {format(i.createdAt)}
//                             </small>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   )
//                 )}
//               </div>
//             </div>
//           </div>
//           <div className="w-full 800px:w-[35%] relative">
//             <div className="sticky top-[100px] left-0 z-50 w-full">
//               <CoursePlayer videoUrl={data?.demoUrl} title={data?.title} />
//               <div className="flex items-center">
//                 <h1 className="pl-5 text-[25px] text-black dark:text-white">
//                   {data.price === 0 ? "Free" : data.price + "Rs"}
//                 </h1>
//                 <h5 className="pl-5 pt-4 text-[22px] text-black dark:text-white">
//                   {discountPercentngePrice}% off
//                 </h5>
//               </div>
//               <div className="flex items-center">
//                 {isPurchased ? (
//                   <Link
//                     className={`${styles.button} !w-[180px] my-3 font-Poppins cursor-pointer !bg-[crimson]`}
//                     href={`/course-access/${data._id}`}
//                   >
//                     Enter to Course
//                   </Link>
//                 ) : (
//                   <div
//                     className={`${styles.button} !w-[180px] my-3 font-Poppins cursor-pointer !bg-[crimson]`}
//                     onClick={handleOrder}
//                   >
//                     Buy Now {data.price}Rs
//                   </div>
//                 )}
//               </div>
//               <br />
//               <p className="pb-1 text-black dark:text-white">
//                 📚 Covers Listening, Reading, Writing & Speaking.
//               </p>
//               <p className="pb-1 text-black dark:text-white">
//                 ⏲️ Study anytime, anywhere at your own pace.
//               </p>
//               <p className="pb-1 text-black dark:text-white">
//                 📈 Personalized guidance for better results
//               </p>
//               <p className="pb-1 800px:pb-1 text-black dark:text-white">
//                 🪙 Affordable pricing with premium quality content
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <>
//         {open && (
//           <div className="w-full h-screen bg-[#00000036] fixed top-0 left-0 z-50 flex items-center justify-center">
//             <div className="w-[500px] min-h-[420px] bg-white rounded-xl shadow p-3">
//               <div className="w-full flex justify-end">
//                 <IoMdCloseCircleOutline
//                   size={40}
//                   className="text-black cursor-pointer"
//                   onClick={() => setOpen(false)}
//                 />
//               </div>
//               {/* <div className="w-full">
//                 {stripePromise && clientSecret && (
//                   <Elements stripe={stripePromise} options={{ clientSecret }}>
//                     <CheckOutForm setOpen={setOpen} data={data} user={user} />
//                   </Elements>
//                 )}
//               </div> */}
//             </div>
//           </div>
//         )}
//       </>
//     </div>
//   );
// };

// export default CourseDetails;




import { styles } from "@/app/styles/style";
import CoursePlayer from "@/app/utils/CoursePlayer";
import Ratings from "@/app/utils/Ratings";
import Link from "next/link";
import { format } from "timeago.js";
import React, { useEffect, useState } from "react";
import {
  IoMdCheckmarkCircleOutline,
  IoMdCloseCircleOutline,
} from "react-icons/io";
import ContentCourseList from "./ContentCourseList";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import Image from "next/image";
import defaultImage from "../../../public/assests/avatar.jpg";
import { VscVerifiedFilled } from "react-icons/vsc";

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

const CourseDetails = ({
  data,
  setRoute,
  setOpen: openAuthModal,
}: Props) => {
  const [open, setOpen] = useState(false);
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

  const isPurchased =
    user && user?.courses?.find((item) => item._id === data._id);

  const handleOrder = () => {
    if (user) {
      setOpen(true);
    } else {
      setRoute("Login");
      openAuthModal(true);
    }
  };

  return (
    <div className="pt-[100px] px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="w-full max-w-[1200px] mx-auto py-5">
        <div className="w-full flex flex-col-reverse lg:flex-row gap-10">
          {/* ===== Left Section ===== */}
          <div className="w-full lg:w-[65%] lg:pr-[40px]">
            <h1 className="text-[22px] sm:text-[25px] font-Poppins font-[600] text-black dark:text-white text-center lg:text-left">
              {data?.name}
            </h1>

            {/* Ratings and Students */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-3 gap-2">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                {/* <Ratings rating={data.ratings} /> */}
                {/* <h5 className="text-black dark:text-white">
                  {data.reviews?.length} Reviews
                </h5> */}
              </div>
              {/* <h5 className="text-black dark:text-white text-center sm:text-right">
                {data.purchased} Students
              </h5> */}
            </div>

            <br />

            {/* What You Will Learn */}
            <h1 className="text-[22px] sm:text-[25px] font-Poppins font-[600] text-black dark:text-white">
              What you will learn from this course?
            </h1>
            <div>
              {data.benefits?.map((item, index) => (
                <div
                  className="w-full flex items-start sm:items-center py-2"
                  key={index}
                >
                  <IoMdCheckmarkCircleOutline
                    size={20}
                    className="text-black dark:text-white mt-1 sm:mt-0"
                  />
                  <p className="pl-2 text-black dark:text-white text-[15px] sm:text-[16px] leading-relaxed">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>

            <br />

            {/* Prerequisites */}
            <h1 className="text-[22px] sm:text-[25px] font-Poppins font-[600] text-black dark:text-white">
              What are the prerequisites for starting this course?
            </h1>
            <div>
              {data.prerequisites?.map((item, index) => (
                <div
                  className="w-full flex items-start sm:items-center py-2"
                  key={index}
                >
                  <IoMdCheckmarkCircleOutline
                    size={20}
                    className="text-black dark:text-white mt-1 sm:mt-0"
                  />
                  <p className="pl-2 text-black dark:text-white text-[15px] sm:text-[16px] leading-relaxed">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>

            <br />

            <div className="w-full">
  <h1 className="text-[22px] sm:text-[25px] font-Poppins font-[600] text-black dark:text-white mt-6">
    Course Details
  </h1>
  <p className="text-[12px] sm:text-[18px] mt-[15px] whitespace-pre-line text-black dark:text-white leading-relaxed text-justify max-w-[900px] mx-auto">
    {data.description}
  </p>
</div>
<br />

<div>
  <a
    href="https://drive.google.com/file/d/1FYHdb9nyBAOLSMi9q9gX34_necuDmJ03/view?usp=drive_link"
    className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold hover:opacity-80"
  >
    Privacy Policy
  </a>
</div>






             {/* <div className="w-full">
              <h1 className="text-[22px] sm:text-[25px] font-Poppins font-[600] text-black dark:text-white mt-6">
                Course Details
              </h1>
              <p className="text-[16px] sm:text-[18px] mt-[15px] whitespace-pre-line text-black dark:text-white leading-relaxed text-justify">
                {data.description}
              </p>
            </div> */}



            {/* Course Overview */}
            {/* <h1 className="text-[22px] sm:text-[25px] font-Poppins font-[600] text-black dark:text-white">
              Course Overview
            </h1>
            <ContentCourseList data={data?.courseData} isDemo={true} /> */}

            {/* Description */}

             {/* <div className="mt-4 text-[15px] sm:text-[16px] text-center sm:text-left text-black dark:text-white space-y-1">
      <p>📚 Covers Listening, Reading, Writing & Speaking.</p>
      <p>⏲️ Study anytime, anywhere at your own pace.</p>
      <p>📈 Personalized guidance for better results.</p>
      <p>🪙 Affordable pricing with premium quality content.</p>
    </div> */}


            {/* <div className="w-full">
              <h1 className="text-[22px] sm:text-[25px] font-Poppins font-[600] text-black dark:text-white mt-6">
                Course Details
              </h1>
              <p className="text-[16px] sm:text-[18px] mt-[15px] whitespace-pre-line text-black dark:text-white leading-relaxed">
                {data.description}
              </p>
            </div> */}

            <br />

            {/* Ratings */}
            <div className="w-full">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                {/* <Ratings rating={data?.ratings} /> */}
                {/* <h5 className="text-[20px] sm:text-[25px] font-Poppins text-black dark:text-white">
                  {Number.isInteger(data?.ratings)
                    ? data?.ratings.toFixed(1)
                    : data?.ratings.toFixed(2)}{" "}
                  Course Rating • {data?.reviews?.length} Reviews
                </h5> */}
              </div>

              <br />

              {/* Reviews */}
              {(data?.reviews && [...data.reviews].reverse()).map(
                (item, index) => (
                  <div className="w-full pb-4" key={index}>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Image
                        src={
                          item.user.avatar
                            ? item.user.avatar.url
                            : defaultImage
                        }
                        width={50}
                        height={50}
                        alt=""
                        className="w-[50px] h-[50px] rounded-full object-cover"
                      />
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h5 className="text-[16px] sm:text-[18px] text-black dark:text-white">
                            {item.user.name}
                          </h5>
                          <Ratings rating={item.rating} />
                        </div>
                        <p className="text-black dark:text-white text-[15px] sm:text-[16px] leading-relaxed">
                          {item.comment}
                        </p>
                        <small className="text-[#000000d1] dark:text-[#ffffff83]">
                          {format(item.createdAt)}
                        </small>
                      </div>
                    </div>

                    {/* Replies */}
                    {item.commentReplies.map((i, idx) => (
                      <div
                        className="w-full flex flex-col sm:flex-row sm:ml-12 mt-4"
                        key={idx}
                      >
                        <Image
                          src={
                            i.user.avatar ? i.user.avatar.url : defaultImage
                          }
                          width={50}
                          height={50}
                          alt=""
                          className="w-[45px] h-[45px] rounded-full object-cover"
                        />
                        <div className="pl-2">
                          <div className="flex items-center flex-wrap gap-1">
                            <h5 className="text-[16px] sm:text-[18px]">
                              {i.user.name}
                            </h5>
                            {i.user.role === "admin" && (
                              <VscVerifiedFilled className="text-[#0095f6] text-[18px]" />
                            )}
                          </div>
                          <p className="text-[15px] sm:text-[16px] leading-relaxed">
                            {i.comment}
                          </p>
                          <small className="text-[#ffffff83]">
                            {format(i.createdAt)}
                          </small>
                        </div>
                      </div>
                    ))}
                  </div>
                )
              )}
            </div>
          </div>

          {/* ===== Right Section (Sidebar) ===== */}

          <div className="w-full lg:w-[35%] relative">
  <div className="sticky top-[120px] md:top-[140px] lg:top-[160px] left-0 z-40 w-full flex flex-col items-center">
    <CoursePlayer videoUrl={data?.demoUrl} title={data?.title} />

    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-4">
      <h1 className="text-[22px] sm:text-[25px] text-black dark:text-white">
        {data.price === 0 ? "Free" : `${data.price} Rs`}
      </h1>
      <h5 className="text-[18px] sm:text-[20px] text-black dark:text-white">
        {discountPercentngePrice}% off
      </h5>
    </div>

    <div className="flex justify-center sm:justify-start mt-3">
      {isPurchased ? (
        <Link
          className={`${styles.button} !w-[180px] font-Poppins cursor-pointer !bg-[crimson]`}
          href={`/course-access/${data._id}`}
        >
          Enter Course
        </Link>
      ) : (
        <div
          className={`${styles.button} !w-[180px] font-Poppins cursor-pointer !bg-[crimson]`}
          onClick={handleOrder}
        >
          Buy Now
         <br />
          {/* Buy Now {data.price} Rs */}
          </div>
      )}
    </div>

    
            {/* Course Overview */}
            <br/>
            <br/>
          
            <h1 className="text-[22px] sm:text-[25px]  font-Poppins font-[600] text-black dark:text-white">
              Course Overview
            </h1>
            <ContentCourseList data={data?.courseData} isDemo={true} />

     {/* <div className="w-full">
              <h1 className="text-[22px] sm:text-[25px] font-Poppins font-[600] text-black dark:text-white mt-6">
                Course Details
              </h1>
              <p className="text-[16px] sm:text-[18px] mt-[15px] whitespace-pre-line text-black dark:text-white leading-relaxed">
                {data.description}
              </p>
            </div> */}
  </div>
</div>


          {/* <div className="w-full lg:w-[35%] relative">
          <div className="sticky top-[120px] md:top-[140px] lg:top-[160px] left-0 z-40 w-full flex flex-col items-center">
              <CoursePlayer videoUrl={data?.demoUrl} title={data?.title} />

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-4">
                <h1 className="text-[22px] sm:text-[25px] text-black dark:text-white">
                  {data.price === 0 ? "Free" : `${data.price} Rs`}
                </h1>
                <h5 className="text-[18px] sm:text-[20px] text-black dark:text-white">
                  {discountPercentngePrice}% off
                </h5>
              </div>

              <div className="flex justify-center sm:justify-start mt-3">
                {isPurchased ? (
                  <Link
                    className={`${styles.button} !w-[180px] font-Poppins cursor-pointer !bg-[crimson]`}
                    href={`/course-access/${data._id}`}
                  >
                    Enter Course
                  </Link>
                ) : (
                  <div
                    className={`${styles.button} !w-[180px] font-Poppins cursor-pointer !bg-[crimson]`}
                    onClick={handleOrder}
                  >
                    Buy Now {data.price} Rs
                  </div>
                )}
              </div>

              <div className="mt-4 text-[15px] sm:text-[16px] text-center sm:text-left text-black dark:text-white space-y-1">
                <p>📚 Covers Listening, Reading, Writing & Speaking.</p>
                <p>⏲️ Study anytime, anywhere at your own pace.</p>
                <p>📈 Personalized guidance for better results.</p>
                <p>🪙 Affordable pricing with premium quality content.</p>
              </div>
            </div>
          </div> */}

        </div>
      </div>

      {/* ===== Popup (Payment Modal) ===== */}
      <>
        {open && (
          <div className="w-full h-screen bg-[#00000036] fixed top-0 left-0 z-50 flex items-center justify-center px-4">
            <div className="w-full max-w-[500px] min-h-[420px] bg-white rounded-xl shadow p-3">
              <div className="w-full flex justify-end">
                <IoMdCloseCircleOutline
                  size={40}
                  className="text-black cursor-pointer"
                  onClick={() => setOpen(false)}
                />
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default CourseDetails;
