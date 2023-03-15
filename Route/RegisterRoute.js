import userInfo from '../Model/userModel.js';
import express from 'express';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
    const result = await userInfo.findOne({ email: req.body.email });
    if (result) {
      res.send({message:"Email already exist"});
    } else {
      const newUser = new userInfo({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
      });
      const user = await newUser.save();
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: jwt.sign({ user }, "my_encryption_text_key"),
      });
    }
  });
  
  userRouter.post("/login", async (req, res) => {
    if (req.body.password && req.body.email) {
      let user = await userInfo.findOne({ email: req.body.email });
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          res.send({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: jwt.sign({ user }, "my_encryption_text_key"),
          });
          return;
        }
      }
      res.status(401).send({ message: "Invalid email or password" });
    } else {
      res.status(401).send({ message: "Invalid email or password" });
    }
  });
  
  export default userRouter;