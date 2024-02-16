const User = require('../model/user');

async function createUser(data) {
    try {
        const newUser = await User.create(data);
        return newUser;
    } catch (error) {
        console.log("Error occurred in repo layer - createUser:", error.message);
        throw error;
    }
}

async function getUserByEmail(email) {
    try {
        const user = await User.findOne({ email });
        return user;
    } catch (error) {
        console.log("Error occurred in repo layer - getUserByEmail:", error.message);
        throw error;
    }
}

async function get(id) {
    try {
        const user = await User.findById(id);
        return user;
    } catch (error) {
        console.log("Error occurred in repo layer - get:", error.message);
        throw error;
    }
}

async function deleteUser(id) {
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        return deletedUser;
    } catch (error) {
        console.log("Error occurred in repo layer - deleteUser:", error.message);
        throw error;
    }
}

async function updateUser(id, data) {
    try {
        const updatedUser = await User.findByIdAndUpdate(id, data, { new: true });
        return updatedUser;
    } catch (error) {
        console.log("Error occurred in repo layer - updateUser:", error.message);
        throw error;
    }
}

module.exports = {
    createUser,
    getUserByEmail,
    get,
    deleteUser,
    updateUser
};
