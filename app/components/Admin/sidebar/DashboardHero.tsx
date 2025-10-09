// "use client";
// // import { ThemeSwitcher } from "@/app/utils/ThemeSwitcher";
// import React, { FC, useState } from "react";
// // import { IoMdNotificationsOutline } from "react-icons/io";
// import DashboardHeader from "./DashboardHeader";
// import DashboardWidgets from "../Widgets/DashboardWidgets";

// type Props = {
//   isDashboard?: boolean;
// };

// const DashboardHero: FC<Props> = ({ isDashboard }: Props) => {
//   const [open, setOpen] = useState(false);
//   return (
//     <div>
//       <DashboardHeader open={open} setOpen={setOpen} />
//       {isDashboard && <DashboardWidgets open={open} />}
//     </div>
//   );
// };
// export default DashboardHero;



import React, { Dispatch, SetStateAction } from 'react';

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;  // Added: This was missing, causing the type mismatch
  // Add any other existing props here, e.g., isDashboard?: boolean;
}

const DashboardHeader: React.FC<Props> = ({ open, setOpen }) => {
  // Your component logic here, e.g., rendering a header with a toggle button
  return (
    <header>
      <h1>Dashboard Header</h1>
      <button onClick={() => setOpen(!open)}>
        Toggle {open ? 'Close' : 'Open'}
      </button>
    </header>
  );
};

export default DashboardHeader;