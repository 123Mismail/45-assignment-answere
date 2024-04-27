"use strict";
// Your Own Array: Think of your favorite mode of transportation,
//  such as a motorcycle or a car, and make a list that stores several examples.
//   Use your list to print a series of statements about these items, such as
//  “I would like to own a Honda motorcycle.”
const favTransport = ["motor bike ", "car", "train", "bus"]; //we have used for loop for performing
//same task 
for (let i = 0; i < favTransport.length; i++) {
    console.log(` i would love to have a ${favTransport[i]}`);
}
