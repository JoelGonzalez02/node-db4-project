
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {recipes_id: 1 , steps: 'Step 1 : Mix flour and chocolate chips'},
        {recipes_id: 2, steps: 'Step 1: Mix cocoa powder and flour'},
        {recipes_id: 3, steps: 'Step 1: Preheat oven to 375 degrees'}
      ]);
    });
};
