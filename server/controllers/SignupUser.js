const bcrypt = require('bcrypt');
const {createUser} = require('./UserController');



  
  const RegisterUser = async (req, res) => {
    const { fullName,image_user, phoneNumber ,longtitude,laltitude,email,password,role } = req.body;
  
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newUser = {
        fullName,
        image_user,
        phoneNumber,
        longtitude,
        laltitude,
        email,
        role,
        password: hashedPassword}
       
        createUser({ body: newUser }, res);
    } catch (error) {
      res.status(500).json({ error: 'Error' });
    }
  };
  
  
  module.exports = {
    RegisterUser
  };

