const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth"); // for protected routes
const { body, validationResult } = require("express-validator");

const User = require("../models/User");
const Timesheet = require("../models/Timesheet");

// @route  GET api/timesheet
// @desc   Get all users timesheets
// @access Private
router.get("/", auth, async (req, res) => {
  try {
    //get the timesheets for the logged in user, find them by the user id and order by desc
    const timesheets = await Timesheet.find({ user: req.user.id }).sort({
      date: -1,
    });
    //return it
    res.json(timesheets);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Server Error!");
  }
});

// @route  POST api/timesheet
// @desc   Add new timesheet
// @access Private
// This route is protected and also needs to be validated
router.post(
  "/",
  [
    auth,
    [
      body("task", "Task is required").not().isEmpty(),
      body("category", "Category is required").not().isEmpty(),
      body("duration", "Please enter the time duration(hh:mm).").isLength({
        max: 5,
      }),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { task, category, duration, description } = req.body;

    try {
      const newTimesheet = new Timesheet({
        task,
        category,
        duration,
        description,
        user: req.user.id,
      });

      const timesheet = await newTimesheet.save();
      res.json(timesheet);
    } catch (error) {
      console.error(error.message);
      return res.status(500).send("Server Error!");
    }
  }
);

// @route  PUT api/timesheet/:id
// @desc   Update a timesheet
// @access Private
// This route is protected and also needs to be validated
router.put("/:id", auth, async (req, res) => {
  const { task, category, duration, description } = req.body;

  //build a timesheet object
  const timesheetFields = {};
  if (task) timesheetFields.task = task;
  if (category) timesheetFields.category = category;
  if (duration) timesheetFields.duration = duration;
  if (description) timesheetFields.description = description;

  try {
    let timesheet = await Timesheet.findById(req.params.id);

    //if the id is not present, send a 404 - NOT FOUND

    if (!timesheet)
      return res.status(404).json({ msg: "Timesheet not found." });

    //Make sure the user owns the timesheet
    if (timesheet.user.toString() != req.user.id) {
      return res.status(401).json({ msg: "Not authorized!" });
    }
    //find the object by its id and update it
    //if the it doesnt exist, we will create a new one
    timesheet = await Timesheet.findByIdAndUpdate(
      req.params.id,
      { $set: timesheetFields },
      { new: true }
    );
    res.json(timesheet);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Server Error!");
  }
});

// @route  DELETE api/timesheet/:id
// @desc   Dekete a timesheet
// @access Private
router.delete("/:id", auth, async (req, res) => {
  try {
    let timesheet = await Timesheet.findById(req.params.id);

    //if the id is not present, send a 404 - NOT FOUND

    if (!timesheet)
      return res.status(404).json({ msg: "Timesheet not found." });

    //Make sure the user owns the timesheet
    if (timesheet.user.toString() != req.user.id) {
      return res.status(401).json({ msg: "Not authorized!" });
    }
    //find the object by its id and delete it
    await Timesheet.findByIdAndRemove(req.params.id);

    res.json({ msg: "TimeSheet removed." });
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Server Error!");
  }
});

module.exports = router;
