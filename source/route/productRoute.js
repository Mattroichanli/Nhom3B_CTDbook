const express = require("express")
const router = express.Router()

<<<<<<< HEAD
const productController = require("../controller/productController")

router.get("/createProduct", productController.createProduct);
router.get("/products", productController.getAllProducts);
router.get("/product/:name", productController.getProductByName);
router.get("/products/KimDong", productController.getProductKimDong);
router.get("/products/NhaNam", productController.getProductNhaNam);
router.get("/products/sachmoi", productController.getLatestProducts);


=======
const productController = require("../controller/productController.js");

router.get("/sachmoi", productController.sachmoi);
router.get("/sachbanchay", productController.sachbanchay);
router.get("/nxbkimdong", productController.nxbkimdong);
router.get("/nxbnhanam", productController.nxbnhanam);
router.get("/tieuthuyet", productController.tieuthuyet);
router.get("/tntv", productController.tntv);
router.get("/lightnovel", productController.lightnovel);
router.get("/truyentranh", productController.truyentranh);
router.get("/sgk", productController.sgk);
router.get("/luyenthi", productController.luyenthi);
router.get("/add-sp", productController.addNewProduct);
router.get("/main/:id", productController.ttsp);
router.get("/search/:name", productController.search);
>>>>>>> demo

module.exports = router