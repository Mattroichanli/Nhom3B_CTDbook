const express = require("express")
const router = express.Router()

const productController = require("../controllers/productController")

router.post("/products", productController.createProducts)
router.get("/products", productController.getAllProducts)
router.get("/products/:id", productController.getByIdProduct)

module.exports = router