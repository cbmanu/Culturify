import { Schema, model } from "mongoose";
const fileSchema = new Schema({
  filename: String,
  contentType: String,
  data: Buffer,
});

// Create a model
export default model("File", fileSchema);
