const chat = require('../models/chat');

module.exports = {
    addChat:async(req,res)=>{
        try {
            
            let ad=await chat.create(req.body)
            const token = generateToken(ad.id,ad.content);
            ad.dataValues.token=token
            res.json(ad)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getAllChat:async (req,res)=>{
        const cha= await chat.findAll();
        res.json(cha)
    },
    getOneChat:async (req,res)=>{
        const {id}=req.params;
        const cha=await chat.findByPk(id);
        res.json(cha)
    },
    deleteChat:async (req,res)=>{
        const {id}=req.params;
        const cha=await chat.destroy({
            where:{id}
        })
        res.json(cha)
    },
    getAllChatsByCompanyId: async (req, res) => {
        try {
            const { companyId } = req.params;
            const chats = await chat.findAll({
                where: { company_idcompany: companyId },
            });

            res.json(chats);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getAllChatsByUserId: async (req, res) => {
        try {
            const { userId } = req.params;
            const chats = await chat.findAll({
                where: { client_id: userId },
            });

            res.json(chats);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getAllChatsByUserIdAndCompanyId: async (req, res) => {
        try {
            const { userId, companyId } = req.params;

            const chats = await chat.findAll({
                where: { 
                    client_id: userId,
                    company_idcompany: companyId,
                },
            });

            res.json(chats);
        } catch (error) {
            res.status(500).json(error);
        }
    },
}