const Customer = require("../models/customer.model");
const generateToken = require("../utility/token");
const asyncHandler = require("express-async-handler");

const authCustomer = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const customer = await Customer.findOne({ email });

  if (customer && (await customer.matchPassword(password))) {
    res.json({
      _id: customer._id,
      firstname: customer.firstname,
      lastname: customer.lastname,
      phoneNumber: customer.phoneNumber,
      email: customer.email,
      address: customer.address,
      photo: customer.pic,
      orderHistory: customer.orderHistory,
      token: generateToken(customer._id),
    });
  } else {
    res.status(401);
    throw new Error("Please fill up correct email or password");
  }
});

const registerCustomer = asyncHandler(async (req, res) => {
  const {
    firstname,
    lastname,
    phoneNumber,
    email,
    password,
    photo,
    address,
    orderHistory,
  } = req.body;

  try {
    const customerExists = await Customer.findOne({ email });

    if (customerExists) {
      return res.status(400).json({ error: "Customer already exist." });
    }

    const customer = await Customer.create({
      firstname,
      lastname,
      phoneNumber,
      email,
      password,
      photo,
      address,
      orderHistory,
    });

    res.status(201).json({
      _id: customer._id,
      firstname: customer.firstname,
      lastname: customer.lastname,
      phoneNumber: customer.phoneNumber,
      email: customer.email,
      photo: customer.photo,
      address: customer.address,
      orderHistory: customer.orderHistory,
      token: generateToken(customer._id),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const updateCustomerProfile = asyncHandler(async (req, res) => {
  const customer = await Customer.findById(req.customer._id);

  if (customer) {
    customer.firstname = req.body.firstname || customer.firstname;
    customer.lastname = req.body.lastname || customer.lastname;
    customer.phoneNumber = req.body.phoneNumber || customer.phoneNumber;
    customer.email = req.body.email || customer.email;
    customer.photo = req.body.photo || customer.photo;
    customer.address = req.body.address || customer.address;
    customer.orderHistory = req.body.orderHistory || customer.orderHistory;
    if (req.body.password) {
      customer.password = req.body.password;
    }

    const updatedcustomer = await customer.save();

    res.json({
      _id: updatedcustomer._id,
      firstname: updatedcustomer.firstname,
      lastname: updatedcustomer.lastname,
      phoneNumber: updatedcustomer.phoneNumber,
      email: updatedcustomer.email,
      photo: updatedcustomer.photo,
      address: updatedcustomer.address,
      orderHistory: updatedcustomer.orderHistory,
      token: generateToken(updatedcustomer._id),
    });
  } else {
    res.status(404);
    throw new Error("Customer Not Found");
  }
});

const getCustomer = async (req, res) => {
  try {
    const customer = await Customer.find();
    res.status(200).send(customer);
  } catch (error) {
    res.status(500).send("Server Error");
  }
};

const getCustomerProfile = asyncHandler(async (req, res) => {
  const customer = await Customer.findById(req.params.id);

  if (customer) {
    res.status(200).send(customer);
  } else {
    res.status(500);
    throw new Error("Customer doesn't Exist by specific ID");
  }
});

const deleteCustomer = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    const customer = await Customer.findByIdAndDelete(id);
    res.send(`Document with ${customer.id} has been deleted..`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = {
  authCustomer,
  updateCustomerProfile,
  registerCustomer,
  getCustomerProfile,
  getCustomer,
  deleteCustomer,
};
