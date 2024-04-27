//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call
// provides, and it should print a summary of the sandwich that is being ordered. 
//Call the function three times, using a different number of arguments each time

// const sandwitch_ingredients:string[]=[];

function make_sandwitch(arr:string[]){

    for (let i=0; i<arr.length; i++){
        console.log(arr[i])
    };


}

make_sandwitch(["meat","vegetables","chees","floour"]);

// 2nd calling

make_sandwitch(["black paper","capcicum"]);

//3rd calling

make_sandwitch(["potato","white paper","oil"])


