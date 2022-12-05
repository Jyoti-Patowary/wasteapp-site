const express = require("express");
const router = express.Router();
const {
  getAllTicket,
  getTicket,
  modifyTicket,
  deleteTicket,
  postTicket,
  acceptTicket,
  getTicketsByUserId,
  getTicketsCount,
  closeTicket,
} = require("../controllers/ticket.controller");
const { protect } = require("../middleware/auth.middleware");
// const { route } = require("./dispute");

router.route("/tickets").get(getAllTicket);
router.route("/tickets/user/:id").get(getTicketsByUserId);
router.post("/create/ticket", protect, postTicket);
router.route("/ticket/:id").get(getTicket);
router.post("/ticket/accepted/:id", protect, acceptTicket);
router.post("/ticket/close/:id", protect, closeTicket);
router.route("/update-ticket/:id").put(modifyTicket);
router.route("/delete-ticket/:id").delete(deleteTicket);

router.route("/tickets/count/:id").get(getTicketsCount);

module.exports = router;
