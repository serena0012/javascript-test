#!/usr/bin/node

const prompt = require("prompt-sync")({sigint: true})
const age = prompt("Enter a number:\t");
((age >= 0 && age <= 5) || age >=65)? console.log("free"):
(age > 5 && age <= 10)?console.log("$10"):
(age >10 && age < 65)?console.log("$20"):
console.log("INVALID AGE")
