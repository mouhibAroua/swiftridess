const company = require('../models/company');
const car=require('../models/vehicles');
const jwt =require('jsonwebtoken')
const generateToken = (idcompany, companyName) => {
  const expiresIn = 60 * 60 * 48; //two days ;
  return jwt.sign({ idcompany, companyName }, 'secretKey', { expiresIn: expiresIn });
};

module.exports = {
    addCom:async(req,res)=>{
        try {
            
            let ad=await company.create(req.body)
            const token = generateToken(ad.idcompany,ad.companyName);
            ad.dataValues.token=token
            res.json(ad)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getAllCom:async (req,res)=>{
        const comp=await company.findAll();
        res.json(comp)
    },
    getOneCom:async (req,res)=>{
        const {id}=req.params;
        const comp=await company.findByPk(id);
        res.json(comp)
    },
    deleteCom:async (req,res)=>{
        const {id}=req.params;
        const comp=await company.destroy({
            where:{id}
        })
        res.json(comp)
    },
    addCar:async (req,res)=>{
        const veh=await car.create(req.body);
        res.json(veh)
    },
    getAllCar:async (req,res)=>{
        const veh=await car.findAll();
        res.json(veh)
    },
    getCarById:async (req,res)=>{
        const {id}=req.params;
        const veh=await car.findByPk(id);
        res.json(veh)
    },
    updateCar:async (req,res)=>{
        const {id}=req.params;
        const veh=await car.update(req.body,{
            where:{id}
        })
        res.json(veh)
    },
    deleteCar:async (req,res)=>{
        const {id}=req.params;
        const veh=await car.destroy({
            where:{id}
        })
        res.json(veh)
    },
    updateProfile:async (req,res)=>{
        const {id}=req.params;
        const comp=await company.update(req.body,{
            where:{id}
        })
        res.json(comp)
    }

}
