// "use client";
// import React, { FC, useState } from "react";
// import Heading from "./utils/Heading";
// import Header from "./components/Header";
// import Hero from "./components/Route/Hero";
// import Courses from "./components/Route/Courses";
// import Reviews from "./components/Route/Reviews";
// import FAQ from "./components/FAQ/FAQ";
// import Footer from "./components/Footer";

// // interface Props {}

// const Page: FC = () => {
//   const [open, setOpen] = useState(false);
//   const [activeItem] = useState(0);
//   const [route, setRoute] = useState("Login");

//   return (
//     <div>
//       <Heading
//         title="Elearning"
//         description="Elearning is a prlatform for student to learn and get help from teachers"
//         keywords="Programming, MERN, Redux, Machine Learning"
//       />
//       <Header
//         open={open}
//         setOpen={setOpen}
//         activeItem={activeItem}
//         setRoute={setRoute}
//         route={route}
//       />
//       <Hero />
//       <Courses />
//       <Reviews />
//       <FAQ />
//       <Footer />
//     </div>
//   );
// };

// export default Page;

"use client";
import React, { FC } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
import Hero from "./components/Route/Hero";
import Courses from "./components/Route/Courses";
import Reviews from "./components/Route/Reviews";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer";

const Page: FC = () => {
  const [open, setOpen] = React.useState(false);
  const [activeItem] = React.useState(0);
  const [route, setRoute] = React.useState("Login");

  return (
    <div>
      <Heading
        title="Elearning"
        description="Elearning is a platform for students to learn and get help from teachers"
        keywords="Programming, MERN, Redux, Machine Learning"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <Hero />
      <Courses />
      <Reviews />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Page;