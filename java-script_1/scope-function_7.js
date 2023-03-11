#!/usr/bin/node

/* accessing both global and local variable */


const city = 'New York City'; // global variable: outside of block of code
function logCitySkyline() {
  let skyscraper = 'Empire State Building'; // local variable: inside codeblock
  return 'The stars over the ' + skyscraper +  ' in ' + city;
}
console.log(logCitySkyline());


// First global variable
const satellite = 'The Moon';
// Second global variable
const galaxy = 'The Milky Way';
// Third global variable
const stars = 'North Star';

// creating a function called callMyNightSky
function callMyNightSky() {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
};
console.log(callMyNightSky());
