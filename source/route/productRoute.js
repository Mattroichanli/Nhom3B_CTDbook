const express = require("express")
const router = express.Router()

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
/*router.get("/giohang", productController.giohang);*/
router.post("/main/:id", productController.themgio); /*post*/

module.exports = router