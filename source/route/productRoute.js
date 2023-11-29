const express = require("express")
const router = express.Router()

const productController = require("../controller/productController")

router.get("/createProduct", productController.createProduct);
router.get("/products", productController.getAllProducts);
router.get("/product/:name", productController.getProductByName);
router.get("/products/KimDong", productController.getProductKimDong);
router.get("/products/NhaNam", productController.getProductNhaNam);
router.get("/products/sachmoi", productController.getLatestProducts);



module.exports = router