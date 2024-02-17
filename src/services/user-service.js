const { createUser, getUserByEmail, get, updateUser, deleteUser } = require('../repository/user-reository');
const bcryptjs=require('bcryptjs');
const {createToken}=require('../utils/jwt')

async function createUserService(data) {
    try {
        const newUser = await createUser(data);
        return newUser;
    } catch (error) {
        console.log("Error occurred in service layer - createUserService:", error.message);
        throw error;
    }
}

async function deleteUserService(id) {
    try {
        const deletedUser = await deleteUser(id);
        return deletedUser;
    } catch (error) {
        console.log("Error occurred in service layer - deleteUserService:", error.message);
        throw error;
    }
}

async function updateUserService(id, data) {
    try {
        const updatedUser = await updateUser(id, data);
        return updatedUser;
    } catch (error) {
        console.log("Error occurred in service layer - updateUserService:", error.message);
        throw error;
    }
}

async function loginService({email,plainPassword}){

    try {

        const user= await getUserByEmail(email);
        if(!user){
            throw new Error("no such user exists");
        }
        const isCorrectPwd=bcryptjs.compareSync(plainPassword,user.password);
        if(!isCorrectPwd){
            throw new Error("invalid credentials");
        }
        const token=createToken(user.id,"3h");
        return token;
         
    } catch (error) {
        console.error("Error occurred in jwt-layer (verifyToken):", error.message);
        throw error;
    }
}

module.exports = {
    createUserService,
    deleteUserService,
    updateUserService,
    loginService
};
