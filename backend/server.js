import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";
import newsRoutes from "./routes/newsroutes.js";
import userRoutes from "./routes/userroutes.js";

const app = express();

const PORT = process.env.PORT || 8080;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);
app.use(morgan("dev")); // Log requests to the console
app.use(express.json()); // Parse JSON request bodies
dotenv.config();

// CONNECTING TO DB

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("databse connection established");
  } catch (err) {
    console.log(`getting errors to connectd the databse ${err}`);
  }
};

// routes
// Use routes
app.use("/api", userRoutes);

app.use("/api", newsRoutes);

app.get("/", (req, res) => {
  res.send("hlww from the server ");
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
  connect();
});
