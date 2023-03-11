#!/usr/bin/node

/* The codes show local scope and variable */

function logVisibleLightWaves() {
  const lightWaves = 'Moonlight';
  console.log(lightWaves); // since the local variable is within the code block
// it is appropriate to log it here 
}
logVisibleLightWaves();
console.log(lightWaves); // give reference error since the variable is within the codeblock
// so can't be logged outside the codeblock.
