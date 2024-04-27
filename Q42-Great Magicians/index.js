"use strict";
//Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of
// magicians by adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.
const magicians = ["Criss Angel", "David Copperfield", "David Blaine"];
function great_magicians(magician) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(` "${magicians[i]}" is great magician .`);
    }
}
;
great_magicians(magicians);
