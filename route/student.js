const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    // res.send('This is get request from student');
        res.send(`Welcome to ${req.query.name} and Address= ${req.query.address}`)
});

router.post('/', (req, res)=>{
    res.send('This is post request from student');
});

router.put('/', (req, res)=>{
    res.send('This is put request from student');
});

router.delete('/', (req, res)=>{
    res.send('This is delete request from student');
});

module.exports = router;
