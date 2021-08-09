const { Router } = require("express");
const {
  getOrders,
  getUserOrders,
  getOrder,
  updateOrder,
  createOrder,
} = require("../controllers/orderController");

const router = Router();

router.get("/", getOrders);

module.exports = router;
