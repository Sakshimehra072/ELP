"use client";
import { useGetCourseDetailsQuery } from "@/redux/features/courses/coursesApi";
// import React, { useEffect } from "react";
import React, { useState } from "react";
// import Loader from "../Loader";
import Loader from "../Loader/Loader";
import Heading from "@/app/utils/Heading";
import Header from "../Header";
import CourseDetails from "./CourseDetails";
import Footer from "../Footer";
// import {
//   useCreatePaymentIntentMutation,
//   useGetStripePublishableKeyQuery,
// } from "@/redux/features/orders/ordersApi";

// import { loadStripe } from "@stripe/stripe-js";

type Props = {
  id: string;
};

const CourseDetailsPage = ({ id }: Props) => {
  const [route, setRoute] = useState("Login");
  const [open, setOpen] = useState(false);
  const { data, isLoading } = useGetCourseDetailsQuery(id);
//   const { data: config } = useGetStripePublishableKeyQuery({});
//   const [createPaymentIntent, { data: paymentIntentData }] =
//     useCreatePaymentIntentMutation();
//   const [stripePropmise, setStripePromise] = useState<any>(null);
//   const [clientSecret, setClientSecret] = useState("");

//   useEffect(() => {
//     if (config) {
//       const publishableKey = config?.publishableKey;
//       setStripePromise(loadStripe(publishableKey));
//     }
//     if (data) {
//       const amount = Math.round(data.course.price * 100);
//       createPaymentIntent(amount);
//     }
//   }, [config, data]);

//   useEffect(() => {
//     if (paymentIntentData) {
//       setClientSecret(paymentIntentData?.client_secret);
//     }
//   }, [paymentIntentData]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        // <></>
        <div>
          <Heading
            title={data.course.name + " - Live English With Sushil"}
            description="Live English With Sushil is a platform for students to learn and get help from teacher"
            keywords={data.course.tags}
          />
          <Header
            open={open}
            setOpen={setOpen}
            activeItem={1}
            setRoute={setRoute}
            route={route}
          />        
           <CourseDetails data={data.course} setRoute={setRoute} setOpen={setOpen} />
          <Footer />
        </div>
      )}
    </>
  );
};

export default CourseDetailsPage;