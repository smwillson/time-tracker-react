const express = require("express");
const router = express.Router();

// @route  GET api/auth
// @desc   get logged in user
// @access Private
router.get("/", (req, res) => {
  res.send("get user.");
});

// @route  POST api/auth
// @desc   Auth user & get token
// @access Public
router.post("/", (req, res) => {
  res.send("login user");
});

module.exports = router;
