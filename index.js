const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("geniusCar server is running");
});

app.listen(port, () => {
  console.log(`geniusCar server is running on ${port}`);
});
