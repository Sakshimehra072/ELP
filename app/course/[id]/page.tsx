'use client'
<<<<<<< HEAD
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
=======
import CourseDetailsPage from "../../component";
import React from "react";

type Props = {};

const Page = ({ params }: any) => {
  const id = params?.id;
  return <CourseDetailsPage id={id} />;
};

export default page;
>>>>>>> 96da43a211587e8e58efa824cc434dc6e23578df
