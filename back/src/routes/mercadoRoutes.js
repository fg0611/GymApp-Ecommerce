const { Router } = require("express");
const { pagosId } = require('../controllers/paymentControllers/mercadopagoController');
const { payment } = require('../controllers/paymentControllers/payment');
const { mercadoPago} = require('../controllers/paymentControllers/mercadoPago');

const router = Router();
 


router.get("/pagos", payment);
router.get("/:userId", mercadoPago);


module.exports = router;
