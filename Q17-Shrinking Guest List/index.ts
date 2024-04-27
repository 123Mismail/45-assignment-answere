// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
//  and you have space for only two guests.
// Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite
//  only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a 
// name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
// Remove the last two names from your list, so you have an empty list. Print your list to make sure you
//   actually have an empty list at the end of your program.


const guestList=["shahnawaz ali","kashif ali","kausar ali","shair ali","mehdi ali","sharafat khan","sikinder ali"];//
console.log(`Due to short of space i can only invite two people .`)
for(var i=0; i<5; i++){
   guestList.pop();      //removing last element from array
  

}

for(i=0;i<2;i++){          //printing individual elements from array by using for loop
   console.log( `I invite you on dinner today so please accept my invitation  ${guestList[i]} `)  
};
for(var i=0; i<=guestList.length; i++){       
   guestList.pop()         //removing remainig elements from array

}
console.log(guestList)     //here is printing empty array
