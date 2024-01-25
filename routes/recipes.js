import express from "express";
import { getAllRecipes, getSingleRecipe } from "../controllers/recipesController.js";

const recipesRouter = express.Router();

recipesRouter.get("/", getAllRecipes);

recipesRouter.get("/:id", getSingleRecipe);

export default recipesRouter;