"use strict";
//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
let friends = ["kashif ali", "kausar ali", "sharafat khan", "najeebullah"];
//• If the list is empty, print the message We need to find some users.
if (friends.length == 0) {
    console.log(` we need to make some friends`);
}
else {
    friends = [];
    console.log(` all friends have lefted me ${friends.length}`);
}
;
