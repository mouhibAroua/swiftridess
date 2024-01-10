const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const user = require('../models/users');


const generateToken = (id,fullName,role) => {
    const expiresIn = 60 * 60 * 48;//2days
    return jwt.sign({ id, fullName,role}, 'secretKey', { expiresIn: expiresIn });
  };

  
  
  const LoginUser = async(req, res) => {
      const {email,password}=req.body;
      try {
           const result= await user.findOne({ where :{email:email}})
           if(result ===null) res.send("email not found")
           else {
            const verif=result.dataValues.password
            const passwordMatch = await bcrypt.compare(password,verif)

            if(passwordMatch){
               const token=generateToken(result.dataValues.id, result.dataValues.fullName ,result.dataValues.role)  
               result.dataValues.token=token
              res.send(result.dataValues)
            }
            else{
              res.send("Wrong Passeword")
            }
            
        }
      
      }
      catch (error) {res.status(500).json(error)}
  };
  
  module.exports = {
    LoginUser
  };

