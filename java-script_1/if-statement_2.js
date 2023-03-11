#!/usr/bin/node
const prompt = require("prompt-sync")({string: true})
const password = prompt("Enter password:\t");
(password.length >= 6)?(password.indexOf(" ") === -1)?console.log("Valid Password"):
console.log("Password cannot contain spaces"):
console.log("Password too short!")
