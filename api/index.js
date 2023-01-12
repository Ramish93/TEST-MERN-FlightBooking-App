import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

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

app.listen(8080, () => {
  connect();
  console.log("listening on port 8080");
});
