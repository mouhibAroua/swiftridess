const router = require('express').Router();
const UserController = require('../controllers/UserController');

// router.get('/user', authenticateToken, UserController.getUserDetails);

// GET all users
router.get('/users/getall', UserController.getAllUsers);

// GET user by ID
router.get('/users/:id', UserController.getUserById);

// POST create a new user
router.post('/users/add', UserController.createUser);

// PUT update a user by ID
router.put('/users/:id', UserController.updateUserById);

// DELETE a user by ID
router.delete('/users/:id', UserController.deleteUserById);


router.get('/company/car/:id', UserController.getCompanyInfoByCarId);

router.get('/company/reservation/:idcompany', UserController.getReservationById);

router.post('/company/reservation/:userid/:vehicleid', UserController.createReservation);

module.exports = router;
