const CartRouter=require('express').Router();
const CartController =require('../Controllers/ControllerCart')

CartRouter.get("/Cart",CartController.getAllCrats)
CartRouter.get('/OneCart/:id',CartController.getOneCart)
CartRouter.delete('/deleteCart/:id',CartController.DeleteCart)
CartRouter.post('/addCart',CartController.addCart)
CartRouter.put('/updateCart/:id',CartController.updateCart)
CartRouter.get('/UserCart/:id',CartController.getUserCart)
module.exports=CartRouter