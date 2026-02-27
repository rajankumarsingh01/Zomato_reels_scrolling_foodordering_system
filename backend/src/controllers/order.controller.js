const Order = require("../models/order.model");
const Food = require("../models/food.model");

// exports.createOrder = async (req, res) => {
//   try {
//     const { foodId, quantity } = req.body;

//     const order = await Order.create({
//       user: req.user._id,
//       food: foodId,
//       quantity,
//     });

//     res.status(201).json({
//       message: "Order placed",
//       order,
//     });
//   } catch (err) {
//     res.status(500).json({ message: "Order failed" });
//   }
// };

exports.createOrder = async (req, res) => {
  try {
    const { foodId, quantity } = req.body;

    const food = await Food.findById(foodId);
    if (!food) {
      return res.status(404).json({ message: "Food not found" });
    }

    const order = await Order.create({
      user: req.user._id,
      food: foodId,
      foodPartner: food.foodPartner, // 🔥 MOST IMPORTANT LINE
      quantity,
    });

    res.status(201).json({
      message: "Order placed",
      order,
    });
  } catch (err) {
    console.error("ORDER ERROR:", err);
    res.status(500).json({ message: "Order failed" });
  }
};



// exports.getPartnerOrders = async (req, res) => {
//   try {
//     // 1. Partner ke foods nikalo
//     const foods = await Food.find({
//       foodPartner: req.foodPartner._id,
//     }).select("_id");

//     const foodIds = foods.map(f => f._id);

//     // 2. Un foods ke orders
//     const orders = await Order.find({
//       food: { $in: foodIds }
//     })
//       .populate("food", "name")
//       .populate("user", "fullName email")
//       .sort({ createdAt: -1 });

//     res.status(200).json({ orders });

//   } catch (err) {
//     res.status(500).json({ message: "Failed to fetch orders" });
//   }
// };



exports.getPartnerOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      foodPartner: req.foodPartner._id,
    })
      .populate("food", "name")
      .populate("user", "fullName email")
      .sort({ createdAt: -1 });

    res.status(200).json({ orders });
  } catch (err) {
    console.error("PARTNER ORDER ERROR:", err);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};





// ================= UPDATE ORDER STATUS =================
exports.updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    const order = await Order.findById(orderId).populate("food");

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // 🔐 Security: partner sirf apne food ke orders update kare
    if (order.food.foodPartner.toString() !== req.foodPartner._id.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    order.status = status;
    await order.save();

    res.status(200).json({
      message: "Order status updated",
      order,
    });

  } catch (err) {
    res.status(500).json({ message: "Failed to update order" });
  }
};
