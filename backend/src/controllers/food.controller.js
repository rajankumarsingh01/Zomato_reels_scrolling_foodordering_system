// const foodModel = require('../models/food.model');
// const storageService = require("../services/storage.service");
// const {v4:uuid} = require('uuid')



// async function createFood(req,res){
//    console.log(req.foodPartner)

//    console.log(req.body)
//    console.log(req.file)

// //    const fileUploadResult = await storageService.uploadFile(req.file,Buffer,uuid())
//  const fileUploadResult = await storageService.uploadFile(
//     req.file.buffer,                 // FIX 1
//     uuid() + "-" + req.file.originalname // FIX 2
//   );

//   const foodItem = await foodModel.create({
//     name:req.body.name,
//     description:req.body.description,
//     video:fileUploadResult.url,
//     foodPartner:req.foodPartner._id
//   })

//    console.log(fileUploadResult)



//    res.status(201).json({
//     message:"food created successfully",
//     food:foodItem
//    })
// }


// async function getFoodItem(req,res){
//   const foodItems = await foodModel.find({})
//   res.status(200).json({
//     message:"food item fetched successfully",foodItems
//   })
// }

// module.exports = {
//     createFood,
//     getFoodItem,
// }







// const foodModel = require('../models/food.model');
// const storageService = require("../services/storage.service");
// const { v4: uuid } = require('uuid');

// // ================= CREATE FOOD =================
// async function createFood(req, res) {
//   if (!req.file) {
//     return res.status(400).json({ message: "Video file required" });
//   }

//   const uploadResult = await storageService.uploadFile(
//     req.file.buffer,
//     uuid() + "-" + req.file.originalname
//   );

//   const foodItem = await foodModel.create({
//     name: req.body.name,
//     description: req.body.description,
//     video: uploadResult.url,
//     foodPartner: req.foodPartner._id
//   });

//   res.status(201).json({
//     message: "Food created successfully",
//     food: foodItem
//   });
// }

// // ================= GET FOOD (REELS) =================
// async function getFoodItem(req, res) {

//   const foodItems = await foodModel
//     .find()
//     .populate("foodPartner", "name");

//   res.status(200).json({
//     foodItems
//   });
// }

// module.exports = {
//   createFood,
//   getFoodItem,
// };



// const foodModel = require("../models/food.model");
// const storageService = require("../services/storage.service");
// const { v4: uuid } = require("uuid");

// // ================= CREATE FOOD =================
// async function createFood(req, res) {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ message: "Video file required" });
//     }

//     const uploadResult = await storageService.uploadFile(
//       req.file.buffer,
//       uuid() + "-" + req.file.originalname
//     );

//     const foodItem = await foodModel.create({
//       name: req.body.name,
//       description: req.body.description,
//       video: uploadResult.url,
//       foodPartner: req.foodPartner._id,
//     });

//     return res.status(201).json({
//       message: "Food created successfully",
//       food: foodItem,
//     });

//   } catch (error) {
//     console.error("❌ FOOD UPLOAD ERROR:", error.message);

//     return res.status(500).json({
//       message: "Food upload failed",
//     });
//   }
// }

// // ================= GET FOOD (REELS) =================
// async function getFoodItem(req, res) {
//   try {
//     const foodItems = await foodModel
//       .find()
//       .populate("foodPartner", "name");

//     res.status(200).json({ foodItems });
//   } catch (error) {
//     res.status(500).json({ message: "Failed to fetch food" });
//   }
// }






// module.exports = {
//   createFood,
//   getFoodItem,
// };









const foodModel = require("../models/food.model");
const storageService = require("../services/storage.service");
const { v4: uuid } = require("uuid");

// ================= CREATE FOOD =================
async function createFood(req, res) {
  console.log("📥 FILE:", req.file?.originalname);
console.log("📦 BODY:", req.body);

  try {
    if (!req.file) {
      return res.status(400).json({ message: "Video file required" });
    }
    console.log("🚀 Upload started");
    const uploadResult = await storageService.uploadFile(
      req.file.buffer,
      uuid() + "-" + req.file.originalname
    );
  console.log("🎥 Upload finished");


    const foodItem = await foodModel.create({
      name: req.body.name,
      description: req.body.description,
      video: uploadResult.url,
      foodPartner: req.foodPartner._id,
    });

    return res.status(201).json({
      message: "Food created successfully",
      food: foodItem,
    });

  } catch (error) {
    console.error("❌ FOOD UPLOAD ERROR:", error.message);
    return res.status(500).json({ message: "Food upload failed" });
  }
}

// ================= GET ALL FOOD (PUBLIC REELS) =================
async function getFoodItem(req, res) {
  try {
    const foodItems = await foodModel
      .find()
      .populate("foodPartner", "name");

    res.status(200).json({ foodItems });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch food" });
  }
}

// ================= PARTNER: GET OWN FOODS =================
async function getPartnerFoods(req, res) {
  try {
    const foods = await foodModel.find({
      foodPartner: req.foodPartner._id,
    });

    res.status(200).json({ foods });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch partner foods" });
  }
}

// ================= PARTNER: DELETE FOOD =================
async function deleteFood(req, res) {
  try {
    const { id } = req.params;

    const food = await foodModel.findOne({
      _id: id,
      foodPartner: req.foodPartner._id,
    });

    if (!food) {
      return res.status(404).json({ message: "Food not found" });
    }

    await food.deleteOne();

    res.status(200).json({ message: "Food deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete food" });
  }
}


async function getFoodById(req, res) {
  try {
    const food = await foodModel.findById(req.params.id)
      .populate("foodPartner", "name");

    if (!food) {
      return res.status(404).json({ message: "Food not found" });
    }

    res.status(200).json({ food });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch food" });
  }
}









module.exports = {
  createFood,
  getFoodItem,
  getPartnerFoods,
  deleteFood,
  getFoodById
};
