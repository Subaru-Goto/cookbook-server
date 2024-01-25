import { recipeData } from "../data/dummyData.js";
export const getAllRecipes = (req, res) => {
  res.setHeader('content-type', 'application/json');
  res.json(recipeData);
};

export const getSingleRecipe = (req, res) => {
  const { id } = req.params;
  const singleRecipe = recipeData.filter(recipe => recipe.recipeId===parseInt(id));
  res.setHeader('content-type', 'application/json');
  res.json(singleRecipe);
};
