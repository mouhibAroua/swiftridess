const router = require('express').Router();
const CompanyController = require('../controllers/CompanyController');



router.get('/car/getallcars', CompanyController.getAllCar);

router.get('/company/getall', CompanyController.getAllCom);

router.get('/company/getOne/:id', CompanyController.getOneCom);

// GET user by ID
router.get('/car/:id', CompanyController.getCarById);

// POST create a new user
router.post('/car/add', CompanyController.addCar);

// PUT update a user by ID
router.put('/car/:id', CompanyController.updateCar);


router.put('/company/profile/:id', CompanyController.updateProfile);

// DELETE a user by ID
router.delete('/car/:id', CompanyController.deleteCar);

router.delete('/company/:id', CompanyController.deleteCom);








module.exports = router;