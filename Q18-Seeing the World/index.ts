//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.

const locations=["saudi arabia","italy ","switzerland","america","dubai","turkey"];
console.log(locations);

//• Print your array in alphabetical order without modifying the actual list.

let alphabeticalOrder=[...locations].sort();
console.log(alphabeticalOrder);

//• Show that your array is still in its original order by printing it.

console.log(locations);

//• Print your array in reverse alphabetical order 
//without changing the order of the original list.

let invAlphabeticalOrder=alphabeticalOrder.reverse();
console.log(" array in reverse alphabetical order ");
console.log(invAlphabeticalOrder);

//• Show that your array is still in its original order by printing it again.

console.log(locations);

//• Reverse the order of your list. Print the array to show that its order has changed

let againReverse=invAlphabeticalOrder.reverse();
console.log(againReverse);



