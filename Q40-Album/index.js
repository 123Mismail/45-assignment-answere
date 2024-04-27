"use strict";
//Album: Write a function called make_album() that builds a Object describing a music album.
// The function should take in an artist name and an album title, and it should return a
// Object containing these two pieces of information. Use the function to make three
// dictionaries representing different albums. Print each return value to show that Objects
// are storing the album information correctly. Add an optional parameter to make_album() 
//that allows you to store the number of tracks on an album. If the calling line includes a 
//value for the number of tracks, add that value to the album’s Object. 
//Make at least one new function call that includes the number of tracks on an album.
function make_album(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
let playlist = make_album("Danny & Avvy sra", "ve haniya", 1);
console.log(playlist);
let playlist1 = make_album("Annu jain", "Husn", 2);
console.log(playlist1);
let playList2 = make_album("arjit singh", "va kamlaya", 3);
console.log(playList2);
/// practicing same concept again
function person_bio(name, age, gender) {
    const personDetail = {
        name: name,
        age: age,
    };
    if (gender !== undefined) {
        personDetail.gender = gender;
    }
    return personDetail;
}
let person1 = person_bio("ali khan", 34, "male");
console.log(person1);
let person2 = person_bio("khan", 23, "male");
console.log(person2);
let person3 = person_bio("komal", 22, "female");
console.log(person3);
// practicing again for another situation
function student_detail(name, rollNo, inClass, isPass, nationality) {
    const student_results = {
        name: name,
        rollNo: rollNo,
        inClass: inClass,
        isPass: isPass,
    };
    if (nationality !== undefined) {
        student_results.nationality = nationality;
    }
    return student_results;
}
let student1 = student_detail("m ali", 56, 7, true, "pakistani");
console.log(student1);
