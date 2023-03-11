#!/usr/bin/node
// Const prompt activates the prompt, userinput
const prompt = require("prompt-sync")({string: true});
// toLowerCase converts users input to lowercase

const dayOfTheWeek = prompt("Enter a day:\t").toLowerCase();
(dayOfTheWeek === "monday")?console.log("Oh! It's work days."):
(dayOfTheWeek === "Tuesday")?console.log("It's a meeting day"):
(dayOfTheWeek === "wednesday")?console.log("It's mid week"):
(dayOfTheWeek === "thursday")?console.log("It's market day"):
(dayOfTheWeek === "friday")?console.log("It's clubbing day"):
(dayOfTheWeek === "saturday")?console.log("It's resting day"):
console.log("It's preaching day")
