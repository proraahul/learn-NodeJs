const express = require('express');


const app = express();

app.get('/', (req, res)=>{
    res.send('<h1>Welcome to Express Js Web Server in Node Js');
});

app.get('/about', (req, res)=>{
    res.send('<h1>Express Js Web Server on about page');
});

app.get('/service', (req, res)=>{
    res.send('<h1>Express Js Web Server on Service page');
});

app.listen(process.env.port || 3000, (error)=>{
    if(error){
        console.log(error);
    }

    console.log('express js server is running');
});