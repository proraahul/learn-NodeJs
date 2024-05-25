const express = require('express');
const path = require('path');
const app = express();

const public = path.join(__dirname, "public");
app.use(express.static(public));

app.get("/", (req, res) => {
    res.send('Display Image In Node Js')
})

app.listen(3000, (error)=>{
    if(error){
        console.log(error);
    }


    console.log('server running');
})