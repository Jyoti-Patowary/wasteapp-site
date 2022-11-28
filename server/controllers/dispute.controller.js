const asyncHandler = require("express-async-handler");
const Dispute = require("../models/dispute.model");
const generateToken = require("../utility/token");

const registerDispute = asyncHandler(async (req, res) => {});

const getAllDispute = asyncHandler(async (req, res) => {});

module.exports = {
  registerDispute,
  getAllDispute,
};
