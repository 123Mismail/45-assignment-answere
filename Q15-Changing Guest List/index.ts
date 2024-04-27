// Changing Guest List: You just heard that one of your guests can’t make the dinner,
//  so you need to send out a new set of invitations. 
// You’ll have to think of someone else to invite.


const guestList=["kashif ali","kausar ali","najeebullah muhammad","sharafat khan"];
guestList.splice(2,1,"mehdi ali");  // her we have replace mehdi ali at place of najeebullah at index 2
for(let i=0; i<guestList.length; i++){
    console.log(` I would love to have you on dinner so please accept my invitation ${guestList[i]}`)
}
