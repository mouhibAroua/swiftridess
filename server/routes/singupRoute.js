// signup
const express = require('express');
const signupController=require('../controllers/signupControllerCompany');
const signupRouter = express.Router();

signupRouter.post('/signup', signupController.Register);





module.exports = signupRouter