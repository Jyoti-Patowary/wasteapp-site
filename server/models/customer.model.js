// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

// const customerSchema = mongoose.Schema(
//   {
//     role: {
//       type: String,
//       enum: ["admin", "customer", "worker"],
//     },
//     firstname: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//     },
//     lastname: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//     },
//     email: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//     },
//     password: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//     },
//       address: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User",
//       },
//       phoneNumber: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User",
//       },
//       photo: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User",
//       },
//       orderHistory: [
//         {
//           type: mongoose.Schema.Types.ObjectId,
//           ref: "Ticket",
//         },
//       ],
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// customerSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// // will encrypt password everytime its saved
// customerSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     next();
//   }
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });

// const Customer = mongoose.model("Customer", customerSchema);

// module.exports = Customer;
