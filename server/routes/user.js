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
  getAllCustomers,
  getAllUsersData,
  getAllWorkers,
  getCustomer,
  getCustomers,
} = require("../controllers/user.controller");
const { protect } = require("../middleware/auth.middleware");

router.post("/register/user", registerUser);
router.post("/login/user", authUser);
router.get("/allusers", getAllUsersData);
router.get("/workers", protect, getAllWorkers);
// router.get("/customers", protect, getAllCustomers);

router.get("/allcustomers", protect, getCustomers);

router.put("/update/:id", protect, updateUserProfile);
router.delete("/delete/user/:id", protect, deleteUserProfile);
router.get("/user/:id", protect, getUser);
router.post("/user/upload", protect, uploadPhoto);

module.exports = router;
