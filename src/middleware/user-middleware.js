function validateUserData(req, res, next) {
    const userData = req.body;

    if (!userData.name || !userData.email || !userData.password) {
        return res.status(400).json({
            message: "Name, email, and password are required fields",
            success: false
        });
    }
    next();
}

function authenticateUserUpdate(req, res, next) {
    const userData = req.body;
    if (!userData.newName)  {
        return res.status(400).json({
            message: "Name, email, and password are required fields",
            success: false
        });
    }

     else if(!userData.newEmail) {
        return res.status(400).json({
            message: "Name, email, and password are required fields",
            success: false
        });   
    }
    next();
}

function authenticateUserUpdatePassword(req, res, next) {
    const userData = req.body;
    if (!userData.newPassword || !req.params.id)  {
        return res.status(400).json({
            message: "Name, email, and password are required fields",
            success: false
        });
    }

    next();
}


module.exports = {
    validateUserData,
    authenticateUserUpdate,
    authenticateUserUpdatePassword
};
