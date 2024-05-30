const mongoose = require('mongoose');


// Define the mongoDb connection URL

const mongoURL = 'mongodb://localhost:27017/hotel';
// replace mydatabase with your database name


// set up mongodb connection
mongoose.connect(mongoURL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});


// Mongoose maintain a default connection object representation the MongoDb connection
// get the default connection
const db = mongoose.connection;


// define the event listener for database connection
db.on('connected', ()=>{
    console.log('connected to MongoDb server');
});

db.on('error', (err)=>{
    console.log('error connecting to MongoDb server', err);
})

db.on('disconnected', ()=>{
    console.log('disconnected from MongoDb server');
})

// export the database connection
module.exports = db;