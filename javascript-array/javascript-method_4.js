#!/usr/bin/node

/* built-in methods of an array */


// .push(): to add item to the end of an array
const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('mop floor', 'dust window');
console.log(chores);

//.pop():remove element from the end of an array

const choress = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores.pop('mop floor');
console.log(choress);

// .shift(): add element to the start of an array

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift('orange juice');
console.log(groceryList);

// .unshift(): remive element from the start of an array
groceryList.unshift('popcorn');
console.log(groceryList);
