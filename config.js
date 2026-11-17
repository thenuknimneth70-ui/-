const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/thenuknimneth70-ui/-/blob/5b79cd8c8e3abe12705af880a2838ab2a39fcb5f/Images/file_00000000ee808208a685c2d3d0778841.png",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 THENUK-MD BOT Is Alive Now😍*",
BOT_OWNER: '94776121326',  // Replace with the owner's phone number



};
