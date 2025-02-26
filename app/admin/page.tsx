"use client"

import Heading from "../utils/Heading"
<<<<<<< HEAD
import AdminSidebar from "../components/Admin/sidebar/AdminSidebar";
import DashboardHero from "../components/Admin/sidebar/DashboardHero";



=======
import AdminSidebar from "../components/Admin/sidebar/AdminSidebar"
// import AdminProtected from "../hooks/adminProtected"
import DashboardHero from "../components/Admin/DashboardHero"
>>>>>>> bc4c904da31581c701dce1b672f7afd58c3668ef

type Props = {}

const page = (props: Props) => {
  return (
    <div>
<<<<<<< HEAD
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
            <DashboardHero />
          </div>
        </div>
=======
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
>>>>>>> bc4c904da31581c701dce1b672f7afd58c3668ef
    </div>
  )
}

export default page