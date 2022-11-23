const mongoose = require('mongoose');
const validator = require('validator')

const workerSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    contact: {
        type: Number,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate(value){
            if(!validator.isEmail(value)) {
                throw new Error('Emaail is invalid')
            }
        }    
    },
    password: {
        type: String,
        required: true
    },
    workingExperience: {
        type: String,    
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    photo: {
        type: String,
    },
    orderHistory:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ticket",
    }]    
}, {
    timestamps: true
});



module.exports = mongoose.model('Worker', workerSchema);
