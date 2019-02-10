"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("users")
      .then((results) => {
        res.json(results);
    });
  });

  router.post("/", (req, res) => {
    data = json.stringify(res)
    knex('users')
    .returning("*")
      .insert({
        facebook_id: req.body.facebook_id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone: req.body.phone,
        sex: req.body.sex,
        age: req.body.age,
        city: req.body.city,
      })
  });

  return router;
}
