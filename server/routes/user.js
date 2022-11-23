const express = require("express");
const router = express.Router();
const { registerUser, authUser } = require("../controllers/user.controller");

router.route("/").post(registerUser);
router.route("/login/admin").post(authUser);
router.route("/login/customer").post(authUser);
router.route("/login/worker").post(authUser);

module.exports = router;
