const express = require("express");
const connectDB = require("./config/db");

const app = express();

//test
app.get("/", (req, res) => res.json({ msg: "Welcome to time tracker api" }));

//Connect Database
connectDB();

//Init middleware
app.use(express.json({ entended: false }));

//define routes
app.use("/api/users", require("./routes/users")); //import the file that pertains to that route
app.use("/api/auth", require("./routes/auth"));
app.use("/api/timesheet", require("./routes/timesheet"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
