// // // // "use client";
// // // // import React from "react";

// // // // const DashboardPage = () => {
// // // //   // Example static data (can be fetched later from API/DB)
// // // //   const stats = {
// // // //     lessonsCompleted: 24,
// // // //     totalLessons: 40,
// // // //     quizzesTaken: 12,
// // // //     accuracy: "85%",
// // // //     streak: 7, // days
// // // //   };

// // // //   const recentLessons = [
// // // //     { title: "Vocabulary: Travel", status: "Completed", score: "90%" },
// // // //     { title: "Grammar: Past Tense", status: "Completed", score: "80%" },
// // // //     { title: "Listening: Daily Conversations", status: "In Progress", score: "-" },
// // // //   ];

// // // //   return (
// // // //     <div className="space-y-8">
// // // //       {/* Title */}
// // // //       <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
// // // //         English Learning Dashboard
// // // //       </h1>

// // // //       {/* Stats Cards */}
// // // //       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
// // // //         <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center">
// // // //           <h3 className="text-sm text-gray-500 dark:text-gray-400">Lessons Completed</h3>
// // // //           <p className="text-2xl font-bold">{stats.lessonsCompleted}/{stats.totalLessons}</p>
// // // //         </div>
// // // //         <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center">
// // // //           <h3 className="text-sm text-gray-500 dark:text-gray-400">Quizzes Taken</h3>
// // // //           <p className="text-2xl font-bold">{stats.quizzesTaken}</p>
// // // //         </div>
// // // //         <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center">
// // // //           <h3 className="text-sm text-gray-500 dark:text-gray-400">Accuracy</h3>
// // // //           <p className="text-2xl font-bold">{stats.accuracy}</p>
// // // //         </div>
// // // //         <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center">
// // // //           <h3 className="text-sm text-gray-500 dark:text-gray-400">Streak</h3>
// // // //           <p className="text-2xl font-bold">{stats.streak} days 🔥</p>
// // // //         </div>
// // // //         <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center">
// // // //           <h3 className="text-sm text-gray-500 dark:text-gray-400">Level</h3>
// // // //           <p className="text-2xl font-bold">Intermediate</p>
// // // //         </div>
// // // //       </div>

// // // //       {/* Progress Bar */}
// // // //       <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
// // // //         <h2 className="text-lg font-semibold mb-4">Overall Progress</h2>
// // // //         <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
// // // //           <div
// // // //             className="bg-blue-600 h-4 rounded-full"
// // // //             style={{ width: `${(stats.lessonsCompleted / stats.totalLessons) * 100}%` }}
// // // //           ></div>
// // // //         </div>
// // // //         <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
// // // //           {stats.lessonsCompleted} of {stats.totalLessons} lessons completed
// // // //         </p>
// // // //       </div>

// // // //       {/* Recent Lessons */}
// // // //       <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
// // // //         <h2 className="text-lg font-semibold mb-4">Recent Lessons</h2>
// // // //         <table className="w-full border-collapse">
// // // //           <thead>
// // // //             <tr className="text-left border-b border-gray-300 dark:border-gray-700">
// // // //               <th className="py-2">Lesson</th>
// // // //               <th className="py-2">Status</th>
// // // //               <th className="py-2">Score</th>
// // // //             </tr>
// // // //           </thead>
// // // //           <tbody>
// // // //             {recentLessons.map((lesson, idx) => (
// // // //               <tr key={idx} className="border-b border-gray-200 dark:border-gray-700">
// // // //                 <td className="py-2">{lesson.title}</td>
// // // //                 <td className="py-2">{lesson.status}</td>
// // // //                 <td className="py-2">{lesson.score}</td>
// // // //               </tr>
// // // //             ))}
// // // //           </tbody>
// // // //         </table>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default DashboardPage;


// // "use client";
// // import { ThemeSwitcher } from "@/app/utils/ThemeSwitcher";
// // import {
// //   useGetAllNotificationQuery,
// //   // useUpdateNotificationStatusMutation,
// // } from "@/redux/features/notifications/notifiationsApi";
// // // import React, { FC, useEffect, useState } from "react";
// // import { IoMdNotificationsOutline } from "react-icons/io";
// // // import socketIO from "socket.io-client";
// // import { format } from "timeago.js";
// // // const ENDPOINT = process.env.NEXT_PUBLIC_SOCKET_SERVER_URI || "";
// // // const socketId = socketIO(ENDPOINT, { transports: ["websocket"] });

// // type Props = {
// //   open?: boolean;
// //   setOpen?: any;
// // };

// // const DashboardHeader: FC<Props> = ({ open, setOpen }) => {
// //   const { data, refetch } = useGetAllNotificationQuery(undefined, {
// //     refetchOnMountOrArgChange: true,
// //   });
// //   const [updateNotificationStatus, { isSuccess }] =
// //     useUpdateNotificationStatusMutation();
// //   const [notification, setNotification] = useState<any>([]);
// //   const [audio] = useState(
// //     new Audio(
// //       "https://res.cloudinary.com/dc9q2yi1s/video/upload/v1714814391/uf9ylzi2ca6prvaujmad.wav"
// //     )
// //   );

// //   const playerNotificationSound = () => {
// //     audio.play();
// //   };

// //   useEffect(() => {
// //     if (data) {
// //       setNotification(
// //         data.notifications.filter((item: any) => item.status === "unread")
// //       );
// //     }
// //     if (isSuccess) {
// //       refetch();
// //     }
// //     audio.load();
// //   }, [data, isSuccess]);

// //   useEffect(() => {
// //     socketId.on("newNotification", (data) => {
// //       refetch();
// //       playerNotificationSound();
// //     });
// //   }, []);

// //   const handleNotificationStatusChange = async (id: string) => {
// //     await updateNotificationStatus(id);
// //   };

// //   return (
// //     <div className="w-full flex items-center justify-end p-6 fixed top-5 right-0">
// //       <ThemeSwitcher />
// //       <div
// //         className="relative cursor-pointer m-2"
// //         onClick={() => setOpen(!open)}
// //       >
// //         <IoMdNotificationsOutline className="text-2xl cursor-pointer dark:text-white text-black" />
// //         {/* <span className="absolute -top-3 -right-2 bg-[#3ccba0] rounded-full w-[20px] h-[20px] text-[12px] flex items-center justify-center text-white">
// //           {notification && notification.length}
// //         </span> */}
// //       </div>
// //       {open && (
// //         <div className="w-[350px] h-[50vh] dark:bg-[#111c43] bg-white shadow-xl absolute top-16 z-[99999] rounded">
// //           <h5 className="text-center text-[20px] font-Poopins text-black dark:text-white p-3">
// //             Notification
// //           </h5>

// //           {notification &&
// //             notification.map((item: any, index: number) => (
// //               <div
// //                 className="dark:bg-[#2d3a4ea1] bg-[@00000013] font-Poppins border-b dark:border-b-[#ffffff47] border-b-[#0000000f]"
// //                 key={index}
// //               >
// //                 <div className="w-full flex times-center justify-between p-2">
// //                   <p className="text-black dark:text-white">{item.title}</p>
// //                   <p
// //                     className="text-black dark:text-white cursor-pointer"
// //                     onClick={() => handleNotificationStatusChange(item._id)}
// //                   >
// //                     Mark as read
// //                   </p>
// //                 </div>
// //                 <p className="px-2 text-black dark:text-white">
// //                   {item.message}
// //                 </p>
// //                 <p className="p-2 text-black dark:text-white text-[14px]">
// //                   {format(item.createdAt)}
// //                 </p>
// //               </div>
// //             ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default ;






// // "use client";
// // import React, { FC } from "react";

// // type Props = {
// //   open?: boolean;
// //   // setOpen?: any;
// // };

// // const DashboardHeader: FC<Props> = () => {
// //   return (
// //     <>
// //     </>
// //     // <div className="p-6">
// //     //   Hello
// //     // </div>
// //   );
// // };

// // export default DashboardHeader;




// "use client";
// import React, { FC, useEffect, useState } from "react";
// import { ThemeSwitcher } from "@/app/utils/ThemeSwitcher";
// import {
//   useGetAllNotificationQuery,
//   useUpdateNotificationStatusMutation,
// } from "@/redux/features/notifications/notifiationsApi";
// import { IoMdNotificationsOutline } from "react-icons/io";
// import { format } from "timeago.js";
// import socketIO from "socket.io-client";

// const ENDPOINT = process.env.NEXT_PUBLIC_SOCKET_SERVER_URI || "";
// const socketId = socketIO(ENDPOINT, { transports: ["websocket"] });

// type Props = {
//   open?: boolean;
//   setOpen?: (value: boolean) => void;
// };

// const DashboardHeader: FC<Props> = ({ open = false, setOpen }) => {
//   const { data, refetch } = useGetAllNotificationQuery(undefined, {
//     refetchOnMountOrArgChange: true,
//   });

//   const [updateNotificationStatus, { isSuccess }] =
//     useUpdateNotificationStatusMutation();

//   const [notification, setNotification] = useState<any[]>([]);
//   const [audio] = useState(
//     new Audio(
//       "https://res.cloudinary.com/dc9q2yi1s/video/upload/v1714814391/uf9ylzi2ca6prvaujmad.wav"
//     )
//   );

//   const playNotificationSound = () => audio.play();

//   useEffect(() => {
//     if (data) {
//       setNotification(
//         data.notifications.filter((item: any) => item.status === "unread")
//       );
//     }
//     if (isSuccess) refetch();
//     audio.load();
//   }, [data, isSuccess]);

//   useEffect(() => {
//     socketId.on("newNotification", () => {
//       refetch();
//       playNotificationSound();
//     });
//     return () => {
//       socketId.off("newNotification");
//     };
//   }, []);

//   const handleNotificationStatusChange = async (id: string) => {
//     await updateNotificationStatus(id);
//   };

//   return (
//     <div className="w-full flex items-center justify-end p-6 fixed top-5 right-0">
//       <ThemeSwitcher />
//       <div
//         className="relative cursor-pointer m-2"
//         onClick={() => setOpen && setOpen(!open)}
//       >
//         <IoMdNotificationsOutline className="text-2xl cursor-pointer dark:text-white text-black" />
//         {notification.length > 0 && (
//           <span className="absolute -top-3 -right-2 bg-[#3ccba0] rounded-full w-[20px] h-[20px] text-[12px] flex items-center justify-center text-white">
//             {notification.length}
//           </span>
//         )}
//       </div>

//       {open && (
//         <div className="w-[350px] h-[50vh] overflow-y-auto dark:bg-[#111c43] bg-white shadow-xl absolute top-16 z-[99999] rounded">
//           <h5 className="text-center text-[20px] font-Poppins text-black dark:text-white p-3">
//             Notifications
//           </h5>

//           {notification.map((item: any, index: number) => (
//             <div
//               key={index}
//               className="dark:bg-[#2d3a4ea1] bg-[#00000013] font-Poppins border-b dark:border-b-[#ffffff47] border-b-[#0000000f]"
//             >
//               <div className="w-full flex items-center justify-between p-2">
//                 <p className="text-black dark:text-white">{item.title}</p>
//                 <p
//                   className="text-[#3ccba0] cursor-pointer text-sm"
//                   onClick={() => handleNotificationStatusChange(item._id)}
//                 >
//                   Mark as read
//                 </p>
//               </div>
//               <p className="px-2 text-black dark:text-white">{item.message}</p>
//               <p className="p-2 text-black dark:text-white text-[14px]">
//                 {format(item.createdAt)}
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default DashboardHeader;



"use client";
import React from "react";

const DashboardPage = () => {
  // Example static data (can be fetched later from API/DB)
  const stats = {
    lessonsCompleted: 24,
    totalLessons: 40,
    quizzesTaken: 12,
    accuracy: "85%",
    streak: 7, // days
  };

  const recentLessons = [
    { title: "Vocabulary: Travel", status: "Completed", score: "90%" },
    { title: "Grammar: Past Tense", status: "Completed", score: "80%" },
    { title: "Listening: Daily Conversations", status: "In Progress", score: "-" },
  ];

  return (
    <div className="space-y-8">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
        English Learning Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center">
          <h3 className="text-sm text-gray-500 dark:text-gray-400">Lessons Completed</h3>
          <p className="text-2xl font-bold">{stats.lessonsCompleted}/{stats.totalLessons}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center">
          <h3 className="text-sm text-gray-500 dark:text-gray-400">Quizzes Taken</h3>
          <p className="text-2xl font-bold">{stats.quizzesTaken}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center">
          <h3 className="text-sm text-gray-500 dark:text-gray-400">Accuracy</h3>
          <p className="text-2xl font-bold">{stats.accuracy}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center">
          <h3 className="text-sm text-gray-500 dark:text-gray-400">Streak</h3>
          <p className="text-2xl font-bold">{stats.streak} days 🔥</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center">
          <h3 className="text-sm text-gray-500 dark:text-gray-400">Level</h3>
          <p className="text-2xl font-bold">Intermediate</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Overall Progress</h2>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
          <div
            className="bg-blue-600 h-4 rounded-full"
            style={{ width: `${(stats.lessonsCompleted / stats.totalLessons) * 100}%` }}
          ></div>
        </div>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {stats.lessonsCompleted} of {stats.totalLessons} lessons completed
        </p>
      </div>

      {/* Recent Lessons */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Recent Lessons</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left border-b border-gray-300 dark:border-gray-700">
              <th className="py-2">Lesson</th>
              <th className="py-2">Status</th>
              <th className="py-2">Score</th>
            </tr>
          </thead>
          <tbody>
            {recentLessons.map((lesson, idx) => (
              <tr key={idx} className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2">{lesson.title}</td>
                <td className="py-2">{lesson.status}</td>
                <td className="py-2">{lesson.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardPage;