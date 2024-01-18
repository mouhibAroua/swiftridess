const prodRouter=require('express').Router()
const productController=require('../controllers/ControllerProducts')

prodRouter.get('/allProducts',productController.getProducts)
prodRouter.get('/getOneProd/:ProductID',productController.getOneProd)
prodRouter.post('/addProd',productController.addProd)
prodRouter.delete('/deleteProd/:ProductID',productController.deleteProd)
prodRouter.put('/updateProd/:ProductID',productController.updateProd)
prodRouter.get('/prodsOfUser/:UserID',productController.getProdOfUser)






module.exports= prodRouter;