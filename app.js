const express = require('express');
const path = require('path');
const htmlFile = path.join(__dirname, "public");
const app = express();

// if you want to use static files: example => localhost:3000/contact.html
app.use(express.static(htmlFile));


app.get('/', (req, res) => {
    // res.sendFile(htmlFile+'/index.html');
})

app.get('/json', (req, res) => {
    const studentInfo = [{
        name: 'Rahul Saini',
        age: '26'
    },
    {
        name: 'Rajkumar Saini',
        age: '23'
    },
    {
        name: 'Abhi Saini',
        age: '20'
    }]

    res.send(JSON.stringify(studentInfo));
})

app.get('*', (req, res) => {
    res.sendFile(htmlFile+'/404.html');
})

app.listen(process.env.port || 3000, (err)=>{
    if(err){
        console.log(err);
    }

    console.log('server running at port 3000');
})