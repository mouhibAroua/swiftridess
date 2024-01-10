const bcrypt = require('bcrypt');
const {addCom} = require('./CompanyController.js');



  
  const Register = async (req, res) => {
    const { companyName,ownerName, phoneNumber, location ,longtitude,laltitude,emailCompany,passwordCompany } = req.body;
  
    try {
      const hashedPassword = await bcrypt.hash(passwordCompany, 10);
  
      const newCompany = {
        companyName,
        ownerName,
        phoneNumber,
        location,
        longtitude,
        laltitude,
        verification:false,
        emailCompany,
        passwordCompany: hashedPassword}
       
        addCom({ body: newCompany }, res);
    } catch (error) {
      res.status(500).json({ error: 'Error' });
    }
  };
  
  
  module.exports = {
    Register
  };

