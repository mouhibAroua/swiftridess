const router = require('express').Router();
const CompanyController = require('../controllers/CompanyController');



router.get('/car/getallcars', CompanyController.getAllCar);

router.get('/company/getall', CompanyController.getAllCom);

router.get('/company/getOne/:id', CompanyController.getOneCom);

router.get('/company/cars/:id', CompanyController.getCarsByCompany);

router.get('/company/allcars/:id', CompanyController.getAllCarsByCompany);

router.get("/company/getbyName/:name", CompanyController.searchByName);
// GET user by ID
router.get('/car/:id', CompanyController.getCarById);

// POST create a new user
router.post('/car/add', CompanyController.addCar);

// PUT update a user by ID
router.put('/car/update/:id', CompanyController.updateCar);


router.put('/company/profile/:id', CompanyController.updateProfile);

// DELETE a user by ID
router.delete('/car/delete/:id', CompanyController.deleteCar);

router.delete('/company/:id', CompanyController.deleteCom);

router.put('/verification/:id', CompanyController.updatePaymentVerification);







module.exports = router;