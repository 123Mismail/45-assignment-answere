"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner
//Add one new guest to the beginning of your array
//Add one new guest to the middle of your array. • Use append() to add one new guest 
// to the end of your list. • Print a new set of invitation messages,
//  one for each person in your list.
const guestList = ["kashiif ali", "kausar alil", "mehdi ali", "sharafat khan"];
guestList.unshift("shahnawaz ali"); // here we have added at start of arr
guestList.push("sikinder ali"); //here we have added at the last of arr
guestList.splice(3, 0, "shair ali"); //here we have added in the middle of arr 
for (let i = 0; i < guestList.length; i++) {
    console.log(` I inviting you on dinner today ${guestList[i]}`);
}
