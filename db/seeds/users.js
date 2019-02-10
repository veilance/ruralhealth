exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({id: 1, medical_id: '2983579257', first_name: 'Saige', last_name: 'Collins', sex: 'Female', city: 'Prince George', date_of_birth: '1965-06-23', weight: '200 pounds', blood_type: 'O', height: '6 feet', allergies: 'peanuts', chronic_health_problems: 'none', approx_alcohol_consumption: '150ml per week', period: false, blood_pressure: 182, surgeries: 'none', symptoms: 'back pain', vaccinations: 'malaria, flu 2018', medications: 'none' }),
      ]);
    });
};
