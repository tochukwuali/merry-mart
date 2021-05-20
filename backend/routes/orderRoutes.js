import express from "express";
import {
  addOrderItems,
  getOrderById,
  getMyOrders,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
} from "../controllers/orderController.js";
import { protectUser, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  .post(protectUser, addOrderItems)
  .get(protectUser, admin, getOrders);
router.route("/myorders").get(protectUser, getMyOrders);
router.route("/:id").get(protectUser, getOrderById);
router.route("/:id/pay").put(protectUser, updateOrderToPaid);
router.route("/:id/deliver").put(protectUser, admin, updateOrderToDelivered);

export default router;
