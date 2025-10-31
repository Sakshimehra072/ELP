"use client";
import React, { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import ReviewCard from "../../components/Reviews/ReviewsCard"; // adjust path if needed
import VideoReviewCard from "../Route/VideoReviewCard"; // adjust path if needed
import userimg1 from "../../../public/assests/Archana.jpg";
import userimg2 from "../../../public/assests/user_sakshi.jpg";
import userimg3 from "../../../public/assests/user_bhakti.jpg";
import userimg4 from "../../../public/assests/anu.jpg"
import userimg5 from "../../../public/assests/karanbeer.jpg";
import userimg6 from "../../../public/assests/mehakdeep.jpg";
// import userimg7 from "../../../public/assests/simran.jpg";
import userimg8 from "../../../public/assests/karanbeer.jpg";
import userimg9 from "../../../public/assests/kajal.jpg"
import userimg10 from "../../../public/assests/karanbeer.jpg";
import userimg11 from "../../../public/assests/karanbeer.jpg";
import userimg12 from "../../../public/assests/vishal.jpg";
import userimg13 from "../../../public/assests/karanbeer.jpg";
import userimg14 from "../../../public/assests/user_disha.jpg";
import userimg15 from "../../../public/assests/karanbeer.jpg";
import userimg16 from "../../../public/assests/karanbeer.jpg";



interface TextReview {
  avatar: string;
  name: string;
  profession: string;
  comment: string;
  rating: number;
}

interface VideoReview {
  isVideo: true;
  videoSrc: string;
  name: string;
  rating: number;
}

type Review = TextReview | VideoReview;

// === ALL REVIEWS (text + video) ===
export const reviews: Review[] = [
 
  {
  avatar: userimg1.src,
  name: "Shalini K.",
  profession: "IELTS General Training (Band 8.0)",
  comment:
    "The training was practical, focused, and very supportive. I loved how every session included real test strategies and mock tests. I scored 8.0 and got my Australian PR process started! The guidance not only boosted my confidence but also helped me understand the exam pattern deeply. The constant motivation from the trainers made the journey smooth, and I now feel fully prepared for the next big step in my career abroad. The personalized feedback after each mock test really helped me identify my weak areas and improve faster.",
  rating: 4.5,
},


  // {
  //   isVideo: true,
  //   videoSrc: "",
  //   name: "Student 1",
  //   rating: 5,
  // },
  {
    avatar: userimg2.src,
    name: "Neha J.",
    profession: "IELTS Academic (Band 8.0)",
    comment: "Amazing experience! The classes were detailed and focused, and the study material was very close to the actual exam. The writing corrections and speaking mock tests made a big difference in my preparation.",
    rating: 5,
  },
  {
    avatar: userimg4.src,
    name: "Anjali S.",
    profession: "IELTS Academic (Band 7.5)",
    comment: "I had taken the IELTS test twice before without reaching my target score. This course gave me the structure and feedback I needed. The writing and speaking sessions were especially helpful. I finally got a 7.5 overall, and now I’m applying to universities in Canada!",
    rating: 5,
  },
  {
    avatar: userimg5 .src,
    name: "Karanbir S.",
    profession: "IELTS (Band 7.0)",
    comment: "The personalized approach and regular mock tests kept me on track. I had taken coaching elsewhere before, but this course gave me the push I needed to finally achieve my target band.",
    rating: 4,
  },
  {
    avatar: userimg6.src,
    name: "Rajiv M.",
    profession: "Accent Training (Corporate Professional)",
    comment: "As a team lead working with international clients, I often felt self-conscious about my pronunciation. After just a few weeks of accent coaching, I noticed a huge improvement. My confidence has grown, and my communication is much clearer now.",
    rating: 4,
  },
  // {
  //   avatar: userimg7.src,
  //   name: "Rajiv M.",
  //   profession: "Accent Training (Corporate Professional)",
  //   comment: "As a team lead working with international clients, I often felt self-conscious about my pronunciation. After just a few weeks of accent coaching, I noticed a huge improvement. My confidence has grown, and my communication is much clearer now.",
  //   rating: 5,
  // },
  {
    avatar: userimg8.src,
    name: "Vivek D.",
    profession: "Accent & Communication Skills",
    comment: "The accent training helped me not just sound better, but also think and speak more naturally in English. My colleagues even noticed the difference! Highly recommended for anyone in the corporate world.",
    rating: 5,
  },
  {
    avatar: userimg9.src,
    name: "Meenakshi R.",
    profession: "IELTS Academic (Band 7)",
    comment: "Before this course, I struggled especially with the writing section. The teacher explained everything clearly, gave individual feedback, and corrected my mistakes in a way I could actually learn from. I’m so happy I joined!",
    rating: 4,
  },
  {
    avatar: userimg10.src,
    name: "Priya M.",
    profession: "IELTS General Training (Band 7.5)",
    comment: "I was really nervous about the IELTS speaking test, but the practice sessions and personal feedback gave me so much confidence. I ended up scoring higher than I expected. This course was exactly what I needed!",
    rating: 5,
  },
  {
    avatar: userimg11.src,
    name: "Harshil P.",
    profession: "Accent Training",
    comment: "The course helped me identify subtle pronunciation errors I didn’t even know I was making. The trainer was very supportive, and the audio materials helped me practice every day. I now feel more fluent and professional when I speak.",
    rating: 5,
  },
  {
    avatar: userimg12.src,
    name: "Rakesh K.",
    profession: "Communication Skills & Accent Coaching",
    comment: "This course improved not just my accent but also my overall communication style. I learned how to pause, emphasize key points, and sound more confident in meetings and presentations.",
    rating: 5,
  },
  {
    avatar: userimg13.src,
    name: "Nikita A.",
    profession: "Spoken English Course",
    comment: "Before joining, I was hesitant to speak in English during office meetings. Now, I can speak fluently and handle conversations with clients easily. The sessions were fun, practical, and extremely helpful.",
    rating: 5,
  },
  {
    avatar: userimg14.src,
    name: "Aishwarya V.",
    profession: "Accent Training",
    comment: "As someone working in customer support, sounding clear and neutral was very important. This course helped me reduce my regional accent and speak more clearly with international customers.",
    rating: 5,
  },
  {
    avatar: userimg15.src,
    name: "Nikhil G.",
    profession: "Online IELTS",
    comment: "I joined the fast-track program just one month before my exam, and I was amazed at how much I improved. The strategies taught were spot-on, and the trainer was always available for doubts and practice.",
    rating: 5,
  },
  {
    avatar: userimg16.src,
    name: "Kavita R.",
    profession: "Accent Training",
    comment: "I had already done a basic pronunciation course elsewhere, but this advanced training took it to the next level. The trainer focused on fine details like stress, intonation, and connected speech – it made a huge impact!",
    rating: 5,
  },
  {
    avatar: userimg3.src,
    name: "Nancy A.",
    profession: "IELTS Academic (Band 7.5)",
    comment: "Clear teaching, personalized attention, and honest feedback – that’s what I got from this course. I highly recommend it to anyone who’s serious about their IELTS score.",
    rating: 5,
  },
  // VIDEO entries (using exactly the path format you requested)
  {
    isVideo: true,
    videoSrc: "/assests/video_review1.mp4",
    name: "Student 2",
    rating: 4,
  },
  {
    isVideo: true,
    videoSrc: "/assests/video_review3.mp4",
    name: "Student 3",
    rating: 5,
  },
];

const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleNext = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
      setIsFlipping(false);
    }, 600);
  };

  const handlePrev = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
      setIsFlipping(false);
    }, 600);
  };

  const currentReview = reviews[currentIndex];

  return (
    <div className="relative w-full py-12 lg:py-16 bg-gradient-to-r from-blue-100 via-blue-100 to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-start justify-between gap-10">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 text-center">
          <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-3 leading-tight tracking-wide">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Reviews
            </span>
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-700 dark:text-gray-300 mb-4">
            from our Students
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 max-w-md font-medium text-center mx-auto">
            Discover what our students say about their transformative journey.
          </p>

          {/* Navigation buttons */}
          <div className="flex items-center justify-center gap-6 mt-4">
            <button
              onClick={handlePrev}
              disabled={isFlipping}
              className="bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 text-blue-600 dark:text-blue-400 p-4 rounded-full shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed border border-blue-200 dark:border-gray-600 hover:scale-110 hover:shadow-xl"
            >
              <ChevronLeft size={28} />
            </button>
            <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              {currentIndex + 1} of {reviews.length}
            </span>
            <button
              onClick={handleNext}
              disabled={isFlipping}
              className="bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 text-blue-600 dark:text-blue-400 p-4 rounded-full shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed border border-blue-200 dark:border-gray-600 hover:scale-110 hover:shadow-xl"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Progress dots */}
          <div className="flex justify-center gap-2 mt-4">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isFlipping && index !== currentIndex) {
                    setIsFlipping(true);
                    setTimeout(() => {
                      setCurrentIndex(index);
                      setIsFlipping(false);
                    }, 600);
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 w-10 shadow-md"
                    : "bg-gray-300 dark:bg-gray-600 w-2 hover:w-3"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right Section - Card */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <div className="relative w-full max-w-md">
            <div
              className={`relative z-10 w-full h-[480px] transform-gpu transition-transform duration-700 ease-in-out ${
                isFlipping ? "animate-[flip_0.7s_ease-in-out]" : ""
              }`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="w-full h-full rounded-2xl shadow-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                {'isVideo' in currentReview ? (
                  <VideoReviewCard
                    videoSrc={currentReview.videoSrc}
                    name={currentReview.name}
                    rating={currentReview.rating}
                  />
                ) : (
                  <ReviewCard item={currentReview} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flip Animation */}
      <style jsx>{`
        @keyframes flip {
          0% {
            transform: rotateY(0deg);
          }
          50% {
            transform: rotateY(90deg);
            opacity: 0.5;
          }
          100% {
            transform: rotateY(180deg);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Reviews;