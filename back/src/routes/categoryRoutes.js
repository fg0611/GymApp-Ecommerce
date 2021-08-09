const { Router } = require("express");
const {
  getCategories,
  createCategory,
  deleteCategory,
  updateCategory,
  getCategory,
} = require("../controllers/categoryControllers/categoryController");
const router = Router();

router.get("/", getCategories);
router.get("/detail/:id", getCategory);
router.post("/create", createCategory);
router.delete("/delete/:name", deleteCategory);
router.put("/update/:id", updateCategory);

module.exports = router;
