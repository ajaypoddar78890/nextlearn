import mongoose from "mongoose";

const userScema = new mongoose.Schema({
  name: { type: String, required: true },
  company: { type: String, required: true },
  post: { type: String, required: true },
  country: { type: String, required: true },
  // country: { type: String, required: true },
});

const user = mongoose.model("user", userScema);
export default user;
