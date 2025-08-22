// Homepage
const homepage = (req, res) => {
    res.render('homepage', { title: 'Vehicle Renter' });
};

// Login Page
const loginPage = (req, res) => {
    res.render('login', { title: 'Login Page' });
};

// Profile Page
const profilePage = (req, res) => {
    res.render('profile', { title: 'Profile Page' });
};

// Vehicle Selection Page
const vehicleSelection = (req, res) => {
    res.render('vehicle-selection', { title: 'Vehicle Selection' });
};

// Payment Page
const paymentPage = (req, res) => {
    res.render('payment', { title: 'Payment Page' });
};

module.exports = {
    homepage,
    loginPage,
    profilePage,
    vehicleSelection,
    paymentPage
};
