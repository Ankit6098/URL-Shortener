const mongoose = require('mongoose');
require("dotenv").config();

// connect to the database
mongoose.connect(process.env.MONGODBURL);

// acquire the connection (to check if it is successful)
const db = mongoose.connection;

// error handling
db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));

// up and running then print the message
db.once('open', () => {
    console.log('Connected to the database :: MongoDB');
});