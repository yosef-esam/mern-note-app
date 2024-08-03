import express from "express";

import {
  getNotes,
  getNote,
  addNote,
  updateNote,
  deleteNote,
} from "../controllers/note.js";
const router = express.Router();

router.route("/").get(getNotes).post(addNote);
router.route("/:id").get(getNote).put(updateNote).delete(deleteNote);

export default router;
