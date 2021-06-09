const Workout = require("../models/workout.js");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.post("/api/workouts", ({ body }, res) => {
  Workout.create({})
    .then((workout) => {
      res.json(workout);
    })
    .catch(({ error }) => {
      console.log(error);
    });
});

router.put("/api/workouts/:id", ({ params, body }, response) => {
  Workout.findOneAndUpdate(
    { _id: params.id },
    { $push: { exercises: body } },
    { new: true }).then((workout) => {res.json(workout);}).catch((err) => {
        response.json(err);
    });
});

router.get("/api/workouts/range", (req, response) => {
  Workout.find({})
    .limit(7).then((workout) => {
        response.json(workout);
    }).catch((error) => {
        response.json(error);
    });
});

router.get("/api/workouts", (req, response) => {
  Workout.find({}).then((workout) => {
    response.json(workout);
    })
    .catch((error) => {
        response.json(error);
    });
});

module.exports = router;