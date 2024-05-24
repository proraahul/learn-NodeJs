const express = require('express');
const student = require('./route/student');

const app = express();

app.use('/student', student);

app.get('/', (req, res)=>{
    res.send('<h1>Home Route</h1>');
});

app.get('/contactus', (req, res)=>{
    res.send('<h2>contact page</h2>');
});

app.get('/service', (req, res)=>{
    res.send('<h1>Express Js Web Server on Service page');
});

app.listen(process.env.port || 3000, (error)=>{
    if(error){
        console.log(error);
    }

    console.log('server is running');
});
