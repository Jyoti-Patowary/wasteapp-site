const express = require("express");
const router = express.Router();
const {
  getAllTicket,
  getTicket,
  modifyTicket,
  deleteTicket,
  postTicket,
  acceptTicket,
} = require("../controllers/ticket.controller");
const { protect } = require("../middleware/auth.middleware");
// const { route } = require("./dispute");

router.route("/tickets").get(getAllTicket);
router.post("/create/ticket", protect, postTicket);
router.route("/ticket/:id").get(getTicket);
router.post("/ticket/accepted/:id", protect, acceptTicket);
router.route("/update-ticket/:id").put(modifyTicket);
router.route("/delete-ticket/:id").delete(deleteTicket);

module.exports = router;
