const express = require("express");
const app = express();
const aiRoutes = require("./routes/AI.routes");
const cors = require("cors");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    res.send("Hello from Server");
}); 

app.use("/ai", aiRoutes);

module.exports = app;