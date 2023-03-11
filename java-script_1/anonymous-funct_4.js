#!/usr/bin/node

/* This code helps to figure out the day in the week in which
 we can water a plant assuming Saturday is chosen to be the day */


const plantNeedsWater = function(day) {
if (day === "saturday")
return true;
else
return false;
}
plantNeedsWater("monday");
console.log(plantNeedsWater("monday"));
