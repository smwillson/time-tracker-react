const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../middleware/auth");
const { body, validationResult } = require("express-validator");
const User = require("../models/User");

// @route  GET api/auth
// @desc   get logged in user
// @access Private
// auth    Middleware used to protect private route
router.get("/", auth, async (req, res) => {
  try {
    // returns a user object minus the password
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server Error!");
  }
});

// @route  POST api/auth
// @desc   Auth user & get token
// @access Public
router.post(
  "/",
  [
    body("email", "Please include a valid email.").isEmail(),
    body("password", "Password is required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ msg: "Invalid credentials!" });
      }
      //compare the passwords for authentication
      const isMatchPassword = await bcrypt.compare(password, user.password);

      if (!isMatchPassword) {
        return res.status(400).json({ msg: "Invalid credentials!" });
      }
      //create payload for jwt
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 3600000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(err.message);
      res.status(500).send("Server Error!");
    }

    //  res.send("login user");
  }
);

module.exports = router;
