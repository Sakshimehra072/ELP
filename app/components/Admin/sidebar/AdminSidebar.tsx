<<<<<<< HEAD

=======
>>>>>>> bc4c904da31581c701dce1b672f7afd58c3668ef
"use client";
import { FC, JSX, useEffect, useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import "react-pro-sidebar/dist/css/styles.css";
import {
  HomeOutlinedIcon,
  ArrowForwardIosIcon,
  ArrowBackIosIcon,
  PeopleOutlinedIcon,
  ReceiptOutlinedIcon,
  BarChartOutlinedIcon,
  MapOutlinedIcon,
  GroupIcon,
  OndemandVideoIcon,
  VideoCallIcon,
  WebIcon,
  QuizIcon,
  WysiwygIcon,
  ManageHistoryIcon,
  SettingsIcon,
  ExitToAppIcon,
} from "./Icon";
import avatarDefault from "../../../../public/assests/avatar.jpg";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

interface itemProps {
  title: string;
  to: string;
  icon: JSX.Element;
  selected: string;
  setSelected: any;
}

const Item: FC<itemProps> = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography className="!text-[16px] !font-Poppins">{title}</Typography>
      <Link href={to} />
    </MenuItem>
  );
};

const AdminSidebar = () => {
  const { user } = useSelector((state: any) => state.auth);
  const [logout, setLogout] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  const logoutHandler = () => {
    setLogout(true);
  };

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${
            theme === "dark" ? "#111C43 !important" : "#fff !important"
<<<<<<< HEAD
=======
            
>>>>>>> bc4c904da31581c701dce1b672f7afd58c3668ef
          }`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item:hover": {
          color: "#888dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
          opacity: 1,
        },
        "& .pro-menu-item": {
          color: `${theme !== "dark" && "#000"}`,
        },
      }}
<<<<<<< HEAD
      className="!bg-white dark:bg-[#111C43]"
=======
      className={`${
        theme === "dark" ? "bg-[#111C43]" : "bg-white"
      } text-${theme === "dark" ? "[#ffffffc1]" : "black"}`}
>>>>>>> bc4c904da31581c701dce1b672f7afd58c3668ef
    >
      <ProSidebar
        collapsed={isCollapsed}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: isCollapsed ? "0%" : "16%",
        }}
      >
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <ArrowForwardIosIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Link href="/">
<<<<<<< HEAD
                  <h3 className="text-[25px] font-Poppins uppercase dark:text-white text-black">
=======
                  <h3 className="text-[25px] font-Poopins uppercase dark:text-white text-black">
>>>>>>> bc4c904da31581c701dce1b672f7afd58c3668ef
                    LMS
                  </h3>
                </Link>
                <IconButton
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className="inline-block"
                >
                  <ArrowBackIosIcon className="text-black dark:text-[#ffffffc1]" />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <Image
                  alt="profile-user"
                  width={100}
                  height={100}
                  src={user.avatar ? user.avatar.url : avatarDefault}
                  style={{
                    cursor: "pointer",
                    borderRadius: "50%",
                    border: "3px solid #5b6fe6",
<<<<<<< HEAD
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
=======
                    // width: "100px",
                    // height: "100px",
                    // objectFit: "cover",
>>>>>>> bc4c904da31581c701dce1b672f7afd58c3668ef
                  }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h4"
                  className="!text-[18px] text-black dark:text-[#ffffffc1]"
                  sx={{ m: "10px 0 0 0" }}
                >
                  {user?.name}
                </Typography>
                <Typography
                  variant="h6"
                  className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize"
                  sx={{ m: "10px 0 0 0" }}
                >
                  - {user?.role}
                </Typography>
              </Box>
            </Box>
          )}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/admin"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h5"
              sx={{ m: "15px 0 5px 25px" }}
<<<<<<< HEAD
              className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
=======
              className={`!text-[18px] !font-[400] ${
                theme === "dark" ? "text-[#ffffffc1]" : "text-black"
              } capitalize`}
>>>>>>> bc4c904da31581c701dce1b672f7afd58c3668ef
            >
              {!isCollapsed && "Data"}
            </Typography>
            <Item
              title="Users"
              to="/admin/users"
              icon={<GroupIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices"
              to="/admin/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h5"
              sx={{ m: "15px 0 5px 20px" }}
<<<<<<< HEAD
              className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
=======
              className={`!text-[18px] !font-[400] ${
                theme === "dark" ? "text-[#ffffffc1]" : "text-black"
              } capitalize`}
>>>>>>> bc4c904da31581c701dce1b672f7afd58c3668ef
            >
              {!isCollapsed && "Content"}
            </Typography>
            <Item
              title="Create Course"
              to="/admin/create-course"
              icon={<VideoCallIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Live Courses"
              to="/admin/courses"
              icon={<OndemandVideoIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h5"
              sx={{ m: "15px 0 5px 20px" }}
<<<<<<< HEAD
              className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
=======
              className={`!text-[18px] !font-[400] ${
                theme === "dark" ? "text-[#ffffffc1]" : "text-black"
              } capitalize`}
>>>>>>> bc4c904da31581c701dce1b672f7afd58c3668ef
            >
              {!isCollapsed && "Customization"}
            </Typography>
            <Item
              title="Hero"
              to="/admin/hero"
              icon={<WebIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ"
              to="/admin/faq"
              icon={<QuizIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Categories"
              to="/admin/categories"
              icon={<WysiwygIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h5"
              sx={{ m: "15px 0 5px 20px" }}
<<<<<<< HEAD
              className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
=======
              className={`!text-[18px] !font-[400] ${
                theme === "dark" ? "text-[#ffffffc1]" : "text-black"
              } capitalize`}
>>>>>>> bc4c904da31581c701dce1b672f7afd58c3668ef
            >
              {!isCollapsed && "Controllers"}
            </Typography>
            <Item
              title="Manage Team"
              to="/admin/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h5"
              sx={{ m: "15px 0 5px 20px" }}
<<<<<<< HEAD
              className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
=======
              className={`!text-[18px] !font-[400] ${
                theme === "dark" ? "text-[#ffffffc1]" : "text-black"
              } capitalize`}
>>>>>>> bc4c904da31581c701dce1b672f7afd58c3668ef
            >
              {!isCollapsed && "Analytics"}
            </Typography>
            <Item
              title="Courses Analytics"
              to="/admin/courses-analytics"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Order Analytics"
              to="/admin/order-analytics"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="User Analytics"
              to="/admin/user-analytics"
              icon={<ManageHistoryIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              sx={{ m: "15px 0 5px 20px" }}
<<<<<<< HEAD
              className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
=======
              className={`!text-[18px] !font-[400] ${
                theme === "dark" ? "text-[#ffffffc1]" : "text-black"
              } capitalize`}
>>>>>>> bc4c904da31581c701dce1b672f7afd58c3668ef
            >
              {!isCollapsed && "Extras"}
            </Typography>
            <Item
              title="Settings"
              to="/admin/settings"
              icon={<SettingsIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <div onClick={logoutHandler}>
              <Item
                title="Logout"
                to="/"
                icon={<ExitToAppIcon />}
                selected={selected}
                setSelected={setSelected}
              ></Item>
            </div>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

<<<<<<< HEAD
export default AdminSidebar;
=======
export default AdminSidebar;
>>>>>>> bc4c904da31581c701dce1b672f7afd58c3668ef
