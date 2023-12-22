const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    avatar: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
    },
    city: {
        type: String,
    },
    country: {
        type: String,
    },
    bio: {
        type: String,
    },
    portfolio: {
        type: String,
    },
    instagram: {
        type: String,
    },
    github: {
        type: String,
    },
    linkedin: {
        type: String,
    },
    twitter: {
        type: String,
    },
    appliedJobs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Interview'
    }],
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;