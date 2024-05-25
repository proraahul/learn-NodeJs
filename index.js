const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const public = path.join(__dirname, "public");
app.use(express.static(public));

app.get("/", (req, res) => {
    res.send('Display Image In Node Js')
});

app.get("/file", (req, res) => {
    var fdata;
    fdata = fs.readFileSync(__dirname + "/index.js");
    res.send(`<pre>${fdata}</pre>`);


})

app.listen(3000, (error)=>{
    if(error){
        console.log(error);
    }


    console.log('server running');
})