const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/User.model");

exports.singup = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Bad request" });
  }
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    } else {
      let hashed_password = bcrypt.hashSync(password, 10);
      let new_user = new User({ email, password: hashed_password });
      await new_user.save();
      return res.status(201).json({ message: "User Created Successfully" });
    }
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }
};
exports.singin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Bad request" });
  }
  try {
    let user = await User.findOne({ email });
    if (user) {
      let match_password = bcrypt.compareSync(password, user.password);
      if (match_password) {
        let token = jwt.sign(
          {
            id: user._id,
          },
          process.env.SECRET
        );
        return res.status(201).json({ message: "User Logged In", token });
      } else {
        return res.status(400).json({ message: "Invalid Credentials" });
      }
    } else {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }
};
