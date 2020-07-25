const router = require('express').Router();
const db = require('../models/');

router.put('/workouts/:id', (req, res) => {
  //add
});

router.post('/workouts', (req, res) => {
  db.Workout.create(req.body)
    .then((workout) => {
      console.log(workout, 'workout is posted');
      res.json(workout);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
router.get('/workouts/', (req, res) => {
  db.Workout.find({}, {}, { sort: { day: -1 } })
    .then((workout) => {
      console.log(workout);
      res.json(workout);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
