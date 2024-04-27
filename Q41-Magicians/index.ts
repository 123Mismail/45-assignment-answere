//Magicians: Make a array of magician’s names.
// Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array


const magicians:string[]=["David Copperfield","David Blaine","Penn & Teller","Helder Guimaraes"]

function show_magicians(magician:string[]){

    for(let i=0; i<magicians.length ; i++){
        console.log(magicians[i]);
    }

};
show_magicians(magicians);


// practicing more questions

let arr:string[]=["potato ","lichi ","almond","peanut"];
function items(array:string[]){
    for ( let i=0; i<arr.length ; i++){
        console.log(arr[i])
    }
};
items(arr)
