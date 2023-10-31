const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/treatmentController");
const authenticationMiddleware = require("../../infrastructure/middlewares/authMiddleware");

router.post("/", authenticationMiddleware, serviceController.create);
router.get("/", authenticationMiddleware, serviceController.getAllServices);
router.get(
  "/client/:id",
  authenticationMiddleware,
  serviceController.getByClientId
);
router.get("/:id", authenticationMiddleware, serviceController.getServiceById);
router.put("/:id", authenticationMiddleware, serviceController.updateService);
router.delete(
  "/:id",
  authenticationMiddleware,
  serviceController.deleteService
);

module.exports = router;
