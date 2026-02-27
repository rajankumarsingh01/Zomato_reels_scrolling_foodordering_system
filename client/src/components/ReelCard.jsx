import React from "react";

const ReelCard = ({ food }) => {
  return (
    <div className="relative h-screen w-full bg-black flex items-center justify-center snap-start">
      
      {/* VIDEO */}
      <video
        src={food.video}
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* OVERLAY */}
      <div className="absolute bottom-20 left-4 text-white">
        <h3 className="text-lg font-semibold">{food.name}</h3>
        <p className="text-sm opacity-80">{food.description}</p>
        <p className="text-xs mt-1">🍴 {food.foodPartner?.name}</p>
      </div>

      {/* ORDER BUTTON */}
      <button
        className="absolute bottom-24 right-4 bg-red-500 px-4 py-2 rounded-full text-white text-sm font-semibold"
      >
        Order
      </button>
    </div>
  );
};

export default ReelCard;
