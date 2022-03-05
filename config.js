const dotenv = require('dotenv').config();
module.exports = {
    //NODE_ENV: process.env.NODE_ENV || 'development',
    MONGODB_URI: process.env.MONGODB_URI,
    PORT: process.env.PORT || 3001
}