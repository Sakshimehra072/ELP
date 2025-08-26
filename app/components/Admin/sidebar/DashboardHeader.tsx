"use client";
import ThemeSwitcher from "@/app/utils/ThemeSwitcher";
import React, { FC, useState } from "react";
import AllCourses from "../Course/AllCourses";

type Props = {};

const DashboardHeader: FC<Props> = () => {
  const [open, setOpen] = useState(false);

  return (
    
    <>
    <AllCourses/>
    </>
  );
};

export default DashboardHeader;
