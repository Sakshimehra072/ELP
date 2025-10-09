"use client"
import AdminSidebar from "@/app/components/Admin/sidebar/AdminSidebar"
import Heading from "@/app/utils/Heading"
import AdminProtected from "@/app/hooks/adminProtected"
import AllUsers from "@/app/components/Admin/Users/AllUsers"
// import DashboardHero from "@/app/components/Admin/sidebar/DashboardHero"


const Page = () => {
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
            {/* <DashboardHero /> */}
            <AllUsers isTeam={true}/>
          </div>
        </div>
        </AdminProtected>
    </div>
  )
}

export default Page