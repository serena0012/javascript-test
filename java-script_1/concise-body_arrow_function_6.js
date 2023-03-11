#!/usr/bin/node
/* This code uses ternary operator and arrow function 
to check the predetermined day a plant should be 
watered */

const plantNeedsWater = day => day === "wednesday"?true:false;
let callFunction = plantNeedsWater('Wednesday'.toLowerCase());
console.log(callFunction);
