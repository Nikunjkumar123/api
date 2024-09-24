const express = require('express');
const jobRouter = express.Router();
const {allJob,createJob,singleJob,updateJob,deleteJob} = require('../controllers/jobControllers.js')
jobRouter.route('/').get(allJob).post(createJob);
jobRouter.route('/:id').get(singleJob).patch(updateJob).delete(deleteJob);

module.exports = jobRouter;