//Ordinal Numbers: Ordinal numbers indicate their position in a array, 
//such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

let nums = [1,2,3,4,5,6,7,8,9];

//• Loop through the array.

for( let i=0; i<nums.length; i++){
    //• Use an if-else chain inside the loop to print
    // the proper ordinal ending for each number. 
    if(nums[i]==1 ){
 console.log(` ${nums[i]}st `)

    }else if(nums[i]==2){
console.log(` ${nums[i]}nd `)
    }
    else{

        console.log(`${nums[i]}th `)
    }
    //Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th",
    // and each result should be on a separate line.

}

