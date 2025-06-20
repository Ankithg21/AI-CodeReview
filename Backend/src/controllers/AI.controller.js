const aiService = require("../services/AI.service");

const Model = async(req,res)=>{
    const {prompt} = req.body;
    if(!prompt){
        return res.status(400).send("Prompt is required.");
    }
    const response = await aiService.GenerateContent(prompt);
    res.send(response);
};

module.exports = {
    Model,
};