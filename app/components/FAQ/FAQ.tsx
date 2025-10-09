// import { styles } from "@/app/styles/style";
// import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
// import React, { useEffect, useState } from "react";
// import { HiMinus, HiPlus } from "react-icons/hi";

// type Props = {};

// const FAQ = (props: Props) => {
//   const { data } = useGetHeroDataQuery("FAQ", {});
//   const [activeQuestion, setActiveQuestion] = useState(null);
//   const [questions, setQuestions] = useState<any[]>([]);

//   useEffect(() => {
//     if (data) {
//       setQuestions(data.layout.faq);
//     }
//   }, [data]);

//   const toggleQuestion = (id: any) => {
//     setActiveQuestion(activeQuestion === id ? null : id);
//   };

//   return (
//     <div>
//       <div className="w-[90%] 800px:w-[80%] m-auto">
//         <h1 className={`${styles.title} 800px:text-[40px]`}>
  
//           Frequenly Asked Questions
//         </h1>
//         <div className="mt-12">
//           <dl className="space-y-8">
//             {questions.map((q) => (
//               <div
//                 key={q.id}
//                 className={`${
//                   q._id !== questions[0]?._id && "border-t"
//                 } border-gray-200 pt-6`}
//               >
//                 <dt className="text-lg">
//                   <button
//                     className="flex items-start justify-between w-full text-left focus:outline-none"
//                     onClick={() => toggleQuestion(q._id)}
//                   >
//                     <span className="font-medium text-black dark:text-white">
//                       {q.question}
//                     </span>
//                     <span className="ml-6 flex-shrink-0">
//                       {activeQuestion === q._id ? (
//                         <HiMinus className=" h-6 w-6 text-black dark:text-white" />
//                       ) : (
//                         <HiPlus className=" h-6 w-6 text-black dark:text-white" />
//                       )}
//                     </span>
//                   </button>
//                 </dt>
//                 {activeQuestion === q._id && (
//                   <dd className="mt-2 pr-12">
//                     <p className="text-base font-Poppins text-black dark:text-white">
//                       {q.answer}
//                     </p>
//                   </dd>
//                 )}
//               </div>
//             ))}
//           </dl>
//           <br />
//           <br />
//           <br />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQ;




import { styles } from "@/app/styles/style";
import React, { useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";

type Faq = {
  id: string;
  question: string;
  answer: string;
};

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);

  const questions: Faq[] = [
    {
      id: "1",
      question: "Will I receive a certificate for each course?",
      answer:
        "Yes, a certificate of completion is awarded for each course upon successful completion.",
    },
    {
      id: "2",
      question: "Are the courses self-paced or scheduled?",
      answer:
        "All courses are designed to be self-paced, allowing learners the flexibility to study according to their own schedules.",
    },
    {
      id: "3",
      question: "Do I need prior experience to enroll in the courses?",
      answer:
        "No prior experience is required. Our courses are structured to accommodate learners of all levels.",
    },
    {
      id: "4",
      question: "Is there any deadline for completing the courses?",
      answer:
        "No, there is no deadline. Once enrolled, you receive lifetime access to the course materials and can complete the course at your convenience.",
    },
    {
      id: "5",
      question: "Can I access the course on mobile devices?",
      answer:
        "Yes, all courses are fully accessible on mobile devices for learning on the go.",
    },
    {
      id: "6",
      question: "Do you offer refunds if I'm not satisfied with a course?",
      answer:
        "Please refer to our refund policy for detailed information regarding eligibility and the process for requesting a refund.",
    },
    {
      id: "7",
      question: "Are there any assessments or quizzes in the courses?",
      answer:
        "Yes, most courses include assessments and quizzes to help you reinforce your learning and track your progress.",
    },
  ];

  const toggleQuestion = (id: string) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    // <div>
    //   <div className="w-[90%] 800px:w-[80%] m-auto">
    //     <h1 className={`${styles.title} 800px:text-[40px]`}>
    //       Frequently Asked Questions
    //     </h1>
    //     <div className="mt-12">
    //       <dl className="space-y-8">
    //         {questions.map((q) => (
    //           <div
    //             key={q.id}
    //             className={`${q.id !== questions[0].id && "border-t"} border-gray-200 pt-6`}
    //           >
    //             <dt className="text-lg">
    //               <button
    //                 className="flex items-start justify-between w-full text-left focus:outline-none"
    //                 onClick={() => toggleQuestion(q.id)}
    //               >
    //                 <span className="font-medium text-black dark:text-white">
    //                   {q.question}
    //                 </span>
    //                 <span className="ml-6 flex-shrink-0">
    //                   {activeQuestion === q.id ? (
    //                     <HiMinus className=" h-6 w-6 text-black dark:text-white" />
    //                   ) : (
    //                     <HiPlus className=" h-6 w-6 text-black dark:text-white" />
    //                   )}
    //                 </span>
    //               </button>
    //             </dt>
    //             {activeQuestion === q.id && (
    //               <dd className="mt-2 pr-12">
    //                 <p className="text-base font-Poppins text-black dark:text-white">
    //                   {q.answer}
    //                 </p>
    //               </dd>
    //             )}
    //           </div>
    //         ))}
    //       </dl>
    //       <br />
    //       <br />
    //       <br />
    //     </div>
    //   </div>
    // </div>

    <div className="pt-[80px] bg-white dark:bg-gray-900 transition-colors duration-300">
  <div className="w-[90%] 800px:w-[80%] m-auto">
    <h1 className={`${styles.title} 800px:text-[40px] text-center`}>
      Frequently Asked Questions
    </h1>

    <div className="mt-12">
      <dl className="space-y-8">
        {questions.map((q) => (
          <div
            key={q.id}
            className={`${
              q.id !== questions[0].id ? "border-t border-gray-900 dark:border-gray-300" : ""
            } pt-6`}
          >
            <dt className="text-lg">
              <button
                className="flex items-start justify-between w-full text-left focus:outline-none"
                onClick={() => toggleQuestion(q.id)}
              >
                <span className="font-medium text-black dark:text-white">
                  {q.question}
                </span>
                <span className="ml-6 flex-shrink-0">
                  {activeQuestion === q.id ? (
                    <HiMinus className="h-6 w-6 text-black dark:text-white" />
                  ) : (
                    <HiPlus className="h-6 w-6 text-black dark:text-white" />
                  )}
                </span>
              </button>
            </dt>

            {activeQuestion === q.id && (
              <dd className="mt-2 pr-12">
                <p className="text-base font-Poppins text-black dark:text-white leading-relaxed">
                  {q.answer}
                </p>
              </dd>
            )}
          </div>
        ))}
      </dl>

      <br />
      <br />
      <br />
    </div>
  </div>
</div>


  );
};

export default FAQ;
