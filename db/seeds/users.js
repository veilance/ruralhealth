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
  allergies: faker.random.arrayElement(['Peanuts', 'none', 'Shellfish', 'Dairy', 'Eggs', 'Treenuts', 'Soy', 'Wheat', 'none', 'none', 'none', 'none', 'none']),
  chronic_health_problems: faker.random.arrayElement(['Diabetes', 'Heart and Stroke', 'Alcoholism', 'Drug Abuse', 'none', 'none', 'none', 'none', 'none', 'Cancer', 'Asthma', 'Dementia', 'Arthritis']),
  approx_alcohol_consumption: faker.random.arrayElement(['Never', 'Yearly', 'Monthly', 'Weekly', 'Daily']),
  approx_smoking_consumption: faker.random.number(['Never', 'Yearly', 'Monthly', 'Weekly', 'Daily']),
  blood_pressure_systolic: faker.random.number({min:120, max:180}),
  blood_pressure_diastolic: faker.random.number({min:80, max:120}),
  surgeries: faker.random.arrayElement(['none', 'none', 'none', 'none', 'none','none','Heart', 'Triple by Pass', 'Knee', 'Hip', 'Back', 'Shoulder', 'Head', 'Liver']),
  symptoms: faker.random.arrayElement(['Cough and Cold', 'Fever', 'Sorethroat', 'Pain', 'Depression', 'Headaches', 'Rash', 'none', 'none', 'none']),
  vaccinations: faker.random.arrayElement(['Measles, Mumps, Tetanus, Measles, HPV', 'Whooping Cough', 'Tetanus','Shingles','Pneumococcal Disease','HPV','Hepatitis','Measles','Mumps','None']),
  medications: faker.random.arrayElement(['Tylenol', 'Advil', 'Cough Syrup', 'Aspirin', 'Anti Histamine', 'Marajuana', 'Gravol', 'Petol Bismal', 'none', 'none', 'none', 'none']),
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