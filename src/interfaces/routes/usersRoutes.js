const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const authenticationMiddleware = require("../../infrastructure/middlewares/authMiddleware");

router.post("/login", UserController.login);
router.post("/", UserController.create);
router.get("/", authenticationMiddleware, UserController.getAllUsers);
router.get("/:id", authenticationMiddleware, UserController.getUserById);
router.put("/:id", authenticationMiddleware, UserController.updateUser);
router.delete("/:id", authenticationMiddleware, UserController.deleteUser);

module.exports = router;
