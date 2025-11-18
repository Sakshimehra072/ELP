// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { Star, Play, Pause, Volume2, VolumeX } from "lucide-react";


// type Props = {
//   videoSrc: string;
//   name: string;
//   rating: number;
// };

// const VideoReviewCard: React.FC<Props> = ({ videoSrc, name, rating }) => {
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isMuted, setIsMuted] = useState(true);

//   const src = videoSrc.startsWith("/") ? videoSrc : `/${videoSrc}`;

//   useEffect(() => {
//     const el = videoRef.current;
//     if (!el) return;

//     // ⬅️ Autoplay video on mount and set button state to "playing"
//     el.play()
//       .then(() => {
//         setIsPlaying(true);
//       })
//       .catch((err) => {
//         console.warn("Autoplay blocked:", err);
//       });

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (!entry.isIntersecting) {
//             if (!el.paused) {
//               el.pause();
//               setIsPlaying(false);
//             }
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     observer.observe(el);
//     return () => observer.disconnect();
//   }, []);

//   const togglePlay = async () => {
//     const el = videoRef.current;
//     if (!el) return;

//     if (el.paused) {
//       try {
//         el.muted = isMuted;
//         await el.play();
//         setIsPlaying(true);
//       } catch (err) {
//         console.warn("play blocked", err);
//       }
//     } else {
//       el.pause();
//       setIsPlaying(false);
//     }
//   };

//   const toggleMute = () => {
//     const el = videoRef.current;
//     if (!el) return;
//     el.muted = !el.muted;
//     setIsMuted(el.muted);
//   };

//   return (
//     <div className="relative w-full h-[480px] rounded-2xl overflow-hidden shadow-lg bg-black flex flex-col">
//       {/* Video */}
//       <div className="relative flex-1">
//         <video
//           ref={videoRef}
//           className="absolute inset-0 w-full h-full object-cover"
//           playsInline
//           preload="metadata"
//           muted={isMuted}
//           autoPlay   // ⬅️ Added
//           loop
//           src={src}
//         />

//         {/* Play/Pause button - bottom-left on video */}
//         <button
//           aria-label={isPlaying ? "Pause video" : "Play video"}
//           onClick={togglePlay}
//           className="absolute bottom-3 left-3 z-20 bg-black/50 hover:bg-black/70 p-2"
//         >
//           {isPlaying ? (
//             <Pause className="w-5 h-5 text-white" />
//           ) : (
//             <Play className="w-5 h-5 text-white" />
//           )}
//         </button>

//         {/* Speaker button - bottom-right on video */}
//         <button
//           aria-label={isMuted ? "Unmute video" : "Mute video"}
//           onClick={toggleMute}
//           className="absolute bottom-3 right-3 z-20 bg-black/50 hover:bg-black/70 p-2"
//         >
//           {isMuted ? (
//             <VolumeX className="w-5 h-5 text-white" />
//           ) : (
//             <Volume2 className="w-5 h-5 text-white" />
//           )}
//         </button>

//         {/* Gradient overlay */}
//         <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
//       </div>

//       {/* Username + Rating at very bottom */}
//       <div className="flex items-center justify-between px-4 py-3 bg-gray-900">
//         {/* Username */}
//         <h3 className="text-white font-medium text-sm">{name}</h3>

//         {/* Rating */}
//         <div className="flex gap-1">
//           {Array.from({ length: Math.floor(rating) }).map((_, i) => (
//             <Star key={i} className="text-yellow-400 fill-yellow-400 w-4 h-4" />
//           ))}
//           {rating % 1 !== 0 && (
//             <Star className="text-yellow-400 fill-yellow-400/50 w-4 h-4" />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoReviewCard;

"use client";
import React, { useEffect, useRef, useState } from "react";
import { Star, Play, Pause, Volume2, VolumeX } from "lucide-react";

type Props = {
  videoSrc: string; // local .mp4 OR google drive preview link
  name: string;
  rating: number;
};

const VideoReviewCard: React.FC<Props> = ({ videoSrc, name, rating }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Detect if source is Google Drive preview link
  const isDrive = videoSrc.includes("drive.google.com");

  // Extract Drive VIDEO PREVIEW URL
  const drivePreview = isDrive
    ? videoSrc.replace("/view", "/preview")
    : null;

  // Local video path (no forced slash)
  const localVideo = !isDrive ? videoSrc : null;

  /** ===============================
   *  LOCAL VIDEO AUTO-PLAY HANDLER
   *  Only runs if video is local mp4
   *  =============================== */
  useEffect(() => {
    if (isDrive) return; // iframe → skip autoplay handling

    const el = videoRef.current;
    if (!el) return;

    el.play()
      .then(() => setIsPlaying(true))
      .catch((err) => console.warn("Autoplay blocked:", err));

    // Auto-pause when out of screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && !el.paused) {
            el.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Play/Pause
  const togglePlay = async () => {
    if (isDrive) return; // Cannot control Google Drive iframe

    const el = videoRef.current;
    if (!el) return;

    if (el.paused) {
      try {
        el.muted = isMuted;
        await el.play();
        setIsPlaying(true);
      } catch (err) {
        console.warn("Play blocked", err);
      }
    } else {
      el.pause();
      setIsPlaying(false);
    }
  };

  // Mute toggle
  const toggleMute = () => {
    if (isDrive) return; // iframe volume cannot be controlled

    const el = videoRef.current;
    if (!el) return;

    el.muted = !el.muted;
    setIsMuted(el.muted);
  };

  return (
    <div className="relative w-full h-[480px] rounded-2xl overflow-hidden shadow-lg bg-black flex flex-col">

      {/* ===========================
           VIDEO AREA
      ============================ */}
      <div className="relative flex-1">

        {/* If GOOGLE DRIVE → use iframe */}
        {isDrive && (
          <iframe
            src={drivePreview!}
            className="absolute inset-0 w-full h-full"
            allow="autoplay; fullscreen"
          ></iframe>
        )}

        {/* If LOCAL VIDEO → use <video> */}
        {!isDrive && (
          <video
            ref={videoRef}
            src={localVideo!}
            className="absolute inset-0 w-full h-full object-cover"
            playsInline
            muted={isMuted}
            autoPlay
            loop
            preload="metadata"
          />
        )}

        {/* Overlay buttons only for local video */}
        {!isDrive && (
          <>
            <button
              aria-label={isPlaying ? "Pause video" : "Play video"}
              onClick={togglePlay}
              className="absolute bottom-3 left-3 z-20 bg-black/50 hover:bg-black/70 p-2"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-white" />
              ) : (
                <Play className="w-5 h-5 text-white" />
              )}
            </button>

            <button
              aria-label={isMuted ? "Unmute video" : "Mute video"}
              onClick={toggleMute}
              className="absolute bottom-3 right-3 z-20 bg-black/50 hover:bg-black/70 p-2"
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5 text-white" />
              ) : (
                <Volume2 className="w-5 h-5 text-white" />
              )}
            </button>
          </>
        )}

        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />

      </div>

      {/* ===========================
           NAME + RATING
      ============================ */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-900">
        <h3 className="text-white font-medium text-sm">{name}</h3>

        <div className="flex gap-1">
          {Array.from({ length: Math.floor(rating) }).map((_, i) => (
            <Star key={i} className="text-yellow-400 fill-yellow-400 w-4 h-4" />
          ))}
          {rating % 1 !== 0 && (
            <Star className="text-yellow-400 fill-yellow-400/50 w-4 h-4" />
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoReviewCard;
