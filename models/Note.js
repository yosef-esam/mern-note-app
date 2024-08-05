import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    maxlength: [40, "Title cannot be more than 100 characters"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    maxlength: [200, "Description cannot be more than 500 characters"],
  },
  userId: {
    type: String,
    required: [true, "User ID is required"],
  },
  color: {
    type: String,
    default: "#ffff",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Note", NoteSchema);
