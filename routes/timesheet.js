const express = require("express");
const router = express.Router();

// @route  GET api/timesheet
// @desc   Get all users timesheets
// @access Private
router.get("/", (req, res) => {
  res.send("get user timesheets.");
});

// @route  POST api/timesheet
// @desc   Add new timesheet
// @access Private
router.post("/", (req, res) => {
  res.send("add a new timesheet");
});

// @route  PUT api/timesheet/:id
// @desc   Update a timesheet
// @access Private
router.put("/:id", (req, res) => {
  res.send("update timesheet");
});

// @route  DELETE api/timesheet/:id
// @desc   Dekete a timesheet
// @access Private
router.delete("/:id", (req, res) => {
  res.send("delete timesheet");
});

module.exports = router;
