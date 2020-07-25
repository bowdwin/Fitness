const router = require('express').Router();
const Workout = require('../models/workout');

app.post('/api/workouts', (req, res) => {
  db.Workout.create({
    //do nothing
  }).then((newWorkout) => {
    res.json(newWorkout);
  });
});

module.exports = router;
