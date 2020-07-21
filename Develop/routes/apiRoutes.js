//
const router = require('express').Router();
const Workout = require('../models/Workout');

router.post('/api/workout', (req, res) => {
  Workout.Create({}).then();
});
//main point deploying to heroku with mongo
//https://unh.bootcampcontent.com/unh-coding-bootcamp/unh-por-fsf-pt-03-2020-u-c/blob/master/17-NoSQL/04-Supplemental/MongoDBHerokuDeploy.md
