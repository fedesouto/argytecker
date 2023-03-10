require('dotenv').config()

const mongodb_uri = process.env.MONGODBURI;
const session_secret = process.env.SESSIONSECRET;


module.exports = {mongodb_uri, session_secret}