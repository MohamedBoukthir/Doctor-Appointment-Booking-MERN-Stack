import express from "express";
import {
  updateUser,
  deleteUser,
  getAllUser,
  getSingleUser,
} from "../Controllers/userController.js";

import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router();

router.get("/:id", authenticate, restrict(["patient"]), getSingleUser); // Protected route
router.get("/", authenticate, restrict(["admin"]), getAllUser); // Public route
router.put("/:id", authenticate, restrict(["patient"]), updateUser); // Protected route
router.delete("/:id", authenticate, restrict(["patient"]), deleteUser); // Protected route

export default router;
