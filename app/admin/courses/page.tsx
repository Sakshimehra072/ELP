"use client"

import AdminSidebar from "@/app/components/Admin/sidebar/AdminSidebar"
import DashboardHero from "@/app/components/Admin/sidebar/DashboardHero"
import Heading from "@/app/utils/Heading"
import AllCourses  from "../../components/Admin/Course/AllCourses"





type Props = {}

const page = (props: Props) => {
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
            <DashboardHero />
            <AllCourses/>
          </div>
        </div>
    </div>
  )
}

export default page