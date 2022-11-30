const express = require("express");
const router = express.Router();
const {
  registerUser,
  authUser,
  updateUserProfile,
  deleteUserProfile,
  getAllUsers,
  getUser,
  uploadPhoto,
} = require("../controllers/user.controller");
const { protect } = require("../middleware/auth.middleware");

router.post("/register/user", registerUser);
router.post("/login/user", authUser);
router.get("/users", protect, getAllUsers);
router.put("/update/user/:id", protect, updateUserProfile);
router.delete("/delete/user/:id", protect, deleteUserProfile);
router.get("/user/:id", protect, getUser);
router.post("/user/upload", protect, uploadPhoto);

module.exports = router;
