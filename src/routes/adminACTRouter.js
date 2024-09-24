const express =  require('express');
const adminACTIVITYRouter = express.Router();

const {getALL_USER,createUser,updateUser,deleteuser} = require('../controllers/adminActivity.js')

adminACTIVITYRouter.route('/').get(getALL_USER).post(createUser)
adminACTIVITYRouter.route('/:id').patch(updateUser).delete(deleteuser)

module.exports = adminACTIVITYRouter;