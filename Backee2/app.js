const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.urlencoded({extended:true}))

app.get('', (req,res) => {
    res.sendFile(__dirname + "/index.html");
})

app.post('/',(req,res) => {
    const n1 = Number(req.body.num1);
    const n2 = Number(req.body.num2);
    const add = n1 + n2;
    res.send(`The value is ${add}`)

})

app.listen(6000, (res) => {
    console.log("Server started at port 3000")
})