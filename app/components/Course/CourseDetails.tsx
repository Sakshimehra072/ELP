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