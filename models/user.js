const mongoose = require('mongoose')

const { Schema } = mongoose;
const userSchema = new Schema({
    user: String,
    email: String,
    password: String,
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = User;
