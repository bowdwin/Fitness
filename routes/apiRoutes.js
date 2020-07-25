const router = require('express').Router();
const db = require('../models/');

router.put('/workouts/:id', (req, res) => {
  //add
});

router.post('/workouts/', (req, res) => {
  //add
});

router.get('/workouts/', (req, res) => {
  db.Workout.find({}, (err, workouts) => {
    if (err) {
      console.log(err);
    } else {
      console.log(workouts);
      res.json(workouts);
    }
  });
});

router.get('/workouts/range', async (req, res) => {
  try {
    const data = await Workout.find({}).limit(7);

    console.log(data);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

module.exports = router;
