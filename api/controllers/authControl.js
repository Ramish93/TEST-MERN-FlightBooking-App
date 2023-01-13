import bcrypt from "bcryptjs";

import User from "../models/User.js";

export const register = async (req, res, next) => {
  try {
    // hashing and salting password with bcrypt
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });

    await newUser.save();
    res.status(200).send("user successfully created");
  } catch (error) {
    next(error);
  }
};
