const express = require("express");
const {
  createbug,
  getUserBugs,
  deleteBugByID,
} = require("../controllers/Bug.controller");
const bugRouter = express.Router();

bugRouter.post("/addbug", createbug);
bugRouter.get("/", getUserBugs);
bugRouter.patch("/:id");
bugRouter.delete("/:id", deleteBugByID);

module.exports = { bugRouter };
