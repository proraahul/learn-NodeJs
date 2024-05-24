// console.log('my first node js file');

// const sum = (a, b) => {
//     return a+b
// }

// console.log(sum(10,20));

const app = require('http');

const homepage = (req, res)=>{
    res.write('<h1>welcome to HTTP server nodejs</h1>');
    res.end();
}

console.log('running on localhost:3000');

app.createServer(homepage).listen(3000)