const express = require("express");
const router = express.Router();
const {
  registerCustomer,
  authCustomer,
  updateCustomerProfile,
  getCustomer,
  getCustomerProfile,
  deleteCustomer,
} = require("../controllers/customer.controller");

router.route("/register/customer").post(registerCustomer);
router.route("/login/customer").post(authCustomer);
router.route("/update/customer").patch(updateCustomerProfile);
router.route("/customers").get(getCustomer);
router.route("/customer/:id").get(getCustomerProfile);
router.route("/customer-delete/:id").delete(deleteCustomer);

module.exports = router;
