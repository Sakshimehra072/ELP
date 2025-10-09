"use client"
import CreateCourse from "@/app/components/Admin/Course/CreateCourse";
import AdminSidebar from "@/app/components/Admin/sidebar/AdminSidebar";
import Heading from "@/app/utils/Heading";

const Page = () => {
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
          {/* <DashboardHero open={open} setOpen={setOpen} /> */}
          <CreateCourse />
        </div>
      </div>
    </div>
  );
};

export default Page;
