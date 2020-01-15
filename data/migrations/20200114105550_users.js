
exports.up = function(knex) {
    return knex.schema.createTable('users', user => {
        user.increments()
  
        user
        .string('username', 255)
        .notNullable()
        .unique();
  
        user.string('password', 255).notNullable();
         
    })

    .createTable('user_saved', tbl => {
        tbl
            .increments()

        tbl
            .integer('user_Id')
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');

        tbl
            .string('city', 50).notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('user_saved')
    .dropTableIfExists('users')
};
