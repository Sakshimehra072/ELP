// // "use client";
// // import { styles } from "@/app/styles/style";
// // // import { useEditCourseMutation } from "@/redux/features/courses/coursesApi";
// // import {
// //   useEditLayoutMutation,
// //   useGetHeroDataQuery,
// // } from "@/redux/features/layout/layoutApi";
// // import React, { useEffect, useState } from "react";
// // import toast from "react-hot-toast";
// // import { AiOutlineDelete } from "react-icons/ai";
// // import { HiMinus, HiPlus } from "react-icons/hi";
// // import { IoMdAddCircleOutline } from "react-icons/io";
// // import Loader from "../../Loader/Loader"
// // import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
// // // import Loader from "../../Loader";

// // // type Props = {};

// // type Faq = {
// //   _id?: string;
// //   question: string;
// //   answer: string;
// //   active?: boolean;
// // };


// // const EditFaq = () => {
// //   const { data, isLoading, refetch } = useGetHeroDataQuery("FAQ", {
// //     refetchOnMountOrArgChange: true,
// //   });
// //   const [editLayout, { isSuccess: layoutSuccess, error }] =
// //     useEditLayoutMutation();

// //   const [questions, setQuestions] = useState<Faq[]>([]);

// //   useEffect(() => {
// //     if (data) {
// //       setQuestions(data.layout.faq);
// //     }
// //     if (layoutSuccess) {
// //       refetch();
// //       toast.success("FAQ updated successfylly");
// //     }

// //     if (error) {
// //       if ("data" in error) {
// //         const errorData = error as FetchBaseQueryError & {
// //     data?: { message?: string };
// //   };
// //         toast.error(errorData?.data?.message || "Something went wrong");
// //       }
// //     }
// //   }, [data, layoutSuccess, error, refetch]);

// //   const toggleQuestion = (id: string | undefined) => {
// //     setQuestions((prevQuestions) =>
// //       prevQuestions.map((q) => (q._id === id ? { ...q, active: !q.active } : q))
// //     );
// //   };

// //   const handleQuestionChange = (id: string | undefined,  value: string) => {
// //     setQuestions((prevQuestions) =>
// //       prevQuestions.map((q) => (q._id === id ? { ...q, question: value } : q))
// //     );
// //   };
// //   const handleAnswerChange = (id: string | undefined,  value: string) => {
// //     setQuestions((prevQuestions) =>
// //       prevQuestions.map((q) => (q._id === id ? { ...q, answer: value } : q))
// //     );
// //   };

// //   const newFaqHandler = () => {
// //     setQuestions([
// //       ...questions,
// //       {
// //         question: "",
// //         answer: "",
// //       },
// //     ]);
// //   };

// //   // fucntion to check if the FAQ arrays are unchanged
// //   const areQuestionsUnchanged = (
// //     originalQuestions: Faq[],
// //     newQuestions: Faq[]
// //   ) => {
// //     return JSON.stringify(originalQuestions) === JSON.stringify(newQuestions);
// //   };

// //   const isAnyQuestionEmpty = (questions: Faq[]) => {
// //     return questions.some((q) => q.question === "" || q.answer === "");
// //   };

// //   const handleEdit = async () => {
// //     if (
// //       !areQuestionsUnchanged(data.layout.faq, questions) &&
// //       !isAnyQuestionEmpty(questions)
// //     ) {
// //       await editLayout({
// //         type: "FAQ",
// //         faq: questions,
// //       });
// //     }
// //   };

// //   return (
// //     <>
// //       {isLoading ? (
// //         <Loader />
// //       ) : (
// //         <div className="w-[98%] 800px:w-[80%] m-auto mt-[120px]">
// //           <div className="mt-12">
// //             <dl className="space-y-8">
// //               {questions.map((q: Faq) => (
// //                 <div
// //                   key={q._id}
// //                   className={`${
// //                     q._id !== questions[0]?._id && "border-t"
// //                   }  pt-6`}
// //                 >
// //                   <dt className="text-lg">
// //                     <div className="flex items-start dark:text-white text-black justify-between w-full text-left">
// //                       <input
// //                         value={q.question}
// //                         onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
// //                           handleQuestionChange(q._id, e.target.value)
// //                         }
// //                         placeholder={"Add your question...."}
// //                         className="bg-transparent focus:outline-none w-full"
// //                       />

// //                       <span
// //                         onClick={() => toggleQuestion(q._id)}
// //                         className="ml-6 flex-shrink-0"
// //                       >
// //                         {q.active ? (
// //                           <HiMinus className="h-6 w-6" />
// //                         ) : (
// //                           <HiPlus className="h-6 w-6" />
// //                         )}
// //                       </span>
// //                     </div>
// //                   </dt>
// //                   {q.active && (
// //                     <dd className="mt-2 pr-12">
// //                       <input
// //                         className={`${styles.input} border-none`}
// //                         value={q.answer}
// //                         onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
// //                           handleAnswerChange(q._id, e.target.value)
// //                         }
// //                         placeholder="Add your answer...."
// //                       />
// //                       <span className="ml-0 flex-shirnk-0 block mt-5">
// //                         <AiOutlineDelete
// //                           className="dark:text-white text-black text-[18px] cursor-pointer"
// //                           onClick={() => {
// //                             setQuestions((prevQuestion) =>
// //                               prevQuestion.filter(
// //                                 (item: Faq) => item._id !== q._id
// //                               )
// //                             );
// //                           }}
// //                         />
// //                       </span>
// //                     </dd>
// //                   )}
// //                 </div>
// //               ))}
// //             </dl>
// //             <br />
// //             <br />
// //             <IoMdAddCircleOutline
// //               className="dark:text-white text-black text-[25px] cursor-pointer"
// //               onClick={newFaqHandler}
// //             />
// //           </div>

// //           <div
// //             className={`${
// //               styles.button
// //             } !w-[100px] !min-h-[40px] dark:text-white text-black bg-[#cccccc34]
// //             ${
// //               areQuestionsUnchanged(data?.layout.faq, questions) ||
// //               isAnyQuestionEmpty(questions)
// //                 ? "!cursor-not-allowed"
// //                 : "!cursor-pointer !bg-[#42d383]"
// //             } !rounded absolute bottom-12 right-12
// //             `}
// //             onClick={
// //               areQuestionsUnchanged(data?.layout.faq, questions) ||
// //               isAnyQuestionEmpty(questions)
// //                 ? () => null
// //                 : handleEdit
// //             }
// //           >
// //             Save
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   );
// // };

// // export default EditFaq;




// "use client";
// import { styles } from "@/app/styles/style";
// import React, { useState } from "react";
// import { AiOutlineDelete } from "react-icons/ai";
// import { HiMinus, HiPlus } from "react-icons/hi";
// import { IoMdAddCircleOutline } from "react-icons/io";

// type Faq = {
//   _id: string;
//   question: string;
//   answer: string;
//   active?: boolean;
// };

// const EditFaq = () => {
//   // Static FAQ data
//   const [questions, setQuestions] = useState<Faq[]>([
//     {
//       _id: "1",
//       question: "Will I receive a certificate for each course?",
//       answer: "Yes, a certificate of completion is awarded for each course upon successful completion.",
//       active: false,
//     },
//     {
//       _id: "2",
//       question: "Are the courses self-paced or scheduled?",
//       answer: "All courses are designed to be self-paced, allowing learners the flexibility to study according to their own schedules.",
//       active: false,
//     },
//     {
//       _id: "3",
//       question: "Do I need prior experience to enroll in the courses?",
//       answer: "No prior experience is required. Our courses are structured to accommodate learners of all levels.",
//       active: false,
//     },
//     {
//       _id: "4",
//       question: "Is there any deadline for completing the courses?",
//       answer: "No, there is no deadline. Once enrolled, you receive lifetime access to the course materials and can complete the course at your convenience.",
//       active: false,
//     },
//     {
//       _id: "5",
//       question: "Can I access the course on mobile devices?",
//       answer: "Yes, all courses are fully accessible on mobile devices for learning on the go.",
//       active: false,
//     },
//     {
//       _id: "6",
//       question: "Do you offer refunds if I'm not satisfied with a course?",
//       answer: "Please refer to our refund policy for detailed information regarding eligibility and the process for requesting a refund.",
//       active: false,
//     },
//     {
//       _id: "7",
//       question: "Are there any assessments or quizzes in the courses?",
//       answer: "Yes, most courses include assessments and quizzes to help you reinforce your learning and track your progress.",
//       active: false,
//     },
//   ]);

//   const toggleQuestion = (id: string) => {
//     setQuestions((prev) =>
//       prev.map((q) => (q._id === id ? { ...q, active: !q.active } : q))
//     );
//   };

//   const handleQuestionChange = (id: string, value: string) => {
//     setQuestions((prev) =>
//       prev.map((q) => (q._id === id ? { ...q, question: value } : q))
//     );
//   };

//   const handleAnswerChange = (id: string, value: string) => {
//     setQuestions((prev) =>
//       prev.map((q) => (q._id === id ? { ...q, answer: value } : q))
//     );
//   };

//   const newFaqHandler = () => {
//     const newId = (questions.length + 1).toString();
//     setQuestions([...questions, { _id: newId, question: "", answer: "", active: true }]);
//   };

//   const deleteFaq = (id: string) => {
//     setQuestions((prev) => prev.filter((q) => q._id !== id));
//   };

//   return (
//     <div className="w-[98%] 800px:w-[80%] m-auto mt-[120px]">
//       <div className="mt-12">
//         <dl className="space-y-8">
//           {questions.map((q) => (
//             <div key={q._id} className={`${q._id !== questions[0]?._id && "border-t"} pt-6`}>
//               <dt className="text-lg">
//                 <div className="flex items-start text-black justify-between w-full text-left">
//                   <input
//                     value={q.question}
//                     onChange={(e) => handleQuestionChange(q._id, e.target.value)}
//                     placeholder="Add your question..."
//                     className="bg-transparent focus:outline-none w-full"
//                   />
//                   <span onClick={() => toggleQuestion(q._id)} className="ml-6 flex-shrink-0">
//                     {q.active ? <HiMinus className="h-6 w-6" /> : <HiPlus className="h-6 w-6" />}
//                   </span>
//                 </div>
//               </dt>
//               {q.active && (
//                 <div className="mt-2 pr-12">
//                   <input
//                     className={`${styles.input} border-none`}
//                     value={q.answer}
//                     onChange={(e) => handleAnswerChange(q._id, e.target.value)}
//                     placeholder="Add your answer..."
//                   />
//                   <span className="ml-0 block mt-5">
//                     <AiOutlineDelete
//                       className="text-black text-[18px] cursor-pointer"
//                       onClick={() => deleteFaq(q._id)}
//                     />
//                   </span>
//                 </div>
//               )}
//             </div>
//           ))}
//         </dl>
//         <br />
//         <br />
//         <IoMdAddCircleOutline
//           className="text-black text-[25px] cursor-pointer"
//           onClick={newFaqHandler}
//         />
//       </div>
//     </div>
//   );
// };

// export default EditFaq;
