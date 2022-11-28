const express = require("express");
const router = express.Router();
const {
  getAllDispute,
  registerDispute,
} = require("../controllers/dispute.controller");

router.post("/disputes", getAllDispute);
router.get("/register-dispute", registerDispute);

module.exports = router;
