// "use client"
// import DashboardHero from "../components/Admin/sidebar/DashboardHero"
// import AdminSidebar from "../components/Admin/sidebar/AdminSidebar"
// import Heading from "../utils/Heading"

// const page = () => {
//   return (
//     <div>
//         <Heading
//         title="LMS - Admin"
//         description="LMS is a platform for students to learn and get help from teachers"
//         keywords="Programming, MERN, Redux, Machine Learning"
//         />
//         <div className="flex h-screen">
//           <div className="1500px:w-[16%] w-1/5">
//             <AdminSidebar />
//           </div>
//           <div className="w-[85%]">
//             <DashboardHero isDashboard={true} />
//           </div>
//         </div>
//     </div>
//   )
// }

// export default page


"use client"
import React, { useState } from "react";
import Heading from "../utils/Heading";
import AdminSidebar from "../components/Admin/sidebar/AdminSidebar";
import AdminProtected from "../hooks/adminProtected";
import DashboardHero from "../components/Admin/sidebar/DashboardHero";

const Page = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <AdminProtected>
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
            <DashboardHero open={open} setOpen={setOpen} />
          </div>
        </div>
      </AdminProtected>
    </div>
  );
};

export default Page;