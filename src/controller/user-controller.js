const userService = require('../services/user-service');

async function createUser(req, res) {
    try {
        const {name,email,password} = req.body; // Assuming user data is sent in the request body
        const newUser = await userService.createUserService({name,email,password});
        res.status(201).json({
            message: "User created successfully",
            user: newUser
        });
    } catch (error) {
        console.error("Error occurred in user controller - createUser:", error.message);
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
}

async function getUser(req, res) {
    try {
        const userData = req.params.idOrEmail; // Assuming you have a route parameter named idOrEmail
        const user = await userService.getUserService(userData);
        
        if (user) {
            res.status(200).json({
                message: "User retrieved successfully",
                user: user
            });
        } else {
            res.status(404).json({
                message: "User not found"
            });
        }
    } catch (error) {
        console.error("Error occurred in user controller - getUser:", error.message);
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
}

async function updateUser(req, res) {
    try {
        const userId = req.params.id;
        const userData = {};
        if(req.body.newEmail) userData.email=newEmail;
        if(req.body.newName)  userData.name=newName;
        const updatedUser = await userService.updateUserService(userId, userData);

        if (updatedUser) {
            res.status(200).json({
                message: "User updated successfully",
                user: updatedUser
            });
        } else {
            res.status(404).json({
                message: "User not found"
            });
        }
    } catch (error) {
        console.error("Error occurred in user controller - updateUser:", error.message);
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
}

async function updateUserPassword(req, res) {
    try {
        const userId = req.params.id;
        const {newPassword} = req.body;
        const updatedUser = await userService.updateUserService(userId, {password:newPassword});

        if (updatedUser) {
            res.status(200).json({
                message: "User updated successfully",
                user: updatedUser
            });
        } else {
            res.status(404).json({
                message: "User not found"
            });
        }
    } catch (error) {
        console.error("Error occurred in user controller - updateUser:", error.message);
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
}

async function deleteUser(req, res) {
    try {
        const userId = req.params.id;
        const deletedUser = await userService.deleteUserService(userId);

        if (deletedUser) {
            res.status(200).json({
                message: "User deleted successfully",
                user: deletedUser
            });
        } else {
            res.status(404).json({
                message: "User not found"
            });
        }
    } catch (error) {
        console.error("Error occurred in user controller - deleteUser:", error.message);
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
}

async function loginUser(req, res) {
    try {
        const {email,password} = req.body;
        const token = await userService.loginService({email,plainPassword:password});

        if (!token) {
            res.status(200).json({
                message: "unable to login",
            });
        } else {
            const expiryTime=new Date(Date.now() + 36000);
            res.header('Access-Control-Allow-Credentials', true);
            res.cookie('token',token,{httpOnly:true , expires:expiryTime}).status(200).json({
            message: "Login successful",
            });
        }
    } catch (error) {
        console.error("Error occurred in user controller - login user:", error.message);
        res.status(500).json({
            message: error.message,
            error: error
        });
    }
}
module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser,
    updateUserPassword,
    loginUser
};
