








import { useEffect, useState } from "react";
import api from "../../api/axios";
import Reel from "../../components/Reel";
// import OrderModal from "../../components/OrderModel";
import BottomNav from "../../components/Bottomnav";
import CreateActionSheet from "../../components/CreateActionSheet";


export default function FoodFeed() {
  const [foods, setFoods] = useState([]);
  const [selectedFoodId, setSelectedFoodId] = useState(null);
  const [openCreate, setOpenCreate] = useState(false);

  useEffect(() => {
    api.get("/food").then(res => setFoods(res.data.foodItems));
  }, []);

  return (
    <>
      <div className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory bg-black text-white">
        {/* {foods.map(food => (
          <Reel
            key={food._id}
            food={food}
            onOrder={() => setSelectedFoodId(food._id)}
          />
        ))} */}
        {foods.map(food => (
          <Reel
            key={food._id}
            food={food}
            onSelectFood={setSelectedFoodId}
          />
        ))}

      </div>

      <BottomNav
        onCreate={() => setOpenCreate(true)}
        selectedFoodId={selectedFoodId}
      />

      {openCreate && (
        <CreateActionSheet onClose={() => setOpenCreate(false)} />
      )}
    </>
  );
}
