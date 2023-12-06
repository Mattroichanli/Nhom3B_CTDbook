const express = require('express')
const router = express.Router()

const homeController = require("../controller/homeController.js")

router.get("/", homeController.root);
router.get("/main", homeController.home);

module.exports = router