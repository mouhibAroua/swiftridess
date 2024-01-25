const User = require('../models/users');
const Cars=require('../models/vehicles');
const Company=require('../models/company');
const Reservation=require('../models/reservation');
const jwt =require('jsonwebtoken')
const Feedback=require('../models/feedback');

const generateToken = (id, fullName) => {
  const expiresIn = 60 * 60 * 48;
  return jwt.sign({ id, fullName }, 'secretKey', { expiresIn: expiresIn });
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
    const token = generateToken(newUser.id,newUser.fullName);
    newUser.dataValues.token=token
    res.json(newUser);
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



///Reservation////


function calculateReturnDate(currentDate) {
  const returnDate = new Date(currentDate);
  returnDate.setMonth(returnDate.getMonth() + 3);
  return returnDate;
}

async function getReservationById(req, res) {
  const { idcompany } = req.params;
  const currentDate = new Date();
  const formattedCurrentDate = currentDate.toLocaleDateString();
  const returnDate = new Date(currentDate);
  returnDate.setMonth(returnDate.getMonth() + 3);
  try {
    if (isNaN(idcompany)) {
      return res.status(400).json({ error: 'Invalid idcompany provided' });
    }

    const idcompanyValue = parseInt(idcompany, 10);

    const reservationData = await Reservation.findAll({
      where: { idcompany: idcompanyValue },
      include: [
        { model: User, as: 'user' },
        {
          model: Cars,
          as: 'car',
          include: [
            {
              model: Company,
              as: 'company',
              attributes: [
                'idcompany',
                'companyName',
                'ownerName',
                'phoneNumber',
                'location',
                'verification',
                'longtitude',
                'laltitude',
                'emailCompany',
                'passwordCompany',
              ],
            },
          ],
        },
      ],
    });

    if (reservationData.length === 0) {
      return res.status(404).json({ error: `No reservations found for Company ID ${idcompanyValue}` });
    }

    const response = reservationData.map((reservation) => {
      const userInfo = reservation.user.toJSON();
      const carInfo = reservation.car.toJSON();
      const userAttributes = ['fullName', 'phoneNumber', 'email'];

      const filteredUserInfo = userAttributes.reduce((acc, attribute) => {
        if (userInfo.hasOwnProperty(attribute)) {
          acc[attribute] = userInfo[attribute];
        }
        return acc;
      }, {});

      return {
        currentDateTime: formattedCurrentDate.toLocaleString(),
        returnDate: returnDate.toLocaleDateString(),
        user: filteredUserInfo,
        car: {
          serialCar: carInfo.serialCar,
          brand: carInfo.brand,
          model: carInfo.model,
        },
      };
    });

    return res.status(200).json(response);
  } catch (error) {
    console.error('Error fetching reservations info:', error.message);
    res.status(500).json({ error: error.message });
  }
}


async function createReservation(req, res) {
  try {
    const { userid, vehicleid } = req.params;
    if (isNaN(userid) || isNaN(vehicleid)) {
      return res.status(400).json({ error: 'Invalid user or vehicle ID provided' });
    }
    const iduserValue = parseInt(userid, 10);
    const idvehicleValue = parseInt(vehicleid, 10);
    const car = await Cars.findByPk(idvehicleValue, {
      include: [{ model: Company, as: 'company' }],
    });

    if (!car) {
      return res.status(404).json({ error: 'Car not found' });
    }
    const idcompanyValue = car.company.idcompany;

    const currentDate = new Date();
    const returnDate = calculateReturnDate(currentDate); 
    const newReservation = await Reservation.create({
      iduser: iduserValue,
      idcar: idvehicleValue,
      idcompany: idcompanyValue,
      startDate: currentDate,
      returnDate: returnDate,
    });
    return res.status(201).json(newReservation);
  } catch (error) {
    console.error('Error creating reservation:', error.message);
    return res.status(500).json({ error: error.message });
  }
}


function calculateReturnDate(currentDate) {
  const returnDate = new Date(currentDate);
  returnDate.setMonth(returnDate.getMonth() + 3);
  return returnDate;
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


async function deleteReservation(req, res) {
  try {
    const { phoneNumber } = req.body;
    if (!phoneNumber) {
      return res.status(400).json({ error: 'Phone number is required' });
    }
    const user = await User.findOne({ where: { phoneNumber } });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const reservations = await Reservation.findAll({
      where: { id: user.id }, 
    });
    if (reservations.length === 0) {
      return res.status(404).json({ error: 'No reservations found for this user' });
    }
    await Promise.all(reservations.map((reservation) => reservation.destroy()));
    return res.status(204).json({ success: true, message: 'Reservations successfully deleted' });
  } catch (error) {
    console.error('Error deleting reservation:', error.message);
    return res.status(500).json({ error: error.message });
  }
}

async function acceptReservation(req, res) {
  try {
    const { phoneNumber } = req.body;
    if (!phoneNumber) {
      return res.status(400).json({ error: 'Phone number is required' });
    }
    const user = await User.findOne({ where: { phoneNumber } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const affectedRows = await Reservation.update(
      { accepted: true },
      { where: { iduser: user.id } }
    );
    if (affectedRows > 0) {
      return res.status(200).json({ success: true, message: 'Reservations successfully accepted' });
    } else {
      return res.status(404).json({ error: 'No reservations found for this user' });
    }
  } catch (error) {
    console.error('Error accepting reservation:', error.message);
    return res.status(500).json({ error: error.message });
  }
};
async function searchByName(req, res) {
  try {
const fullName = req.params.name
const search= await User.findAll({
  where: { fullName: fullName},
})
return res.status(200).json(search)
  }
  catch (error) {
    console.error('Error');
    res.status(500).json({ error: error.message });
  }
}



const reserveVehicle = async (req, res) => {
  try {
    const { vehicleId } = req.params;
    const reservationDate = new Date();
    reservationDate.setMonth(reservationDate.getMonth() + 3);
    await Cars.update(
      { reserved: reservationDate },
      {
        where: {
          idcars: vehicleId,
        },
      }
    );
    res.status(201).json({ message: 'Reservation successful', reservationDate });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

async function getAllFeedBack(req, res) {
  try {
    const feedbacks = await Feedback.findAll({
      include: [
        {
          model: User,
          as: 'client',
          attributes: ['fullName', 'image_user'], 
        },
      ],
    });
    const feedbacksWithFullNameAndImage = feedbacks.map((feedback) => ({
      idfeedback: feedback.idfeedback,
      content: feedback.content,
      client_id: feedback.client_id,
      clientFullName: feedback.client.fullName,
      clientImageUser: feedback.client.image_user, 
    }));

    res.json(feedbacksWithFullNameAndImage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createFeedback(req, res) {
  const { content, client_id } = req.body;
  try {
    if (!content || !client_id) {
      return res.status(400).json({ error: 'Content and client_id are required fields.' });
    }
    const newFeedback = await Feedback.create({
      content,
      client_id,
    });
    res.status(201).json(newFeedback);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  searchByName,
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  getReservationById,
  createReservation,
  getCompanyInfoByCarId,
  deleteReservation,
  acceptReservation,
  reserveVehicle,
  getAllFeedBack,
  createFeedback,
};