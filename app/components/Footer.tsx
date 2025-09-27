import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer>
      <div className="border border-[#0000000e] dark:border-[#ffffff1e]" />
      <br />
      <div className="w-[95%] 800px:w-full 800px:max-w-[85%] mx-auto px-2 sm:px-2 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">

        <div className="space-y-4">
  <h3 className="text-[20px] font-[600px] text-black dark:text-white">
    About
  </h3>
  <ul className="space-y-4">
    <li>
      <Link
        href="/about#mentor"   // ⬅️ links to "Know your Mentor"
        className="text-base text-black dark:text-gray-300 dark:hover-white"
      >
        About Mentor
      </Link>
    </li>
    <li>
      <Link
        href="/about#mission"  // ⬅️ links to Mission & Vision
        className="text-base text-black dark:text-gray-300 dark:hover-white"
      >
        Mission & Vision 
      </Link>
    </li>
    <li>
      <Link
        href="/about#courses"  // ⬅️ links to Popular Courses
        className="text-base text-black dark:text-gray-300 dark:hover-white"
      >
        Popular Courses
      </Link>
    </li>
  </ul>
        </div>
            


          {/* <div className="space-y-3">
            <h3 className="text-[20px] font-[600px] text-black dark:text-white">
              Quick Links
            </h3>
            <ul className="y-space-1">
              <li>
                <Link
                  href="/about"
                  className="text-base text-black dark:text-gray-300 dark:hover-white"
                >
                  Courses                            
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-base text-black dark:text-gray-300 dark:hover-white"
                >
                  My Account
        
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-base text-black dark:text-gray-300 dark:hover-white"
                >
                  Course Dashboard
                </Link>
              </li>
            </ul>
          </div> */}

          <div className="space-y-3">
  <h3 className="text-[20px] font-[600px] text-black dark:text-white">
    Quick Links
  </h3>
  <ul className="space-y-4">
    <li>
      <Link
        href="/allCourses"
        className="text-base text-black dark:text-gray-300 dark:hover-white"
      >
        Courses                            
      </Link>
    </li>
    <li>
      <Link
        href="/profile"
        className="text-base text-black dark:text-gray-300 dark:hover-white"
      >
        My Account
      </Link>
    </li>
    <li>
      <Link
        href="/achivements"
        className="text-base text-black dark:text-gray-300 dark:hover-white"
      >
        Course Dashboard
      </Link>
    </li>
  </ul>
</div>



          <div className="space-y-3">
            <h3 className="text-[20px] font-[600px] text-black dark:text-white">
              Social Links
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="https://youtube.com/@mrenglishsushil?si=5CsNKpLSkCpb5p1G  "
                  className="text-base text-black dark:text-gray-300 dark:hover-white"
                >
                  Youtube
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/mrenglishsushil?igsh=MXR5MHJ4dHdscjNhdg%3D%3D&utm_source=qr"
                  className="text-base text-black dark:text-gray-300 dark:hover-white"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/sushilkumarr/"
                  className="text-base text-black dark:text-gray-300 dark:hover-white"
                >
                  Linkedin
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[20px] font-[600px] text-black dark:text-white">
              Contact Info
            </h3>
            <br />
            <p className="pb-2 text-base text-black dark:text-gray-300 dark:hover-white">
              9888050007
            </p>
            <p className="pb-2 text-base text-black dark:text-gray-300 dark:hover-white">
              9876543210
            </p>
            <p className="pb-2 text-base text-black dark:text-gray-300 dark:hover-white">
              sushildnn78@gmail.com
            </p>
          </div>
        </div>
        <br />
        <p className="text-center text-black dark:text-white">
          Copyriht @ 2023 Elearning | All Rights Reverse
        </p>
      </div>
      <br />
    </footer>
  );
};

export default Footer;