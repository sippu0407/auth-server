const dotenv =require('dotenv')
dotenv.config();

module.exports={
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
    SALT: process.env.SALT,
    JWT_SECRET:process.env.JWT_SECRET
}