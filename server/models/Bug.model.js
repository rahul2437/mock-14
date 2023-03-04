const mongoose = require("mongoose");

const BugSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  severity: {
    type: String,
    required: true,
    enum: ["critical", "major", "medium", "low"],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});
const Bug = mongoose.model("Bug", BugSchema);
module.exports = { Bug };
