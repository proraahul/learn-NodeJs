const { Module } = require("module");

console.log('notes are loaded');
const addNumber = function(a,b){return a+b}

var age = 25;
module.exports = {
    age,
    addNumber
}