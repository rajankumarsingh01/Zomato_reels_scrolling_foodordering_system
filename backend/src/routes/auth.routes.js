// const express = require('express');
// const authController = require("../controllers/auth.controller")

// const router = express.Router();


// // user auth APIs
// router.post('/user/register',authController.registerUser)
// router.post('/user/login',authController.loginUser)
// router.get('/user/logout',authController.logoutUser)


// // foodpartner auth APIs
// router.post('/food-partner/register',authController.registerFoodPartner)
// router.post('/food-partner/login',authController.loginFoodPartner)
// router.get('/food-partner/logout',authController.logoutFoodPartner)

// module.exports = router;


const express = require("express");
const authController = require("../controllers/auth.controller");

const {
  authUserMiddleware,
  authFoodPartnerMiddleware
} = require("../middlewares/auth.middleware");

const router = express.Router();

// ================= USER =================
router.post("/user/register", authController.registerUser);
router.post("/user/login", authController.loginUser);
router.get("/user/logout", authController.logoutUser);

router.get("/me/user", authUserMiddleware, (req, res) => {
  res.status(200).json({
    role: "user",
    user: req.user,
  });
});

// ================= FOOD PARTNER =================
router.post("/food-partner/register", authController.registerFoodPartner);
router.post("/food-partner/login", authController.loginFoodPartner);
router.get("/food-partner/logout", authController.logoutFoodPartner);

router.get("/me/food-partner", authFoodPartnerMiddleware, (req, res) => {
  res.status(200).json({
    role: "partner",
    foodPartner: req.foodPartner,
  });
});






module.exports = router;
