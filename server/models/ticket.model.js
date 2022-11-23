const mongoose = require('mongoose');


const ticketSchema = mongoose.Schema({
    raiser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
    },
    acceptor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin",
    },
    workerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Worker",
    },
    isAccepted: {
        type: Boolean,
        default: false
    },   
},{
    timestamps: true
});



module.exports = mongoose.model('Ticket', ticketSchema);
