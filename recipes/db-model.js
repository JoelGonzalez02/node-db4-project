const db = require('../data/db-config');
const { orderBy } = require('../data/db-config');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes')
}

function getShoppingList(id) {
   return db('recipe_ingredients')
    .where('recipe_ingredients.recipes_id', id)
    .join('ingredients', 'ingredients.id', 'recipe_ingredients.ingredients_id')
    .select('ingredients.ingredient_name')
}

function getInstructions(id) {
    return db('recipes')
    .where('recipes_id', id)
    .join('instructions', 'instructions.recipes_id', 'recipes_id')
    .select('instructions.steps')
    .limit(1)
}