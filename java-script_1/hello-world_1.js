#!/usr/bin/node
// Generate random number

const randomNumber = Math.random();
(randomNumber < 0.5)?console.log("YOUR NUMBER IS LESS THAN 0.5!"):
(randomNumber >= 0.5 && randomNumber <=0.8 )?console.log("YOUR ARE IN BETWEEN LIFE AND DEATH"):console.log("YOUR NUMBER IS 0.9")

console.log(randomNumber);
