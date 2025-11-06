// // "use client";
// // import React, { FC, useState } from "react";
// // import Protected from "../hooks/useProtected"
// // import Heading from "../utils/Heading";
// // import Header from "../components/Header";
// // import { useSelector } from "react-redux";
// // import Profile from "../components/Profile/Profile";
// // import type { RootState } from "@/redux/store";

// // // type Props = {};

// // const Page: FC = () => {
// //   const [open, setOpen] = useState(false);
// //   const [activeItem] = useState(5);
// //   const [route, setRoute] = useState("Login");
// //   const { user } = useSelector((state: RootState) => state.auth);

// //   return (
// //     <div className="min-h-screen">
// //       <Protected>
// //       <Heading
// //         title={`${user?.name} profile - LMS`}
// //         description="Elearning is a platform for student to learn and get help from teachers"
// //         keywords="Programming, MERN, Redux, Machine Learning"
// //       />
// //       <Header
// //         open={open}
// //         setOpen={setOpen}
// //         activeItem={activeItem}
// //         setRoute={setRoute}
// //         route={route}
// //       />
// //       <Profile user={user} />
// //       </Protected>


// //     </div>
// //   );
// // };

// // export default Page;



// "use client";
// import React, { FC, useState } from "react";
// import Protected from "../hooks/useProtected";
// import Heading from "../utils/Heading";
// import Header from "../components/Header";
// import { useSelector } from "react-redux";
// import Profile from "../components/Profile/Profile";
// import type { RootState } from "@/redux/store";

// const Page: FC = () => {
//   const [open, setOpen] = useState(false);
//   const [activeItem] = useState(5); // we only use the value
//   const [route, setRoute] = useState("Login");
//   const { user } = useSelector((state: RootState) => state.auth);

//   return (
//     <div className="min-h-screen">
//       <Protected>
//         <Heading
//           title={`${user?.name ?? "User"} profile - LMS`}
//           description="Elearning is a platform for students to learn and get help from teachers"
//           keywords="Programming, MERN, Redux, Machine Learning"
//         />
//         <Header
//           open={open}
//           setOpen={setOpen}
//           activeItem={activeItem}
//           setRoute={setRoute}
//           route={route}
//         />
//         {user && <Profile user={user} />}
//       </Protected>
//     </div>
//   );
// };

// export default Page;



// import React, { FC, useState } from "react";
// import Protected from "../hooks/useProtected";
// import Heading from "../utils/Heading";
// import Header from "../components/Header";
// import { useSelector } from "react-redux";
// import Profile from "../components/Profile/Profile";
// import type { RootState } from "@/redux/store";

// function getUserFromToken(token: string) {
//   try {
//     const payload = token.split('.')[1];
//     if (!payload) return null;
//     return JSON.parse(atob(payload));
//   } catch {
//     return null;
//   }
// }

// const Page: FC = () => {
//   const [open, setOpen] = useState(false);
//   const [activeItem] = useState(5); // we only use the value
//   const [route, setRoute] = useState("Login");
//   const { user } = useSelector((state: RootState) => state.auth);
//   const decodedUser = user ? getUserFromToken(user) : null;

//   return (
//     <div className="min-h-screen">
//       <Protected>
//         <Heading
//           title={`${decodedUser?.name ?? "User"} profile - LMS`}
//           description="Elearning is a platform for students to learn and get help from teachers"
//           keywords="Programming, MERN, Redux, Machine Learning"
//         />
//         <Header
//           open={open}
//           setOpen={setOpen}
//           activeItem={activeItem}
//           setRoute={setRoute}
//           route={route}
//         />
//         {decodedUser && <Profile user={decodedUser} />}
//       </Protected>
//     </div>
//   );
// };

// export default Page;

"use client";
import React, { FC, useState } from "react";
import Protected from "../hooks/useProtected"
import Heading from "../utils/Heading";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import Profile from "../components/Profile/Profile";
import type {RootState} from "@/redux/store"


const Page: FC = () => {
  const [open, setOpen] = useState(false);
  const [activeItem] = useState(5);
  const [route, setRoute] = useState("Login");
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div className="min-h-screen">
      <Protected>
        <Heading
          title={`${user|| "User"} profile - LMS`}
          description="Live English With Sushil is a platform for student to learn online"
          keywords="English, Spoken English, IELTS, Vocabulary, Accent Classes"
        />
        <Header
          open={open}
          setOpen={setOpen}
          activeItem={activeItem}
          setRoute={setRoute}
          route={route}
        />
        {user && <Profile user={user} />}
      </Protected>
    </div>
  );
};

export default Page;