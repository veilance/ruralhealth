exports.up = async function(knex, Promise) {
  await knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('medical_id');
    table.string('first_name');
    table.string('last_name');
    table.string('sex');
    table.string('city');
    table.string('province');
    table.date('date_of_birth');
    table.float('weight');
    table.string('blood_type');
    table.integer('height');
    table.string('allergies');
    table.string('chronic_health_problems');
    table.string('approx_alcohol_consumption');
    table.string('approx_smoking_consumption');
    table.integer('blood_pressure_systolic');
    table.integer('blood_pressure_diastolic');
    table.string('surgeries');
    table.string('symptoms');
    table.string('vaccinations');
    table.string('medications');
    table.boolean('flu_shot');
    table.boolean('ubc');
  });
};

exports.down = async function(knex, Promise) {
  await knex.schema.dropTable('users');
};
