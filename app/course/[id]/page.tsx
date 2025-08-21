'use client'
import CourseDetailsPage from "../../component";
import React from "react";

type Props = {};

const Page = ({ params }: any) => {
  const id = params?.id;
  return <CourseDetailsPage id={id} />;
};

export default page;