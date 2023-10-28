const express = require("express");
const router = express.Router();
const consultationController = require("../controllers/consultationController");
const authenticationMiddleware = require("../../infrastructure/middlewares/authMiddleware");

router.post("/", authenticationMiddleware, consultationController.create);
// router.get(
//   "/",
//   authenticationMiddleware,
//   consultationController.getAllServices
// );
router.get(
  "/client/:id",
  authenticationMiddleware,
  consultationController.getByClientId
);
// router.get(
//   "/:id",
//   authenticationMiddleware,
//   consultationController.getServiceById
// );
// router.put(
//   "/:id",
//   authenticationMiddleware,
//   consultationController.updateService
// );
// router.delete(
//   "/:id",
//   authenticationMiddleware,
//   consultationController.deleteService
// );

module.exports = router;
