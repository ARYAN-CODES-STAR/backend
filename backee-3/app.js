const express = require("express");
const app = express();
const port = 4000;

const dailyTips = [
    "Don't forget to take a shower",
    "Take short breaks to stretch and move around during work.",
    "Get a good night\'s sleep for better health.",
    "Read a book or article to expand your knowledge.",
];

app.get('/daily-tip', (req, res) => {
    const randomNumber = Math.floor(Math.random() * dailyTips.length);
    const randomTip = dailyTips[randomNumber];
    res.json({ tip: randomTip });
});
app.post('/',)
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});