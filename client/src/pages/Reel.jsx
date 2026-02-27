import React, { useEffect, useState } from "react";
import api from "../services/api";
import ReelCard from "../components/ReelCard";
import BottomNav from "../components/BottomNav";

const Reels = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetchReels();
  }, []);

  const fetchReels = async () => {
    try {
      const res = await api.get("/food");
      setFoods(res.data.foodItems);
    } catch (error) {
      console.error("Failed to load reels");
    }
  };

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory no-scrollbar">
      {foods.map((food) => (
        <ReelCard key={food._id} food={food} />
      ))}

      <BottomNav />
    </div>
  );
};

export default Reels;
