const company = require('../models/company');
const car=require('../models/vehicles');


module.exports = {
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
