
const {GoogleGenerativeAI} = require("@google/generative-ai");
const Train = require("./TrainingModel");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel(
    {
        model: "gemini-2.0-flash",
        systemInstruction: Train.train,
    }
);

async function GenerateContent(prompt){
    const result = await model.generateContent(prompt);
    return result.response.text();
}

module.exports = {
    GenerateContent,
};
