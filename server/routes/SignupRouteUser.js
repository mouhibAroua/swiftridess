const express = require('express');
const SignupControllerUser =require('../controllers/SignupUser')
const signupRouterUser = express.Router();

signupRouterUser.post('/signup/user', SignupControllerUser.RegisterUser);





module.exports = signupRouterUser