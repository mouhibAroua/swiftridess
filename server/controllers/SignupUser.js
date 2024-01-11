const bcrypt = require('bcrypt');
const {createUser} = require('./UserController');



  
  const RegisterUser = async (req, res) => {
    const { fullName,image_user, phoneNumber ,longitude,latitude,email,password} = req.body;
  
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newUser = {
        fullName,
        image_user,
        phoneNumber,
        longitude,
        latitude,
        email,
        role:"client",
        password: hashedPassword}
        createUser({ body: newUser }, res);
    } catch (error) {
      console.log(req.body);

      res.send(error)
    }
  };
  
  
  module.exports = {
    RegisterUser
  };

