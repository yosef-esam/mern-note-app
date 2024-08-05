import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import notes from "./routes/notes.js";
import { conntectDB } from "./config/db.js";
import Users from "./routes/users.js";

dotenv.config({
  path: "./config/config.env",
});
const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/notes", notes);
app.use("/api/v1/users", Users);

app.listen(3000, () => {
  try {
    conntectDB();
    console.log("server in running at 3000 port ");
    console.log("connected to DB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
});
