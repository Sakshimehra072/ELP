"use client"

import DashboardHero from "../components/Admin/DashboardHero"
import AdminSidebar from "../components/Admin/sidebar/AdminSidebar"
import Heading from "../utils/Heading"


type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <Heading
        title="LMS - Admin"
        description="LMS is a platform for students to learn and get help from teachers"
        keywords="Programming, MERN, Redux, Machine Learning"
        />
         <div className="flex h-min-screen">
          <div className="1500px:w-[16%] w-1/5">
            <AdminSidebar />
          </div>
          <div className="w-[85%]">
            <DashboardHero/>
          </div>
        </div>
    {/* <AdminProtected> */}
    <Heading
    title= "Elearning-Admin"
    description="Elearning is the platform for student to learn and get the help from teachers"
    keywords="Spoken English, IELTS, Grammer"
    />
    <div className="flex h-[200vh]">
        <div className="1500px:w-[16%] w-1/5"> 
            <AdminSidebar/>
        </div>
        <div className="w-[85%]">
          <DashboardHero />
        </div>
    </div>
    {/* </AdminProtected> */}
    </div>
  )
}

export default page