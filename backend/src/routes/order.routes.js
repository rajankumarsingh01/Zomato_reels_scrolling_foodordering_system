const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order.controller");
const authMiddleware = require("../middlewares/auth.middleware");

// USER ONLY
router.post(
  "/",
  authMiddleware.authUserMiddleware,
  orderController.createOrder
);

// FOOD PARTNER – get orders for own foods
router.get(
  "/partner",
  authMiddleware.authFoodPartnerMiddleware,
  orderController.getPartnerOrders
);



// PARTNER – update order status
router.patch(
  "/:orderId/status",
  authMiddleware.authFoodPartnerMiddleware,
  orderController.updateOrderStatus
);



module.exports = router;
