"use client"
import React, { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import AchievementImg from "../../public/assests/Achivements.jpg";


const Page: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [route, setRoute] = useState("Home");
    const activeItem = 3;

    return (
        <div className="w-full font-sans bg-gray-500 dark:bg-gray-900">
            {/* ✅ Fixed Header */}
            <div className="fixed top-0 left-0 right-0 z-50">
                <Header
                    open={open}
                    setOpen={setOpen}
                    activeItem={activeItem}
                    setRoute={setRoute}
                    route={route}
                />
            </div>

            {/* ✅ Achievement Section with padding to prevent overlap */}
            <section className="relative w-full py-20 pt-32 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 text-center text-white">
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold mb-12 drop-shadow-lg bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Our Achievements
                </h2>

                {/* Image + Text */}
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
                    {/* Image with hover effect */}
                    <div className="relative group flex-1">
                        <Image
                            src={AchievementImg}
                            alt="Achievements"
                            width={1200}
                            height={700}
                            className="w-full h-[450px] md:h-[500px] lg:h-[550px] object-cover rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Overlay effect */}
                        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 rounded-2xl flex items-center justify-center transition-opacity duration-500">
                            <p className="text-xl font-semibold">Celebrating Success</p>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 text-left md:text-justify space-y-6">
                        <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
                            🎙️Podcast Collaboration with Mr. Sandeep Maheshwari
                        </p>

                        <p className="text-lg md:text-xl leading-relaxed text-gray-800 dark:text-gray-200">
                            I had the honor of meeting and collaborating with{" "}
                            <span className="font-bold">Mr. Sandeep Maheshwari</span>, one of India’s most respected
                            motivational speakers and entrepreneurs. During this remarkable
                            interaction, I not only gained invaluable insights on leadership,
                            personal growth, and resilience but also had the privilege to host
                            a podcast with him.
                        </p>

                        <p className="text-lg md:text-xl leading-relaxed text-gray-800 dark:text-gray-200">
                            The podcast was a powerful exchange of ideas, where we discussed
                            practical life lessons, the importance of self-belief, and strategies
                            for overcoming challenges in today’s fast-paced world. This achievement
                            has been a milestone in my journey, inspiring me to further pursue my
                            vision of creating impactful conversations that can guide and motivate
                            individuals globally.
                        </p>

                        <p className="mt-6c text-xl italic text-gray-700 dark:text-gray-300">
                            ✨ “Together we learn, together we achieve.”
                        </p>
                        <p className="text-right mr-10 text-gray-700 dark:text-gray-300"> ~ Sushil Kumar</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Page;
