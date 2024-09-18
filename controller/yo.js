const User = require('../models/user');

// Function to handle GET request for all users
async function handleGetAllUser(req, res) {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ msg: 'Error fetching users', error });
    }
}

// Function to handle POST request for creating users (or similar logic)
async function handleGetAllUsers(req, res) {
    try {
        const allusers = await User.find({});
        res.json(allusers);
    } catch (error) {
        res.status(500).json({ msg: 'Error fetching users', error });
    }
}

module.exports = {
    handleGetAllUser, // Export the function for the GET route
    handleGetAllUsers, // Export the function for the POST route
};
