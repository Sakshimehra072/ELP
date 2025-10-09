"use client"
import EditHero from "@/app/components/Admin/Customization/EditHero";
import AdminSidebar from "@/app/components/Admin/sidebar/AdminSidebar";
import DashboardHero from "@/app/components/Admin/sidebar/DashboardHero";
import Heading from "@/app/utils/Heading";
import React, { useState } from "react";

const Page = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Heading
        title="LMS - Admin"
        description="LMS is a platform for students to learn and get help from teachers"
        keywords="Programming, MERN, Redux, Machine Learning"
      />
      <div className="flex h-screen">
        <div className="1500px:w-[16%] w-1/5">
          <AdminSidebar />
        </div>
        <div className="w-[85%]">
          <DashboardHero open={open} setOpen={setOpen} />
          <EditHero />
        </div>
      </div>
    </div>
  );
};

export default Page;