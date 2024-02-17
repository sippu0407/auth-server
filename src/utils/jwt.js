const jwt=require('jsonwebtoken');
const {JWT_SECRET}=require('../config/serverConfig');

function createToken(id, expiry) {
    try {
        const token = jwt.sign({ id }, JWT_SECRET, { expiresIn: expiry });
        return token;
    } catch (error) {
        console.error("Error occurred in jwt-layer (createToken):", error.message);
        throw new Error("Unable to create token");
    }
}

function verifyToken(token) {
    try {
        if (!token) {
            throw new Error("Token is undefined or null");
        }

        const decoded = jwt.verify(String(token), JWT_SECRET);
        return decoded.id;
    } catch (error) {
        console.error("Error occurred in jwt-layer (verifyToken):", error.message);
        throw new Error("Token verification failed");
    }
}


module.exports={
    createToken,
    verifyToken
}