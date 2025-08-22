// Controller for handling vehicle rental logic

// Homepage - list of available vehicles
const homelist = (req, res) => {
  res.render('index', { 
    title: 'Vehicle Renter - Home',
    message: 'Welcome to Vehicle Renter',
    vehicles: [
      { id: 1, name: 'Honda City', type: 'Car', price: 2000 },
      { id: 2, name: 'Royal Enfield', type: 'Bike', price: 800 },
      { id: 3, name: 'Toyota Innova', type: 'SUV', price: 3500 }
    ]
  });
};

// Vehicle details page
const locationInfo = (req, res) => {
  res.render('vehicle-details', { 
    title: 'Vehicle Details',
    vehicle: { id: req.params.id, name: 'Honda City', type: 'Car', price: 2000 }
  });
};

// ✅ Vehicle selection page
const vehicleSelection = (req, res) => {
  res.render('vehicle-selection', { 
    title: 'Select a Vehicle',
    vehicles: [
      { id: 1, name: 'Honda City', type: 'Car', price: 2000 },
      { id: 2, name: 'Royal Enfield', type: 'Bike', price: 800 },
      { id: 3, name: 'Toyota Innova', type: 'SUV', price: 3500 }
    ]
  });
};

// ✅ Payment gateway page
const paymentGateway = (req, res) => {
  res.render('payment', { 
    title: 'Payment Gateway',
    amount: req.query.amount || 2000,
    message: 'Proceed to payment securely.'
  });
};

// Export functions
module.exports = {
  homelist,
  locationInfo,
  vehicleSelection,
  paymentGateway
};
