<<<<<<< HEAD
"use client"
import CreateCourse from "@/app/components/Admin/Course/CreateCourse";
import AdminSidebar from "@/app/components/Admin/sidebar/AdminSidebar";
import DashboardHero from "@/app/components/Admin/sidebar/DashboardHero";
=======
import CreateCourse from "../../components/Admin/Course/CreateCourse";
import DashboardHero from "../../components/Admin/DashboardHero";
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
>>>>>>> bc4c904da31581c701dce1b672f7afd58c3668ef
import Heading from "@/app/utils/Heading";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Heading
        title="LMS - Admin"
        description="LMS is a platform for students to learn and get help from teachers"
        keywords="Programming, MERN, Redux, Machine Learning"
      />
      <div className="flex">
        <div className="1500px:w-[16%] w-1/5">
          <AdminSidebar />
        </div>
        <div className="w-[85%]">
          <DashboardHero />
          <CreateCourse />
        </div>
      </div>
    </div>
  );
};

export default page;