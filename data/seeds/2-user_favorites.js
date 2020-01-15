exports.seed = function(knex) {
  return knex('user_saved').insert([
    {
      "user_id": "1",
      "city": "houston"
    }
  ]);
;
};