import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  res.send("this is hotel endpoint");
});

export default router;
