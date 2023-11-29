const express = require("express")
const router = express.Router()

const productController = require("../controller/productController")

router.get("/createProduct", productController.createProduct);
router.get("/products", productController.getAllProducts);
router.get("/product/:name", productController.getProductByName)

module.exports = router