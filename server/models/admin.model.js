const mongoose = require("mongoose");

// const User = mongoose.model('User', {
const adminSchema = mongoose.Schema(
  {
    role: {
      type: String,
      enum: ["admin", "customer", "worker"],
    },
    firstname: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    lastname: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    email: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    password: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      phoneNumber: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      photo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Admin", adminSchema);
