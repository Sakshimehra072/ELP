'use client'
import CourseDetailsPage from "../../components/Course/CourseDetailsPage";

const Page = ({params}:any) =>{
    return(
        <div>
            <CourseDetailsPage id={params.id} />
        </div>
    )
}

export default Page; 



// import CourseDetailsPage from "@/app/components/Course/CourseDetailsPage";
// import React from "react";

// type Props = {};

// const page = ({ params }: any) => {
//   const id = params?.id;
//   return <CourseDetailsPage id={id} />;
// };

// export default page;