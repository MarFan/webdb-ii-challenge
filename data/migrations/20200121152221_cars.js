
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.string('VIN', 17).index();
        tbl.integer('year');
        tbl.string('make').index();
        tbl.string('model').index();
        tbl.integer('miles');
        tbl.string('transmission');
        tbl.string('title');
        tbl.timestamps(); // adds created_at and updated_at columns
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
