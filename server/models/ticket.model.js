const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema(
  {
    raiser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    createdDate: {
      type: Number,
      default: Date.now(),
    },
    requestedDate: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: "isOpen",
      enum: ["isAssigned", "isOpen", "inProgress", "isClosed"],
    },
  },
  {
    timestamps: true,
  }
);

ticketSchema.pre("find", function () {
  this.populate("raiser", "firstname lastname email address phoneNumber");
  this.populate("receiver", "firstname lastname email address phoneNumber");
});

module.exports = mongoose.model("Ticket", ticketSchema);
