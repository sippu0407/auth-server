const { createUser, getUserByEmail, get, updateUser, deleteUser } = require('../repository/user-reository');

async function createUserService(data) {
    try {
        const newUser = await createUser(data);
        return newUser;
    } catch (error) {
        console.log("Error occurred in service layer - createUserService:", error.message);
        throw error;
    }
}

async function getUserService(data) {
    try {
        if (data.includes('@')) {
            // If data includes '@', assume it's an email
            const user = await getUserByEmail(data);
            return user;
        } else {
            // Otherwise, assume it's an ID
            const user = await get(data);
            return user;
        }
    } catch (error) {
        console.log("Error occurred in service layer - getUserService:", error.message);
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

module.exports = {
    createUserService,
    getUserService,
    deleteUserService,
    updateUserService
};
