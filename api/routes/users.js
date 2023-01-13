import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/userControl.js";
import { varifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("hello user, you are logged in");
});

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("hello user, you are logged in and you can delete your account");
});

router.get("/checkadmin/:id", varifyAdmin, (req, res, next) => {
  res.send("hello admin, you are logged in and you can delete all account");
});

router.get("/:id", getUser);
router.get("/", getUsers);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

export default router;
