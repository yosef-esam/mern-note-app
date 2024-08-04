import Note from "../modules/Note.js";

export const getNotes = (req, res) => {
  res.send("home page ");
};

export const getNote = (req, res) => {
  res.send("get single task");
};

export const addNote = (req, res) => {
  res.send("add task");
};

export const updateNote = (req, res) => {
  res.send("update task");
};

export const deleteNote = (req, res) => {
  res.send("delete task");
};
