#!/usr/bin/node

/* Re-assignment of element to an array */

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);
condiments = ['Mayo'];
console.log(condiments);
utensils[3] = 'Spoon';
console.log(utensils);


// Find the length of the objectives array and log it to the console.

const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];

console.log(objectives.length);
