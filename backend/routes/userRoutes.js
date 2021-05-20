import express from "express";
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/userController.js";
import { protectUser, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser).get(protectUser, admin, getUsers);
router.post("/login", authUser);
router
  .route("/profile")
  .get(protectUser, getUserProfile)
  .put(protectUser, updateUserProfile);
router
  .route("/:id")
  .delete(protectUser, admin, deleteUser)
  .get(protectUser, admin, getUserById)
  .put(protectUser, admin, updateUser);

export default router;
