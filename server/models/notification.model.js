const mongoose = require('mongoose');
const validator = require('validator')
// const {Schema} = require('mongoose');


// const User = mongoose.model('User', {
const notificationSchema = mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin",
        trim: true
    },
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        trim: true
    },
    workerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Worker",
        trim: true
    },
    notificationType: {
        type: Boolean,
        default: false
    }, 
    notificationPayload: {
        type: String
    }  
},{
    timestamps: true
});



module.exports = mongoose.model('Notification', notificationSchema);

// module.exports = User;