"use client";
import React, { useState } from "react";
import Heading from "../utils/Heading";
import Header from "../components/Header";
// import Footer from "../components/Footer";
import FAQ from "../components/FAQ/FAQ";

// type Props = {};

const Page = () => {
  const [open, setOpen] = useState(false);
  const [activeItem] = useState(4);
  const [route, setRoute] = useState("Login");

  return (
    <div className="min-h-screen">
      <Heading
        title="FAQ - Live English With Sushil"
        description="Live English With Sushil is a learning management system for helping programmesr."
        keywords="English, Spoken English, IELTS, Vocabulary, Accent Classes, English Courses"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <br />
      <FAQ />
      <br />
      {/* <Footer /> */}
    </div>
  );
};

export default Page;