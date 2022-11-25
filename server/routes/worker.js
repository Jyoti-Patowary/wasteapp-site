const express = require("express");
const router = express.Router();
const {
  registerWorker,
  authWorker,
} = require("../controllers/worker.controller");

router.route("/register/worker").post(registerWorker);
router.route("/login/worker").post(authWorker);

module.exports = router;
