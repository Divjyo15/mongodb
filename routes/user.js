
/*router.post("/api/users", async (req, res) => {
    const body = req.body;
router.get("/users",async(req,res) =>{
    const allusers = await User.find({});
    const html = `
    <ul>
    ${allusers.map(user => `<li>${user.name}</li>` - <li>${user.email}</li>) .join('')}
</ul>
`
res.send(html);

})*/


const express = require("express");
const router = express.Router();
const { handleGetAllUser, handleGetAllUsers } = require('../controller/yo');

// Route for handling GET requests
router.route("/").get(handleGetAllUser);

// Route for handling POST requests
router.post("/", handleGetAllUsers);

module.exports = router;
