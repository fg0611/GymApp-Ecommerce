const { Router } = require("express");
const {
  checkReviewer,
} = require("../controllers/reviewControllers//checkReviewer");
const {
  createReview,
} = require("../controllers/reviewControllers/createReview");
const {
  deleteReview,
} = require("../controllers/reviewControllers/deleteReview");
const { getReviews } = require("../controllers/reviewControllers/getReviews");
const {
  updateReview,
} = require("../controllers/reviewControllers/updateReview");

const router = Router();

router.post("/check", checkReviewer);
router.post("/add", createReview);
router.post("/delete", deleteReview);
router.put("/update", updateReview);
router.post("/", getReviews);

module.exports = router;
