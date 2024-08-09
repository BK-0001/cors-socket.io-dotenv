import cors from "cors";
import express from "express";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

app.listen(8000, () => {
  console.log(`listening at http://localhost:8000`);
});
