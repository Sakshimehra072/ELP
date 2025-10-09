// 'use client'
// import CourseDetailsPage from "../../components/Course/CourseDetailsPage";

// type PageProps = {
//   params: {
//     id: string;
//   };
// };


// const Page = ({params}: PageProps) =>{
//     return(
//         <div>
//             <CourseDetailsPage id={params.id} />
//         </div>
//     )
// }

// export default Page; 



'use client'
import CourseDetailsPage from "../../components/Course/CourseDetailsPage";
import { useParams } from "next/navigation";  // Fix 1: Import hook for client-side dynamic params.

const Page = () => {  // Fix 2: Remove props and PageProps—no params passed to client components.
  const params = useParams();  // Fix 3: Hook fetches { id: string } from current URL.
  const id = params?.id as string;  // Fix 4: Safely extract 'id' (optional chaining for type safety).

  return (
    <div>
      <CourseDetailsPage id={id} />  
      {/* // Fix 5: Pass resolved string 'id'. */}
    </div>
  );
};

export default Page;