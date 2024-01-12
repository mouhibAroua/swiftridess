const express = require('express');
const loginRouterUser = express.Router();
const LoginControllerUser =require('../controllers/LoginUser')



loginRouterUser.post('/login/user', LoginControllerUser.LoginUser)




module.exports = loginRouterUser