const mongoose = require("mongoose");

//In this schema we will create a foreign key to the user schema
const TimesheetSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  task: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  duration: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("timesheet", TimesheetSchema);
