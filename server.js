const express = require("express");
const mongoose = require("mongoose");
 const dns =require("dns")
 dns.setServers(["8.8.8.8","8.8.4.4"])
const cors = require("cors");
require("dotenv").config();

const todoRoutes = require("./routes/todoRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/todos", todoRoutes);

mongoose
  .connect("mongodb+srv://db_saranya:db_saranya123@cluster0.dmqhpam.mongodb.net/saranya")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Todo API is Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
