// import ReelActions from "./ReelActions";
// import ReelInfo from "./ReelInfo";
// import OrderButton from "./OrderButton";

// export default function Reel({ food }) {
//   return (
//     <div className="h-screen w-screen snap-start relative flex items-center justify-center">
      
//       <video
//         src={food.video}
//         className="h-full w-full object-cover"
//         autoPlay
//         loop
//         muted
//         playsInline
//       />

//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black/30" />

//       <ReelInfo food={food} />
//       <ReelActions />
//       <OrderButton  food={food} />
//     </div>
//   );
// }



// import { useRef, useState } from "react";
// import { FaPlay, FaPause } from "react-icons/fa";
// import ReelActions from "./ReelActions";
// import ReelInfo from "./ReelInfo";
// import OrderButton from "./OrderButton";

// export default function Reel({ food, onOrder }) {
//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [showIcon, setShowIcon] = useState(false);

//   const handleTogglePlay = () => {
//     if (!videoRef.current) return;

//     if (isPlaying) {
//       videoRef.current.pause();
//     } else {
//       videoRef.current.play();
//     }

//     setIsPlaying(!isPlaying);
//     setShowIcon(true);

//     // Icon auto hide
//     setTimeout(() => setShowIcon(false), 800);
//   };

//   return (
//     <div
//       className="h-screen w-screen snap-start relative bg-black"
//       onClick={handleTogglePlay}
//     >
//       {/* VIDEO */}
//       <video
//         ref={videoRef}
//         src={food.video}
//         className="absolute inset-0 w-full h-full object-cover"
//         autoPlay
//         loop
//         muted
//         playsInline
//          preload="metadata"
//       />

//       {/* DARK OVERLAY */}
//       <div className="absolute inset-0 bg-black/30" />

//       {/* PLAY / PAUSE ICON */}
//       {showIcon && (
//         <div className="absolute inset-0 flex items-center justify-center z-20">
//           <div className="bg-black/60 p-6 rounded-full">
//             {isPlaying ? (
//               <FaPause size={40} className="text-white" />
//             ) : (
//               <FaPlay size={40} className="text-white ml-1" />
//             )}
//           </div>
//         </div>
//       )}

//       {/* INFO + ACTIONS */}
//       <ReelInfo food={food} />
//       <ReelActions />
//       <OrderButton food={food} />
//     </div>
//   );
// }







// niche ka code sahi hai

// import { useRef, useState } from "react";
// import { FaPlay, FaPause } from "react-icons/fa";
// import ReelActions from "./ReelActions";
// import ReelInfo from "./ReelInfo";
// import OrderButton from "./OrderButton";

// export default function Reel({ food, onSelectedFood}) {
//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [showIcon, setShowIcon] = useState(false);

//   const handleTogglePlay = () => {
//     if (!videoRef.current) return;

//     if (isPlaying) {
//       videoRef.current.pause();
//     } else {
//       videoRef.current.play();
//     }

//     setIsPlaying(!isPlaying);
//     setShowIcon(true);
//     setTimeout(() => setShowIcon(false), 800);
//   };

//   return (
//     <div
//       className="h-screen w-screen snap-start relative bg-black"
//       onClick={handleTogglePlay}
//     >
//       {/* VIDEO */}
//       <video
//         ref={videoRef}
//         src={food.video}
//         className="absolute inset-0 w-full h-full object-cover"
//         autoPlay
//         loop
//         muted
//         playsInline
//         preload="metadata"
//       />

//       <div className="absolute inset-0 bg-black/30" />

//       {showIcon && (
//         <div className="absolute inset-0 flex items-center justify-center z-20">
//           <div className="bg-black/60 p-6 rounded-full">
//             {isPlaying ? (
//               <FaPause size={40} className="text-white" />
//             ) : (
//               <FaPlay size={40} className="text-white ml-1" />
//             )}
//           </div>
//         </div>
//       )}

//       <ReelInfo food={food} />
//       <ReelActions />

//       {/* ✅ ORDER BUTTON */}
//      <div onClick={(e) => {
//   e.stopPropagation();
//   onSelectFood(food._id);
// }}>
//   <OrderButton food={food} />
// </div>

//     </div>
//   );
// }


import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import ReelActions from "./ReelActions";
import ReelInfo from "./ReelInfo";
// import OrderButton from "./OrderButton";

export default function Reel({ food }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showIcon, setShowIcon] = useState(false);

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    isPlaying ? videoRef.current.pause() : videoRef.current.play();
    setIsPlaying(!isPlaying);
    setShowIcon(true);
    setTimeout(() => setShowIcon(false), 800);
  };

  return (
    <div
      className="h-screen w-screen snap-start relative bg-black"
      onClick={handleTogglePlay}
    >
      <video
        ref={videoRef}
        src={food.video}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-black/30" />

      {showIcon && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="bg-black/60 p-6 rounded-full">
            {isPlaying ? <FaPause size={40} /> : <FaPlay size={40} />}
          </div>
        </div>
      )}

      <ReelInfo food={food} />
      <ReelActions />

      {/* ✅ ORDER BUTTON */}
      {/* <div
        onClick={(e) => {
          e.stopPropagation();
          onSelectFood(food._id);
        }}
      >
        <OrderButton foodId={food._id} />
      </div> */}
    </div>
  );
}
