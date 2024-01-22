
const Product=require('../models/product')


module.exports={
    getAll:async(req,res)=>{
        let d=await Product.findAll()
        res.json(d)},getProducts:async(req,res)=>{
          try{ let d=await Product.findAll()
          res.json(d)}
          catch(err){ res.json(err)
          }
      },
    addProd:async(req,res)=>{
      let adProd=await Product.create(req.body)
      res.json(adProd)
    }
    ,
    getOneProd:async(req,res)=>{
      let gp=await Product.findOne({where:{ProductID:req.params.ProductID}})
      res.json(gp)
    },
    deleteProd:async(req,res)=>{
      let de=await Product.destroy({where:{ProductID:req.params.ProductID}})
      res.json(de)
    },
    updateProd: async(req,res) => {
      let upProd = await Product.update(req.body,{where:{ProductID : req.params.ProductID}})
      res.json(upProd)
    },
    getProdOfUser:async(req,res)=>{
      let pu=await Product.findAll({where:{userUserID: req.params.UserID}})
      res.json(pu)
    }, 
       
    }