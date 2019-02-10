"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex('users')
    .count('id')
      .then((results) => {
        res.json(results);
    });
  });

  router.get("/users/allergies", (req, res) => {
    knex('users')
    .count('allergies')
    .where('allergies', 'like', '%dairy%')
  })

  router.post("/", (req, res) => {
    const data = Object.keys(req.body)
    console.log('data', data)
    console.log('data[0]', data[0])
    const dataparsed = JSON.parse(data[0])
    console.log('dataparsed', Object.keys(dataparsed))
    console.log('dataparsed.id',dataparsed.id)

    const allergies = dataparsed.allergies.split('#').toString()
    console.log('allergies', allergies)

    const chronic_health_problems = dataparsed.chronic_health_problems.split('#').toString()
    console.log('chronic_health_problems', chronic_health_problems)

    const surgeries = dataparsed.surgeries.split('#').toString()
    console.log('surgeries', surgeries)

    const symptoms = dataparsed.symptoms.split('#').toString()
    console.log('symptoms', symptoms)

    const vaccinations = dataparsed.vaccinations.split('#').toString()
    console.log('vaccinations', vaccinations)

    const medications = dataparsed.medications.split('#').toString()
    console.log('medications', medications)

    knex('users')
    .returning("*")
      .insert({
        medical_id: dataparsed.facebook_id,
        first_name: dataparsed.first_name,
        last_name: dataparsed.last_name,
        sex: dataparsed.sex,
        city: dataparsed.city,
        province: dataparsed.province,
        date_of_birth: dataparsed.date_of_birth,
        weight: dataparsed.weight,
        blood_type: dataparsed.blood_type,
        height: dataparsed.height,
        allergies: allergies,
        chronic_health_problems: chronic_health_problems,
        approx_alcohol_consumption: dataparsed.approx_alcohol_consumption,
        approx_smoking_consumption: dataparsed.approx_smoking_consumption,
        blood_pressure_systolic: dataparsed.blood_pressure_systolic,
        blood_pressure_diastolic: dataparsed.blood_pressure_diastolic,
        surgeries: surgeries,
        symptoms: symptoms,
        vaccinations: vaccinations,
        medications: medications,
        flu_shot: dataparsed.flu_shot,
        ubc: dataparsed.ubc
      }).then(error => {
        console.log(error)
      })
  })

  return router;
}