//Checking Usernames: Do the following to
// create a program that simulates how websites ensure that everyone has a unique username

//• Make a list of five or more usernames called current_users.

let current_users = ["user1","user2","user3","user4","user5"];

//• Make another list of five usernames called new_users.

let new_users = ["user1","userA","userB","user4","userD"];

for(let i=0; i< new_users.length; i++){

    if(new_users[i].includes(current_users[i])){
        console.log(` user name ${new_users[i]} is already exist `)
    }else{
        console.log(`${new_users[i]} user name is available`)
    }
}





