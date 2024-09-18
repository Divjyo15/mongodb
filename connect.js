const mongoose = require("mongoose");
function connectdb(){
mongoose
    .connect("mongodb+srv://mongodb:i0f5r64Htvu3flko@cluster0.zlbzf.mongodb.net/mongodb")
    .then(() => console.log("Db Connected"))
    .catch((err) => console.log("Moongo error", err));
}
    module.exports = {connectdb};
