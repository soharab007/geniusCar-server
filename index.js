const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// database

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.8lhtxek.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

//

app.get("/", (req, res) => {
  res.send("geniusCar server is running");
});

app.listen(port, () => {
  console.log(`geniusCar server is running on ${port}`);
});
