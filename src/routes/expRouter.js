const express = require('express')
const expRouter = express.Router();

const {createExp,allExp,singleExp,updateExp,deleteExp} = require('../controllers/expController.js')

expRouter.route('/').post(createExp).get(allExp)
expRouter.route('/:id').get(singleExp).patch(updateExp).delete(deleteExp);

module.exports = expRouter;