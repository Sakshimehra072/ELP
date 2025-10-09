"use client"
import AdminSidebar from "@/app/components/Admin/sidebar/AdminSidebar"
import Heading from "@/app/utils/Heading"
import AllCourses  from "../../components/Admin/Course/AllCourses"
import AdminProtected from "@/app/hooks/adminProtected"

const page = () => {
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
            <AllCourses/>
          </div>
        </div>
        </AdminProtected>
    </div>
  )
}

export default page