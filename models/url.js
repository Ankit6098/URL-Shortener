const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
    shortUrl: {
        type: String,
    },
    shortid: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
}, {
    timestamps: true,
});

const Url = mongoose.model('Url', urlSchema);

module.exports = Url;