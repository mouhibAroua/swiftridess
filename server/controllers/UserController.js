const User = require('../models/users');
const Cars=require('../models/vehicles');
const Company=require('../models/company');

const jwt =require('jsonwebtoken')
const generateToken = (id, username) => {
  const expiresIn = 60 * 60 * 48;
  return jwt.sign({ id, username }, 'secretKey', { expiresIn: expiresIn });
};

// Get all users
async function getAllUsers(req, res) {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Get user by ID
async function getUserById(req, res) {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Create a new user
async function createUser(req, res) {
  try {
    const newUser = await User.create(req.body);
    const token = generateToken(newUser.id,newUser.username);
    newUser.dataValues.token=token
    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Update a user by ID
async function updateUserById(req, res) {
  try {
    const { id } = req.params;
    const [updated] = await User.update(req.body, {
      where: { id },
    });
    if (updated) {
      const updatedUser = await User.findByPk(id);
      res.json(updatedUser);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Delete a user by ID
async function deleteUserById(req, res) {
  try {
    const { id } = req.params;
    const deleted = await User.destroy({
      where: { id },
    });
    if (deleted) {
      res.json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getCompanyInfoByCarId(req, res) {
  const { id } = req.params;
  try {
    const carData = await Cars.findByPk(id, {
      include: [{
        model: Company,
        as: 'company',
        attributes: ['idcompany', 'companyName', 'ownerName', 'phoneNumber', 'location', 'verification', 'longtitude', 'laltitude', 'emailCompany', 'passwordCompany'],
      }],
    });
    if (!carData) {
      return res.status(404).json({ error: `Car with ID ${id} not found` });
    }
    const companyInfo = carData.company.toJSON();
    res.json(companyInfo);
  } catch (error) {
    console.error('Error fetching company info:', error.message);
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  getCompanyInfoByCarId,
};
