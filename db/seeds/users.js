var faker = require('faker');

const createFakeUser = () => ({
  medical_id: faker.random.number(),
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  sex: faker.random.number({min:0, max:2}),
  city: 'Limbo',
  province: 'BC',
  date_of_birth: faker.date.between('1920-01-01','2019-01-01'),
  weight: faker.random.number({min:100, max:250}),
  blood_type: faker.random.arrayElement(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
  height: faker.random.number({min:110, max:210}),
  allergies: faker.random.arrayElement(['peanuts', 'none', 'shellfish', 'dairy']),
  chronic_health_problems: faker.random.arrayElement(['diabetes', 'heart and stroke', 'alcoholism', 'drug abuse']),
  approx_alcohol_consumption: faker.random.number({min:0, max:3}),
  approx_smoking_consumption: faker.random.number({min:0, max:3}),
  blood_pressure_systolic: faker.random.number({min:120, max:180}),
  blood_pressure_diastolic: faker.random.number({min:80, max:120}),
  surgeries: faker.random.arrayElement(['none','none','heart', 'triplebypass', 'knee']),
  symptoms: faker.random.arrayElement(['cough/cold', 'fever', 'sorethroat']),
  vaccinations: faker.random.boolean(),
  medications: faker.random.arrayElement(['tylenol', 'advil', 'drugs']),
  flu_shot: faker.random.boolean(),
  ubc: faker.random.boolean()
});

exports.seed = async function(knex, Promise) {
  const fakeUsers = [];
  const desiredFakeUsers = 1000;
  for(let i = 0; i < desiredFakeUsers; i++) {
    fakeUsers.push(createFakeUser());
  }
  await knex("users")
    .insert(fakeUsers)
}