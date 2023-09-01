require('dotenv').config();

const config = {
    port: process.env.PORT || 6000,
    mongoURI: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/book-maker',
};

module.exports = config;