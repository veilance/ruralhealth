exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('medical_id').unique();
    table.string('first_name');
    table.string('last_name');
    table.string('sex');
    table.string('city');
    table.date('date_of_birth');
    table.string('weight');
    table.string('blood_type');
    table.string('height');
    table.string('allergies');
    table.string('chronic_health_problems');
    table.string('approx_alcohol_consumption');
    table.boolean('period');
    table.float('blood_pressure');
    table.string('surgeries');
    table.string('symptoms');
    table.string('vaccinations');
    table.string('medications');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
