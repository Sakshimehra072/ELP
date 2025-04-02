import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiLockPasswordLine } from "react-icons/ri";
import { SiCoursera } from "react-icons/si";
import { AiOutlineLogout } from "react-icons/ai";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import avatarDefault from "../../../public/assests/avatar.jpg";

type Props = {
  user: any;
  active: number;
  avatar: string | null;
  setActive: (active: number) => void;
  logoutHandler: any;
};

const SideBarProfile: FC<Props> = ({ user, active, avatar, setActive, logoutHandler }) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="w-full">
      {/* Profile Section */}
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer transition-all duration-300 ${
          active === 1 ? "dark:bg-slate-900 bg-white" : "bg-transparent"
        }`}
        onClick={() => setActive(1)}
        onMouseEnter={() => setHovered(1)}
        onMouseLeave={() => setHovered(null)}
      >
        <Image
          src={user.avatar?.url || avatar || avatarDefault}
          alt="Profile Avatar"
          className="w-[30px] h-[30px] object-cover rounded-full"
          width={30}
          height={30}
        />
        <h5 className="pl-2 hidden md:block font-Poppins dark:text-white text-black">My Account</h5>
        {hovered === 1 && <span className="md:hidden pl-2 text-sm dark:text-white text-black">My Account</span>}
      </div>

      {/* Change Password */}
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer transition-all duration-300 ${
          active === 2 ? "dark:bg-slate-900 bg-white" : "bg-transparent"
        }`}
        onClick={() => setActive(2)}
        onMouseEnter={() => setHovered(2)}
        onMouseLeave={() => setHovered(null)}
      >
        <RiLockPasswordLine size={20} className="dark:text-white text-black" />
        <h5 className="pl-2 hidden md:block font-Poppins dark:text-white text-black">Change Password</h5>
        {hovered === 2 && <span className="md:hidden pl-2 text-sm dark:text-white text-black">Change Password</span>}
      </div>

      {/* Enrolled Courses */}
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer transition-all duration-300 ${
          active === 3 ? "dark:bg-slate-900 bg-white" : "bg-transparent"
        }`}
        onClick={() => setActive(3)}
        onMouseEnter={() => setHovered(3)}
        onMouseLeave={() => setHovered(null)}
      >
        <SiCoursera size={20} className="dark:text-white text-black" />
        <h5 className="pl-2 hidden md:block font-Poppins dark:text-white text-black">Enrolled Courses</h5>
        {hovered === 3 && <span className="md:hidden pl-2 text-sm dark:text-white text-black">Enrolled Courses</span>}
      </div>

      {/* Admin Dashboard */}
      {user.role === "admin" && (
        <Link
          href="/admin"
          className={`w-full flex items-center px-3 py-4 cursor-pointer transition-all duration-300 ${
            active === 6 ? "dark:bg-slate-900 bg-white" : "bg-transparent"
          }`}
          onMouseEnter={() => setHovered(6)}
          onMouseLeave={() => setHovered(null)}
        >
          <MdOutlineAdminPanelSettings size={20} className="dark:text-white text-black" />
          <h5 className="pl-2 hidden md:block font-Poppins dark:text-white text-black">
            Admin Dashboard</h5>
          {hovered === 6 && <span className="md:hidden pl-2 text-sm dark:text-white text-black">Admin Dashboard</span>}
        </Link>
      )}

      {/* Logout */}
      <div 
        className={`w-full flex items-center px-3 py-4 cursor-pointer transition-all duration-300 ${
          active === 4 ? "dark:bg-slate-800 bg-white" : "bg-transparent"
        }`}
        onClick={logoutHandler}
        onMouseEnter={() => setHovered(4)}
        onMouseLeave={() => setHovered(null)}
      >
        <AiOutlineLogout size={20} className="dark:text-white text-black" />
        <h5 className="pl-2 hidden md:block font-Poppins dark:text-white text-black">Logout</h5>
        {hovered === 4 && <span className="md:hidden pl-2 text-sm dark:text-white text-black">Logout</span>}
      </div>
    </div>
  );
};

export default SideBarProfile;





// import React, { FC } from 'react'
// import avatarDefault from "../../../public/assests/avatar.jpg"
// import Image from 'next/image'
// import { RiLockPasswordLine } from "react-icons/ri"
// import { SiCoursera } from "react-icons/si"
// import { AiOutlineLogout } from "react-icons/ai"
// import { MdOutlineAdminPanelSettings } from "react-icons/md"
// import Link from 'next/link'

// type Props = {
//     user: any
//     active: number
//     avatar: string | null
//     setActive: (active: number) => void
//     logoutHandler: any
// }

// const SideBarProfile: FC<Props> = ({ user, active, avatar, setActive, logoutHandler }) => {
//     return (
//         <div className='w-full'>
//             <div
//                 className={`w-full flex items-center px-3 py-4 cursor-pointer ${active === 1 ? "dark:bg-slate-900 bg-white" : "bg-transparent"
//                     }`}
//                 onClick={() => setActive(1)}
//             >
//                 <Image
//                     src={user.avatar || avatar ? user.avatar.url || avatar : avatarDefault}
//                     alt=''
//                     className='w-[20px] h-[20px] object-cover 800px:w-[30px] 800px:h-[30px] cursor-pointer rounded-full'
//                     width={20}
//                     height={20}
//                 />
//                 <h5
//                     className='pl-2 800px:block hidden font-Poppins dark:text-white text-black'
//                 >
//                     My Account

//                 </h5>
//             </div>
//             <div
//                 className={`w-full flex items-center px-3 py-4 cursor-pointer ${active === 2 ? "dark:bg-slate-900 bg-white" : "bg-transparent"
//                     }`}
//                 onClick={() => setActive(2)}
//             >
//                 <RiLockPasswordLine size={20} className='dark:text-white text-black' />
//                 <h5
//                     className='pl-2 800px:block hidden font-Poppins dark:text-white text-black'
//                 >Change Password</h5>
//             </div>
//             <div
//                 className={`w-full flex items-center px-3 py-4 cursor-pointer ${active === 3 ? "dark:bg-slate-900 bg-white" : "bg-transparent"
//                     }`}
//                 onClick={() => setActive(3)}
//             >
//                 <SiCoursera size={20} className='dark:text-white text-black' />
//                 <h5
//                     className='pl-2 800px:block hidden font-Poppins dark:text-white text-black'
//                 >Enrolled Courses</h5>
//             </div>
//             {
//                 user.role === "admin" &&
//                 (
//                     <Link
//                         className={`w-full flex items-center px-3 py-4 cursor-pointer ${active === 6 ? "dark:bg-slate-900 bg-white" : "bg-transparent"
//                             }`}
//                         href={"/admin"}
//                     >
//                         <MdOutlineAdminPanelSettings size={20} className='dark:text-white text-black' />
//                         <h5
//                             className='pl-2 800px:block hidden font-Poppins dark:text-white text-black'
//                         >Admin Dashboard</h5>
//                     </Link>
//                 )
//             }
//             <div
//                 className={`w-full flex items-center px-3 py-4 cursor-pointer ${active === 4 ? "dark:bg-slate-800 bg-white" : "bg-transparent"
//                     }`}
//                 onClick={() => logoutHandler()}
//             >
//                 <AiOutlineLogout size={20} className='dark:text-white text-black' />
//                 <h5
//                     className='pl-2 800px:block hidden font-Poppins dark:text-white text-black'
//                 >Logout</h5>
//             </div>
//         </div>
//     )
// }

// export default SideBarProfile














// import React, { FC } from 'react'
// import avatarDefault from "../../../public/assests/avatar.jpg"
// import Image from 'next/image'
// import { RiLockPasswordLine } from "react-icons/ri"
// import { SiCoursera } from "react-icons/si"
// import { AiOutlineLogout } from "react-icons/ai"
// import { MdOutlineAdminPanelSettings } from "react-icons/md"
// import Link from 'next/link'

// type Props = {
//     user: any
//     active: number
//     avatar: string | null
//     setActive: (active: number) => void
//     logoutHandler: any
// }

// const SideBarProfile: FC<Props> = ({ user, active, avatar, setActive, logoutHandler }) => {
//     return (
//         <div className='w-full dark:bg-slate-900 bg-grey-200'>
//             <div
//                 className={`w-full flex items-center px-3 py-4 cursor-pointer 
//                     ${active === 1 ? "dark:bg-slate-800 bg-white" : "bg-transparent"
//                     }`}
//                 onClick={() => setActive(1)}
//             >
//                 <Image
//                     src={user.avatar || avatar ? user.avatar.url || avatar : avatarDefault}
//                     alt=''
//                     className='w-[20px] h-[20px] object-cover 800px:w-[30px] 800px:h-[30px] cursor-pointer rounded-full'
//                     width={20}
//                     height={20}
//                 />
//                 <h5
//                     className='pl-2 800px:block hidden font-Poppins dark:text-white text-black'
//                 >
//                     My Account

//                 </h5>
//             </div>
//             <div
//                 className={`w-full flex items-center px-3 py-4 cursor-pointer 
//                     ${active === 2 ? "dark:bg-slate-800 bg-white" : "bg-transparent"
//                     }`}
//                 onClick={() => setActive(2)}
//             >
//                 <RiLockPasswordLine size={20} className='dark:text-white text-black' />
//                 <h5
//                     className='pl-2 800px:block hidden font-Poppins dark:text-white text-black'
//                 >Change Password</h5>
//             </div>
//             <div
//                 className={`w-full flex items-center px-3 py-4 cursor-pointer 
//                     ${active === 3 ? "dark:bg-slate-800 bg-white" : "bg-transparent"
//                     }`}
//                 onClick={() => setActive(3)}
//             >
//                 <SiCoursera size={20} className='dark:text-white text-black' />
//                 <h5
//                     className='pl-2 800px:block hidden font-Poppins dark:text-white text-black'
//                 >Enrolled Courses</h5>
//             </div>
//             {
//                 user.role === "admin" &&
//                 (
//                     <Link
//                         className={`w-full flex items-center px-3 py-4 cursor-pointer 
//                             ${active === 6 ? "dark:bg-slate-800 bg-white" : "bg-transparent"
//                             }`}
//                         href={"/admin"}
//                     >
//                         <MdOutlineAdminPanelSettings size={20} className='dark:text-white text-black' />
//                         <h5
//                             className='pl-2 800px:block hidden font-Poppins dark:text-white text-black'
//                         >Admin Dashboard</h5>
//                     </Link>
//                 )
//             }
//             <div
//                 className={`w-full flex items-center px-3 py-4 cursor-pointer 
//                     ${active === 4 ? "dark:bg-slate-800 bg-white" : "bg-transparent"
//                     }`}
//                     // onClick={() => setActive(4)}
//                 onClick={() => logoutHandler()}
//             >
//                 <AiOutlineLogout size={20} className='dark:text-white text-black' />
//                 <h5
//                     className='pl-2 800px:block hidden font-Poppins dark:text-white text-black'
//                 >Logout</h5>
//             </div>
//         </div>
//     )
// }

// export default SideBarProfile
