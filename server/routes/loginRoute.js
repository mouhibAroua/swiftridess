// login
const express = require('express');
const loginRouter = express.Router();
const loginController=require('../controllers/loginControllerCompany');


loginRouter.post('/login', loginController.Login)




module.exports = loginRouter
