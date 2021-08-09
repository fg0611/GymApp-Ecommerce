const { Router } = require("express");
const { getProducts } = require("../controllers/productControllers/getProducts");
const { createProducts } = require("../controllers/productControllers/createProducts");
const { getProductById } = require('../controllers/productControllers/getProductById');
const { deleteProduct } = require('../controllers/productControllers/deleteProduct');
const { updateProductById } = require('../controllers/productControllers/updateProductById');
const { createProductsSeeds } = require("../controllers/productControllers/createProducts");

const router = Router();

router.get("/", getProducts);
router.get("/:id", getProductById);
router.delete("/delete/:id", deleteProduct);
router.put("/update/:id", updateProductById);
router.post("/addProducts", createProducts);

module.exports = router;
