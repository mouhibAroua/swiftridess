const chatRouter = require('express').Router();
const chat = require('../controllers/ChatController');

chatRouter.get('/allChat',chat.getAllChat)
chatRouter.get('/one/:id',chat.getOneChat)
chatRouter.post('/addChat',chat.addChat)
chatRouter.delete('/deleteChat/:id',chat.deleteChat)
chatRouter.get('/chats/company/:companyId', chat.getAllChatsByCompanyId);
chatRouter.get('/chats/user/:userId', chat.getAllChatsByUserId);
chatRouter.get('/chats/user/:userId/company/:companyId', chat.getAllChatsByUserIdAndCompanyId);

module.exports=chatRouter