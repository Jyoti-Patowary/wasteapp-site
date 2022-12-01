const { hash } = require("bcrypt");
const asyncHandler = require("express-async-handler");
const User = require("../models/user.model");
const generateToken = require("../utility/token");

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    const matchPassword = await user.matchPassword(password);
    if (!matchPassword)
      return res.status(401).json({ error: "Invalid email/password." });

    const token = generateToken(user._id);
    console.log({ token });
    console.log(user);
    return res.status(200).json({
      _id: user._id,
      role: user.role,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      address: user.address,
      phoneNumber: user.phoneNumber,
      photo: user.photo,
      token,
    });
  } else {
    res.status(401).json({ error: "Invalid email/password." });
  }
});

const getUser = asyncHandler(async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await User.findById(_id);

    if (!user) {
      return res.status(404).send();
    }

    res.send(user);
  } catch (e) {
    res.status(401).send();
  }
});

const registerUser = asyncHandler(async (req, res) => {
  const {
    role,
    firstname,
    lastname,
    email,
    password,
    address,
    phoneNumber,
    photo,
  } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ error: "User already exist." });
    }

    const user = await User.create({
      role,
      firstname,
      lastname,
      email,
      password,
      address,
      phoneNumber,
      photo,
    });

    return res.status(201).json({
      _id: user._id,
      role: user.role,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      address: user.address,
      phoneNumber: user.phoneNumber,
      photo: user.photo,
      token: generateToken(user._id),
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

const getAllUsers = async (req, res) => {
  try {
    let allUsers = await User.find({}).lean();
    res.json([
      ...allUsers,
      // token: generateToken(allUsers._id),
    ]);
  } catch (e) {
    res.status(400);
    throw new Error("Enable Find Users");
  }
};

const updateUserProfile = asyncHandler(async (req, res) => {
  try {
    let = await User.findOneAndUpdate(
      { _id: req.user._id },
      {
        $set: {
          ...req.body,
          password: await hash(req.body.password, 13),
        },
      },
      { new: true }
    )
      .select("-password")
      .lean();

    res.json({
      ...updatedUser,
      token: generateToken(updatedUser._id),
    });
  } catch (err) {
    res.status(404);
    throw new Error("User Update failed");
  }
});

const deleteUserProfile = asyncHandler(async (req, res) => {
  try {
    let deleteUser = await User.findOneAndDelete({ _id: req.user._id })
      .select("-password")
      .lean();

    res.json({
      ...deleteUser,
      token: generateToken(deleteUser._id),
    });
  } catch (err) {
    console.log({ err });
    res.status(404);
    throw new Error("User Delete failed");
  }
});

const uploadPhoto = asyncHandler(async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.user._id,
      {
        photo: req.body.photo,
      },
      { new: true }
    );

    return res.status(200).json({ success: true, user });
  } catch (error) {
    // console.log({ err });
    res.status(500).json({ error: "Image was not uploaded" });
  }
});

module.exports = {
  authUser,
  updateUserProfile,
  registerUser,
  deleteUserProfile,
  getAllUsers,
  getUser,
  uploadPhoto,
};
