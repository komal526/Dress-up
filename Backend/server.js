const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the CORS package
const mongoose = require("mongoose");

const app = express();
const port = 5000; // You can change this to any available port

// Middleware to enable CORS for all routes
app.use(cors());

// Middleware to parse JSON and URL-encoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// models/FormData.js

const formDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  size: {
    type: String,
  },
  clothesType: {
    type: String,
  },
  clothesDetails: {
    type: String,
  },
  measurements: {
    type: String,
  },
  suggestions: {
    type: String,
  },
});

const Data = mongoose.model("Data", formDataSchema);

// POST route to handle form submission
app.post("/submit-form", async (req, res) => {
  // console.log(req.body);
  // Log the submitted data to the console (You can replace this with DB logic)
  // const {
  //   name,
  //   age,
  //   phone,
  //   email,
  //   size,
  //   clothesType,
  //   clothesDetails,
  //   measurements,
  //   suggestions,
  // } = req.body;
  const formOrder = new Data(req.body);

  const savedOrder = await formOrder.save();
  res.json({ message: "Order submitted successfully!", data: savedOrder });

  // You can perform any data processing or validation here

  // Send a success response
  res.json({ message: "Form submitted successfully!", data: req.body });
});

// Start the server
app.listen(port, () => {
  mongoose
    .connect(
      "mongodb+srv://komal28pathania:komal526@cluster0.wgdits7.mongodb.net/",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));
  console.log(`Server running at http://localhost:${port}`);
});
