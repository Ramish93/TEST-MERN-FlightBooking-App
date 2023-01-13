import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/userControl.js";

const router = express.Router();

router.get("/:id", getUser);
router.get("/", getUsers);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

export default router;
