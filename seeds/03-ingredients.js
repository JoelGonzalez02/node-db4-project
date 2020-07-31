
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'Chocolate chips', quantity: '2 cups' },
        {ingredient_name: 'Cocoa Powder', quantity: '3 tbl spoons'},
        {ingredient_name: 'Sliced apples', quantity: '7 cups'}
      ]);
    });
};
