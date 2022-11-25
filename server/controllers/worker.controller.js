const Worker = require("../models/worker.model");
const generateToken = require("../utility/token");
const asyncHandler = require("express-async-handler");

const authWorker = asyncHandler(async (req, res) => {
  try {
    const { workerID, email, password } = req.body;

    const worker = await Worker.findOne({ workerID });

    if (worker && (await user.matchPassword(password))) {
      res.json({
        _id: worker._id,
        workerID: worker.workerID,
        firstname: worker.firstname,
        lastname: worker.lastname,
        phoneNumber: worker.phoneNumber,
        email: worker.email,
        workingExperience: worker.workingExperience,
        address: worker.address,
        photo: worker.pic,
        orderHistory: worker.orderHistory,
        token: generateToken(worker.workerID),
      });
    } else {
      res.status(401);
      throw new Error("Please fill up correct email or password");
    }
  } catch (error) {
    res.sendStatus(500);
  }
});

const registerWorker = asyncHandler(async (req, res) => {
  const {
    workerID,
    firstname,
    lastname,
    phoneNumber,
    email,
    password,
    photo,
    workingExperience,
    address,
    orderHistory,
  } = req.body;

  try {
    const workerExists = await Worker.findOne({ workerID });

    if (workerExists) {
      return res.status(400).json({ error: "Worker already exist." });
    }

    const worker = await Worker.create({
      workerID,
      firstname,
      lastname,
      phoneNumber,
      email,
      password,
      photo,
      address,
      workingExperience,
      orderHistory,
    });

    res.status(201).json({
      _id: worker._id,
      workerID: worker.workerId,
      firstname: worker.firstname,
      lastname: worker.lastname,
      phoneNumber: worker.phoneNumber,
      email: worker.email,
      photo: worker.photo,
      workingExperience: worker.workingExperience,
      address: worker.address,
      orderHistory: worker.orderHistory,
      token: generateToken(worker._id),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const updateWorkerProfile = asyncHandler(async (req, res) => {
  const worker = await Worker.findById(req.worker._id);

  if (worker) {
    worker.worker = req.body.worker || worker.worker;
    worker.firstname = req.body.firstname || worker.firstname;
    worker.lastname = req.body.lastname || worker.lastname;
    worker.phoneNumber = req.body.phoneNumber || worker.phoneNumber;
    worker.email = req.body.email || worker.email;
    worker.photo = req.body.photo || worker.photo;
    worker.workingExperience =
      req.body.workingExperience || worker.workingExperience;
    worker.address = req.body.address || worker.address;
    worker.orderHistory = req.body.orderHistory || worker.orderHistory;
    if (req.body.password) {
      customer.password = req.body.password;
    }

    const updatedworker = await customer.save();

    res.json({
      _id: updatedworker._id,
      worker: updatedworker.worker,
      firstname: updatedworker.firstname,
      lastname: updatedworker.lastname,
      phoneNumber: updatedworker.phoneNumber,
      email: updatedworker.email,
      photo: updatedworker.photo,
      workingExperience: updatedworker.workingExperience,
      address: updatedworker.address,
      orderHistory: updatedworker.orderHistory,
      token: generateToken(updatedworker._id),
    });
  } else {
    res.status(404);
    throw new Error("Worker Not Found");
  }
});

module.exports = { authWorker, updateWorkerProfile, registerWorker };
