const { Router } = require("express");
const { createOrder } = require('../controllers/orderControllers/createOrder');
const { updateOrder } = require('../controllers/orderControllers/updateOrder');
const { deleteOrder } = require('../controllers/orderControllers/deleteOrder');
const { getOrderById } = require('../controllers/orderControllers/getOrderById');
const { getAllOrders } = require('../controllers/orderControllers/getAllOrders');
const { getOrdersByUserId } = require('../controllers/orderControllers/getOrdersByUserId');
const { deleteProductById } = require('../controllers/orderControllers/deleteProductById');
const { getOrderCartByUserId } = require('../controllers/orderControllers/getOrderCartByUserId');


const router = Router();

router.post("/create", createOrder);
router.put("/update/:id", updateOrder);
router.delete("/delete/product", deleteProductById);
router.delete("/delete/:id", deleteOrder);
router.get("/:id", getOrderById);
router.get("/user/:id", getOrdersByUserId);
router.get("/", getAllOrders);
router.get("/cart/:userId", getOrderCartByUserId);

module.exports = router;
