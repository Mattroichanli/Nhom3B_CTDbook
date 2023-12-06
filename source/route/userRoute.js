const express = require("express")
const router = express.Router()

const userController = require("../controller/userController.js")

router.post("/login", userController.postLogin);
router.get("/login", userController.login);
router.post("/signup", userController.postSignup);
router.get("/signup", userController.signup);

module.exports = router