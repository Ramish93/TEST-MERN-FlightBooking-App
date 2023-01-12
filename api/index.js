import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongodb");
  } catch (error) {
    throw error;
  }
};

// this method of mongoose will try to reconnect if somthing happens with connection.
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB is Disconnected!");
});

app.get("/", (req, res) => {
  res.send("hello");
});

// middlewares
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.listen(8080, () => {
  connect();
  console.log("listening on port 8080");
});
