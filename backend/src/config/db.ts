const mongoose = require('mongoose');
const Config = require('./config');

mongoose.connect(Config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Database is coneccted');
})
.catch(() => {
    console.error('Failed to connect to database');
});