
const express = require("express");
const {connectdb} = require("./connect.js");
const app = express();
const PORT = 8000;
const userRouter = require('./routes/user.js')
const {logReqRes} = require('./middleware/ware.js')
app.use(express.json()); 
connectdb();
app.use(express.urlencoded({extended:false}));
app.use(logReqRes("log.txt"));


app.use("/api/user",userRouter); 
app.listen(PORT, () => {
    console.log(`Server Started at PORT: ${PORT}`);
});

