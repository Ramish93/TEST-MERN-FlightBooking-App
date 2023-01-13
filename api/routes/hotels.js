import express from "express";

import Hotel from "../models/Hotel.js";
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controllers/hotelControl.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyAdmin, createHotel);

//update Hotel route
router.put("/:id", verifyAdmin, updateHotel);

// delete Hotel route
router.delete("/:id", verifyAdmin, deleteHotel);

// get one Hotel route
router.get("/:id", getHotel);

// get all Hotel route
router.get("/", getHotels);

export default router;
