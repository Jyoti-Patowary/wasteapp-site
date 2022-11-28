const mongoose = require("mongoose");
const validator = require("validator");
// const {Schema} = require('mongoose');

// const User = mongoose.model('User', {
const notificationSchema = mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      trim: true,
    },
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      trim: true,
    },
    workerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Worker",
      trim: true,
    },
    notificationType: {
      type: Boolean,
      default: false,
    },
    notificationPayload: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

notificationSchema.pre("find", function () {
  this.populate("customerId", "firstname lastname email address phoneNumber");
  this.populate("workerId", "firstname lastname email address phoneNumber");
});

module.exports = mongoose.model("Notification", notificationSchema);
