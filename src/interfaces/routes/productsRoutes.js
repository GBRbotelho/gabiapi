const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const authenticationMiddleware = require("../../infrastructure/middlewares/authMiddleware");

router.post("/", authenticationMiddleware, productController.create);
router.get("/", authenticationMiddleware, productController.getAllProducts);
router.get("/:id", authenticationMiddleware, productController.getProductById);
router.put("/:id", authenticationMiddleware, productController.updateProduct);
router.delete(
  "/:id",
  authenticationMiddleware,
  productController.deleteProduct
);

module.exports = router;
