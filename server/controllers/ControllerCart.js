const Cart = require('../models/cart')


const getAllCrats = async(req,res) =>{
 const carts=await Cart.findAll()
    res.json(carts)
}
const getOneCart = async(req,res) =>{
    const carts=await  Cart.findOne({where:{CartID:req.params.id}})
    res.json(carts)
}
const DeleteCart = async(req,res) =>{
    const carts=await Cart.destroy({where:{CartID:req.params.id}})
    res.json(carts)
}
const addCart = async(req,res) =>{
    const carts=await Cart.create(req.body)
    res.json(carts)
}
const updateCart = async(req,res) =>{
    const carts=await Cart.update(req.body,{where:{CartID:req.params.id}})
    res.json(carts)
}
const getUserCart=async(req,res)=>{
    const ux=await Cart.findAll({where:{company_idcompany:req.params.id}})
    res.json(ux)
}


module.exports = {getAllCrats,getOneCart,DeleteCart,addCart,updateCart,getUserCart}