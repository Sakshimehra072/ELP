'use client';
import Link from "next/link";
import React, { FC, useEffect, useState, } from 'react';
import NavItems from "../utils/NavItems";
import { ThemeSwitcher } from "../utils/ThemeSwitcher";
import { HiOutlineMenuAlt3, HiOutlineUserCircle } from "react-icons/hi";
import CustomModal from "../utils/CustomModal";
import Login from "../components/auth/Login";
import SignUp from "../components/auth/SignUp";
import Verification from "../components/auth/Verification"
import { useSelector } from "react-redux";
import Image from "next/image";
import avatar from "../../public/assests/avatar.jpg"
import { useSession } from "next-auth/react";
import {
    useLogOutQuery, 
    useSocialAuthMutation 
} from "@/redux/features/auth/authApi";
import toast from "react-hot-toast";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
    activeItem: number;
    route: string;
    setRoute: (route: string) => void;
};

const Header: FC<Props> = ({ activeItem, setOpen, route, open, setRoute }) => {
    const [active, setActive] = useState(false);
    const [openSidebar, setOpenSidebar] = useState(
        typeof window !== "undefined" 
        ? localStorage.getItem('sidebarOpen') === "true"
        : false
    );
    const { user } = useSelector((state: any) => state.auth);
    const {
        refetch,
      } = useLoadUserQuery(undefined, { refetchOnMountOrArgChange: true });

    const { data } = useSession();
    console.log(data);
    const [socialAuth, {isSuccess, error}] = useSocialAuthMutation();
    const [logout, setLogout] = useState(false);
    const {} = useLogOutQuery(undefined,{
        skip: !logout ? true : false,
    });

    useEffect(() => {
        if(!user){
            if(data){
                socialAuth({
                    email: data?.user?.email,
                    name: data?.user?.name,
                    avatar: data?.user?.image
                });
            }
        }
        if (isSuccess){
            toast.success("Login Successfully")
        }
    }, [data, user]);    

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 85) {
                setActive(true);
            } else {
                setActive(false);
            }
        });
    }

    const handleClose = (e: any) => {
        if (e.target.id === "screen") {
            setOpenSidebar(false);
        }
    };

    useEffect(()=> {
        if(typeof window !== 'undefined'){
            localStorage.setItem("sidebarOpen", JSON.stringify(openSidebar));
        }
    },[openSidebar])

    return (
        <div className="w-full fixed">
            <div
                className={`${active
                    ? "dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0 w-full h-[80px] z-[80] border-b dark:border-[#ffffff1c] dark:hadow-xl shadow-2xl transition duration-300"
                    : "w-full border-b  dark:border-[#ffffff1c] fixed h-[80px] z-[80] shadow "
                    }`
                }>

                <div className="w-[95%] 800px:w-[92%] m-auto py-2 h-full">
                    <div className="w-full h-[80px] flex items-center justify-between p-3">
                        <div>
                            <Link href={"/"}
                                className={`text-[25px] font-Poppins font-[500] text-black dark:text-white `}
                            >
                                Live English With Sushil
                            </Link>
                        </div>
                        <div className="flex items-center">
                            <NavItems
                                activeItem={activeItem}
                                isMobile={false}
                            />
                            <ThemeSwitcher />
                            {/* only for Mobile */}

                            <div className="800px:hidden">
                                <HiOutlineMenuAlt3
                                    size={25}
                                    className="cursor-pointer dark:text-white text-black"
                                    onClick={() => setOpenSidebar(true)}
                                />
                            </div>
                            {
                                user ? (
                                    <Link href={"/profile"}>
                                        <Image
                                            src={user.avatar ? user.avatar.url : avatar}
                                            width={30}
                                            height={30}
                                            alt="user profile photo"
                                            className="w-[30px] h-[30px] object-cover rounded-full cursor-pointer"
                                            style={{
                                                border: activeItem === 5 ? "2px solid #37a39a" : "none",
                                            }}
                                        />
                                    </Link>
                                ) : (
                                    <HiOutlineUserCircle
                                        size={25}
                                        className="hidden 800px:block cursor-pointer dark:text-white text-black"
                                        onClick={() => setOpen(true)}
                                    />
                                )
                            }
                        </div>
                    </div>
                </div>
                {/* for mobile sidebar */}
                {openSidebar && (
                        <div
                            className="fixed w-full h-screen top-0 left-0 z-[99999] dark:bg-[unset] bg-[#00000024]"
                            onClick={handleClose}
                            id="screen"
                        >
                            <div className="w-[70%] fixed z-[999999999] h-screen bg-white dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0">
                                <NavItems activeItem={activeItem} isMobile={true} />
                                <HiOutlineUserCircle
                                    size={25}
                                    className="cursor-pointer ml-5 my-2 text-black dark:text-white"
                                    onClick={() => setOpen(true)}
                                />
                                <br />
                                <br />
                                <p className="text-[16px] px-2 pl-5 text-black dark:text-white" >
                                    Copyright © 2025 ELearing Platform Sakshimehra072, Bhaktiagrawal
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>
            {
                route === "Login" && (
                    <>
                        {
                            open && (
                                <CustomModal
                                    open={open}
                                    setOpen={setOpen}
                                    setRoute={setRoute}
                                    activeItem={activeItem}
                                    component={Login}
                                />
                            )
                        }
                    </>
                )
            }
            {
                route === "Sign-Up" && (
                    <>
                        {
                            open && (
                                <CustomModal
                                    open={open}
                                    setOpen={setOpen}
                                    setRoute={setRoute}
                                    activeItem={activeItem}
                                    component={SignUp}
                                />
                            )
                        }
                    </>
                )
            }
            {
                route === "Verification" && (
                    <>
                        {
                            open && (
                                <CustomModal
                                    open={open}
                                    setOpen={setOpen}
                                    setRoute={setRoute}
                                    activeItem={activeItem}
                                    component={Verification}
                                />
                            )
                        }
                    </>
                )
            }
        </div >
    );
};
export default Header;