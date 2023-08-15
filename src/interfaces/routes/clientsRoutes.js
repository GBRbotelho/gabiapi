const express = require("express");
const router = express.Router();
const clientController = require("../controllers/clientController");
const authenticationMiddleware = require("../../infrastructure/middlewares/authMiddleware");

router.post("/", authenticationMiddleware, clientController.create);
router.get("/", authenticationMiddleware, clientController.getAllClients);
router.get("/:id", authenticationMiddleware, clientController.getClientById);
router.put("/:id", authenticationMiddleware, clientController.updateClient);
router.delete("/:id", authenticationMiddleware, clientController.deleteClient);
router.put(
  "/:clientId/add-history",
  authenticationMiddleware,
  clientController.addHistory
);

module.exports = router;
