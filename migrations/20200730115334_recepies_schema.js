
exports.up = function(knex) {
  return (
      knex.schema
            .createTable('recipes', tbl => {
                tbl.increments();
                tbl.string('recipe_name').notNullable();
            })
             .createTable('instructions', tbl => {
                tbl.increments();
                tbl.integer('recipes_id')
                    .unsigned()
                    .notNullable()
                    .references('recipes.id')
                    .onDelete('CASCADE')
                    .onUpdate('CASCADE');
                tbl.string('steps').notNullable();
            })
            .createTable('ingredients', tbl => {
                tbl.increments();
                tbl.string('ingredient_name').notNullable();
                tbl.float('quantity');
            })
            .createTable('recipe_ingredients', tbl => {
                tbl.integer('recipes_id')
                    .unsigned()
                    .notNullable()
                    .references('recipes.id')
                    .onDelete('CASCADE')
                    .onUpdate('CASCADE')
                tbl.integer('ingredients_id')
                    .unsigned()
                    .notNullable()
                    .references('ingredients.id')
                    .onDelete('CASCADE')
                    .onUpdate('CASCADE')
                tbl.primary(['recipes_id', 'ingredients_id'])
            })
            
  )
};

exports.down = function(knex) {
  return (
      knex.schema.
            dropTableIfExists('recipe_ingredients')
            .dropTableIfExists('ingredients')
            .dropTableIfExists('instructions')
            .dropTableIfExists('recipes')
  )
};
