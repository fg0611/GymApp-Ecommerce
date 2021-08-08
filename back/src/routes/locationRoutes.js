const { Router } = require("express");
const {
  getLocation,
  createLocation,
  deleteLocation,
  updateLocation,
} = require("../controllers/locationControllers/locationCrud");

const router = Router();

router.get("/", getLocation);
router.get("/:id", getLocation);
router.post("/create", createLocation);
router.delete("/delete/:id", deleteLocation);
router.put("/update/:id", updateLocation);

module.exports = router;
