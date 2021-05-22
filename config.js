'use strict';
const dotenv = require('dotenv');

dotenv.config();

const {
    PORT,
    HOST,
    MONGO_URL

} = process.env;

module.exports = {
    port: PORT,
    host: HOST,
    mongo_url: MONGO_URL
}