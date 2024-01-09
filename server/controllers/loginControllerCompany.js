const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const company = require('../models/company');


const generateToken = (idcompany,companyName) => {
    const expiresIn = 60 * 60 * 48;//2days
    return jwt.sign({ idcompany, companyName}, 'secretKey', { expiresIn: expiresIn });
  };

  
  
  const Login = async(req, res) => {
      const {emailCompany,passwordCompany}=req.body;
      try {
           const result= await company.findOne({ where :{emailCompany:emailCompany}})
           if(result ===null) res.send("email not found")
           else {
            const verif=result.dataValues.passwordCompany
            const passwordMatch = await bcrypt.compare(passwordCompany,verif)

            if(passwordMatch){
               const token=generateToken(result.dataValues.idcompany, result.dataValues.companyName)  
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
    Login
  };

