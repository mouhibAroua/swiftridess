const chatRouter = require('express').Router();
const chat = require('../controllers/ChatController');

chatRouter.get('/allChat',chat.getAllChat)
chatRouter.get('/one/:id',chat.getOneChat)
chatRouter.post('/addChat',chat.addChat)
chatRouter.delete('/deleteChat/:id',chat.deleteChat)

module.exports=chatRouter