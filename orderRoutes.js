const { Router } = require("express");
const { createOrders } = require('../controllers/orderControllers/createOrders');
const { getAllOrders } = require('../controllers/orderControllers/getAllOrders');
const { updateOrderById } = require('../controllers/orderControllers/updateOrderById');
const { deleteOrderById } = require('../controllers/orderControllers/deleteOrderById');
const { getOrdersByUserId } = require('../controllers/orderControllers/getOrdersByUserId');


const router = Router();

//Esta ruta es un PUT prorque si existe una orden la modifica,
//Si no, crea la orden.
router.put("/addOrder", createOrders);
router.get("/", getAllOrders);
router.get("/update:id", updateOrderById);
router.get("/delete/:id", deleteOrderById);
router.get("/:userId", getOrdersByUserId);

module.exports = router;
