const mongoose = require("mongoose");

const disputeSchema = mongoose.Schema({
  ticketId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Ticket",
  },
  disputeRaiser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
  },
  description: {
    type: String,
    required: true,
  },
});

disputeSchema.pre("find", function () {
  this.populate("raiser", "firstname lastname email address phoneNumber");
});

module.exports = mongoose.model("Dispute", disputeSchema);
