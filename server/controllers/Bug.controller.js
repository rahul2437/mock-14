const jwt = require("jsonwebtoken");
require("dotenv").config();
const { Bug } = require("../models/Bug.model");

function extractToken(req) {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    return req.headers.authorization.split(" ")[1];
  } else if (req.query && req.query.token) {
    return req.query.token;
  }
  return null;
}

exports.createbug = async (req, res) => {
  const token = extractToken(req);
  const { title, severity } = req.body;
  if (!token) {
    return res.status(403).json({ message: "Access denied" });
  } else {
    try {
      const { id } = jwt.verify(token, process.env.SECRET);
      const bug = new Bug({ title, severity, user: id });
      await bug.save();
      return res.status(201).send({ message: "Created new bug" });
    } catch (error) {
      return res
        .status(400)
        .json({ message: "Something went wrong", error: error.message });
    }
  }
};
exports.getUserBugs = async (req, res) => {
  const token = extractToken(req);
  if (!token) {
    return res.status(403).json({ message: "Access denied" });
  } else {
    try {
      const { id } = jwt.verify(token, process.env.SECRET);
      const bugs = await Bug.find({ user: id });
      return res.status(200).json({ bugs, total: bugs.length });
    } catch (error) {
      return res.status(400).json({ message: "Access Denied" });
    }
  }
};
exports.deleteBugByID = async (req, res) => {
  const token = extractToken(req);
  const bug_id = req.params.id;
  if (!token) {
    return res.status(403).json({ message: "Access denied" });
  } else {
    await Bug.findByIdAndDelete(bug_id);
    return res.status(200).json({ message: "Deleted" });
  }
};
