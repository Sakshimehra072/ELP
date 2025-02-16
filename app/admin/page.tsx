"use client"

import Heading from "../utils/Heading"
import AdminSidebar from "../components/Admin/sidebar/AdminSidebar"
// import AdminProtected from "../hooks/adminProtected"
import DashboardHero from "../components/Admin/DashboardHero"

type Props = {}

const page = (props: Props) => {
  return (
    <div>
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