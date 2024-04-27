// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
//  with a copy of the array of magicians’ names. Because the original array will be unchanged,
//   return the new array and store it in a separate array.
// Call show_magicians() with each array  to show that you have
//  one array of the original names and one array with the Great added to each magician’s name.

const magicians :string[] =["Criss Angel","David Copperfield","David Blaine"];

function copy_arr(arr:string[]){
    return [...arr]
};

let copyMegicians =[...magicians]
 function great_magicians(megician:string[]){ 
     for(let i=0 ; i<magicians.length; i++){
    console.log(`" ${magicians[i]}" is great magician`)
    }
  
};

function show_megicians(magician:string[]){
    for(let i=0; i< magicians.length ; i++){
        console.log(magicians[i])
    }
};

 let new_arr=copy_arr(magicians);

 console.log(new_arr)
 great_magicians(new_arr);

 show_megicians(magicians);

