const { Router } = require("express");
const { getUsers } = require("../controllers/userController");

const router = Router();

router.get("/", getUsers);

module.exports = router;
