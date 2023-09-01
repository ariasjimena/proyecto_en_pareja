import express from 'express';
const config = require('./config/config');
require('./config/db');

const app = express();

const PORT = config.port;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});