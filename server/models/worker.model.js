// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

// const workerSchema = mongoose.Schema(
//   {
//     workerID: {
//       type: String || Number,
//       required: true,
//     },
//     firstname: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     lastname: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     phoneNumber: {
//       type: Number,
//       required: true,
//       trim: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     workingExperience: {
//       type: String,
//     },
//     address: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     photo: {
//       type: String,
//     },
//     orderHistory: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Ticket",
//       },
//     ],
//   },
//   {
//     timestamps: true,
//   }
// );

// workerSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// // will encrypt password everytime its saved
// workerSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     next();
//   }
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });

// const Worker = mongoose.model("Worker", workerSchema);

// module.exports = Worker;
