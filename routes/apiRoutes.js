const router = require('express').Router();
const db = require('../models/');

router.put('/workouts/:id', (req, res) => {});

router.post('/workouts/', (req, res) => {});

router.get('/workouts/', (req, res) => {
  db.Workout.find({}, (err, workouts) => {
    if (err) {
      console.log(err);
    } else {
      res.json(workouts);
    }
  });
});

module.exports = router;
