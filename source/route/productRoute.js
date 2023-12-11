const express = require("express")
const router = express.Router()
const bodyParser = require('body-parser'); /* mới-muangay */

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
/*router.get("/add-sp", productController.addNewProduct);*/
router.get("/main/:id", productController.ttsp);
router.get("/search/:name", productController.search);


/*mới*/
router.get("/giohang", productController.giohang);
router.post("/main/:id", productController.themgio); /*post*/
router.delete("/giohang/:masp", productController.xoasp);
router.post("/giohang", productController.capnhatgio);
router.get("/thanhtoan", productController.thanhtoan);
router.post("/thanhtoan1", productController.muangay);
router.post("/thanhtoan", productController.magiamgia);
router.post("/thanhtoan2", productController.thanhtoan2);
router.get("/thanhtoan2", productController.pttt);

module.exports = router