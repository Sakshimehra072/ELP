"use client"
import React from "react";
import AdminSidebar from "@/app/components/Admin/sidebar/AdminSidebar"
// import DashboardHero from "@/app/components/Admin/sidebar/DashboardHero"
// import DashboardHeader from "@/app/components/Admin/sidebar/DashboardHero"
import Heading from "@/app/utils/Heading"
import AdminProtected from "@/app/hooks/adminProtected"
import AllUsers from "@/app/components/Admin/Users/AllUsers"

const Page = () => {
  // const [open, setOpen] = useState(false);
  return (
    <div>
      <AdminProtected>
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
            {/* <DashboardHeader open={open} setOpen={setOpen} /> */}
            {/* <DashboardHero /> */}
            <AllUsers isTeam={false} />
          </div>
        </div>
        </AdminProtected>
    </div>
  )
}
export default Page