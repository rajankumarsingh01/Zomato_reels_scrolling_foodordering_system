// const express = require("express")
// const router = express.Router();
// const foodController = require("../controllers/food.controller")
// const authMiddleware = require("../middlewares/auth.middleware")
// const multer = require("multer")



// const upload = multer({
//     storage: multer.memoryStorage(),
// })



// router.post('/',authMiddleware.authFoodPartnerMiddleware, upload.single("video"),foodController.createFood)


// router.get("/",authMiddleware.authUserMiddleware,foodController.getFoodItem)




// module.exports = router;



// const express = require("express");
// const router = express.Router();
// const foodController = require("../controllers/food.controller");
// const authMiddleware = require("../middlewares/auth.middleware");
// const multer = require("multer");
// const {verifyPartner} = require("../middlewares/auth.middleware")


// const upload = multer({
//   storage: multer.memoryStorage(),
// });

// /*
// ==============================
// FOOD ROUTES
// ==============================
// */

// // ✅ PUBLIC – reels dekhne ke liye (NO LOGIN)
// router.get("/", foodController.getFoodItem);

// // ✅ PROTECTED – sirf food partner upload kare
// router.post(
//   "/",
//   authMiddleware.authFoodPartnerMiddleware,
//   upload.single("video"),
//   foodController.createFood
// );



// // ✅ PARTNER – apne uploaded foods
// router.get(
//   "/partner",
//   authMiddleware.authFoodPartnerMiddleware,
//   foodController.deleteFood
// );


// module.exports = router;



const express = require("express");
const router = express.Router();
const foodController = require("../controllers/food.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const multer = require("multer");

// const upload = multer({
//   storage: multer.memoryStorage(),
// });
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 100 * 1024 * 1024, // ✅ 50MB max
  },
});


/*
==============================
FOOD ROUTES
==============================
*/

// 🌍 PUBLIC – reels dekhne ke liye
router.get("/", foodController.getFoodItem);

// 🔐 PARTNER – upload food
router.post(
  "/",
  authMiddleware.authFoodPartnerMiddleware,
  upload.single("video"),
  foodController.createFood
);

// 🔐 PARTNER – apne uploaded foods
router.get(
  "/partner",
  authMiddleware.authFoodPartnerMiddleware,
  foodController.getPartnerFoods
);

// 🔐 PARTNER – delete own food
router.delete(
  "/:id",
  authMiddleware.authFoodPartnerMiddleware,
  foodController.deleteFood
);

router.get("/:id", foodController.getFoodById);


module.exports = router;
