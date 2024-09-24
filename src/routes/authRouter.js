const express = require('express');
const authRouter = express.Router();

const {registerUSer,loginUSer,logoutUSer} = require('../controllers/authControllers.js')

authRouter.route('/register').post(registerUSer)
authRouter.route('/login').post(loginUSer)
authRouter.route('/logout').post(logoutUSer)

module.exports = authRouter;