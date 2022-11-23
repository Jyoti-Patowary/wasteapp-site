const mongoose = require('mongoose');
const validator = require('validator')
// const {Schema} = require('mongoose');


// const User = mongoose.model('User', {
const adminSchema = mongoose.Schema({
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
    }
    // photo: {
    //     type: String,
    // }     
}, {
    timestamps: true
});



module.exports = mongoose.model('Admin', adminSchema);
