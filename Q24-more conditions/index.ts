//More Conditional Tests: You don’t have to limit the number of tests
// you create to 10. If you want to try more comparisons, write more tests. 
//Have at least one True and one False result for each of the following:

//• Tests for equality and inequality with strings

let condition="good";
console.log(` IS condition==="good" ? I predicted correct`);
console.log(condition==="good");


console.log(` IS condition==="good" ? I predicted correct`);
console.log(condition!="good");

//• Tests using the lower case function

console.log(` is condition.toLowerCase()=="good"? I predicted correct `);
console.log(condition.toLocaleLowerCase()=="good");

console.log(` is condition.toLowerCase()!="good"? I predicted wrong `);
console.log(condition.toLocaleLowerCase()!="good");

//Numerical tests involving equality and inequality,
//  greater than and less than, greater than or equal to, 
//  and less than or equal to

let statement= 7>8;
console.log(statement==false);
console.log(statement==true);
console.log(8>=9);
console.log(8<=9);
console.log(8>9);
console.log(8<9);

//• Tests using "and" and "or" operators
console.log(" using or and operators")

let i=2;
let j=9;
console.log(i==2 && j==5);

console.log(i==2 || j==5);

//• Test whether an item is in a array 
let array=["fruits","meal","tea"];
let checkElement=array.includes("excercise");
console.log(` ${checkElement} its not include in array`);

//• Test whether an item is not in a array
let checkElementIncl=array.includes("fruits");
console.log(` ${checkElementIncl} its include in array `);





