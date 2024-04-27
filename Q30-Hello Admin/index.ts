//Hello Admin: Make a array of five or more usernames, including the name
 //'admin'. Imagine you are writing code that will print a greeting 
 //to each user after they log in to a website.
 //Loop through the array, and print a greeting to each user

 let users = ["userId1","userId2","admin","userId4","userId5"];
 
 for(let i=0 ; i<users.length; i++){

    if(users[i]=="admin"){

        console.log(`hello admin would you like to see todays status ?`)

    }else{

        console.log(`hello ${users[i]} than you for logging again`)
    }

 };
