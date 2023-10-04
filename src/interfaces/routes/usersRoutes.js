const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const authenticationMiddleware = require("../../infrastructure/middlewares/authMiddleware");

router.post("/login", UserController.login);
router.post("/refresh-token", UserController.refreshToken);
router.post("/", UserController.create);
router.get("/", authenticationMiddleware, UserController.getAllUsers);
router.get("/:id", authenticationMiddleware, UserController.getUserById);
router.put("/:id", authenticationMiddleware, UserController.updateUser);
router.delete("/:id", authenticationMiddleware, UserController.deleteUser);
router.put(
  "/resend/:id",
  authenticationMiddleware,
  UserController.resendConfirmationEmail
);
router.post("/confirm/:id", UserController.compareConfirmationCode);
router.post("/request-password-reset", UserController.requestPasswordReset);
router.post("/reset-password/:token", UserController.resetPassword);

module.exports = router;
