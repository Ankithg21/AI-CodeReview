require("dotenv").config();
const app = require("./src/app");

const PORT = 7777;

app.listen(PORT, ()=>{
    console.log(`Server running on PORT ${PORT}.`);
});