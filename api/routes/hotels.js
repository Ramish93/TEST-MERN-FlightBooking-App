import express from "express";

import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controllers/hotelControl.js";
import { verifyAdmin } from "../utils/verifyToken.js";

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
router.get("/countByCity", getHotels);
router.get("/countByType", getHotels);

export default router;
