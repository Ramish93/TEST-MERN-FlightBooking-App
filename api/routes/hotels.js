import express from "express";

import Hotel from "../models/Hotel.js";
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controllers/hotelControl.js";

const router = express.Router();

router.post("/", createHotel);

//update Hotel route
router.put("/:id", updateHotel);

// delete Hotel route
router.delete("/:id", deleteHotel);

// get one Hotel route
router.get("/:id", getHotel);

// get all Hotel route
router.get("/", getHotels);

export default router;
