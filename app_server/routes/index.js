const express = require('express');
const router = express.Router();

// Import controller
const ctrlMain = require('../controllers/main');

// ✅ Homepage
router.get('/', ctrlMain.homepage);

// ✅ Login Page
router.get('/loginpage', ctrlMain.loginPage);

// ✅ Profile Page
router.get('/profilepage', ctrlMain.profilePage);

// ✅ Vehicle Selection Page
router.get('/vehileselection', ctrlMain.vehicleSelection);

// ✅ Payment Page
router.get('/paymentpage', ctrlMain.paymentPage);

module.exports = router;
