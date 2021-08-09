const { Router } = require("express");
const { getProducts } = require("../controllers/productController");
const { createReview } = require("../controllers/reviewController");

const router = Router();

router.get("/", getProducts);
router.post("/addReview", createReview);

module.exports = router;
