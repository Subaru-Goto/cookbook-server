import express from "express";
import recipesRouter from "./routes/recipes.js";
import cors from "cors";

const app = express();
const PORT = 8000;

app.use(cors({origin: "http://localhost:5173"}));
app.use("/", recipesRouter);

app.listen(PORT, (req, res) => {
  console.log(`Listening on port ${PORT}`);
});