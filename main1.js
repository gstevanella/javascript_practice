
/*
var playerName, playerChoice;
var playerName = prompt ("what's your name?");
alert ("Welcome, " + playerName  + "!");
alert(playerName + ", you are the last person on earth, sitting alone in a room. There is a knock on the door, what will you do?");
playerChoice = prompt("Enter 1 to approach the door, or 2 to hide");
if (playerChoice == "1") {
    alert("you are scared as you approach the door and you stop for a moment");
    
    playerChoice = prompt("play 3 to continue or 0 to quit");
    
    if (playerChoice == "3") { 
        alert("let's carry on");
    } 
    else if (playerChoice == "0") {
        alert("gameover - you're now safe");
    } 
    else {alert ("invalid code");
    }

}else if (playerChoice == "2") 
    {
    alert("as you hide you hear the doorknob rattling");
    playerChoice = prompt("try to find a weapon - select 7 for a big pan or 8 for a glass bottole");
    if (playerChoice == "7") {
        alert("big pan chosen");
    }
    else if (playerChoice =="8") {
        alert("glass bottole chosen");
    }
    else {
        alert("invalid selection")
    }
} 
else {alert ("invalid code");
};

var playerNick, playerChoice2;
var playerNick = alert("let's play again");
var playerChoice2 = prompt("select a random number");
if (playerChoice2 % 2==0 ){
    alert("the number is even");
}
else if (playerChoice2 % 2 != 0){
    alert("the number is odd");
}
else {
    alert("this is not a number selection");
};


var switchExercise = prompt("let's learn about the command switch for more info, select 1, 2 or 3")
switch (switchExercise) {
    case "1":
        alert("switch is a great command that can be used instead of if/else");
        break;
    case "2":
        alert("switch always needs a default option");
        break;
    case "3":
        alert("switch always needs a break");
        break;
    default:
        alert("invalid entry, select between 1, 2 or 3")
        prompt("choose again") 
        switch (switchExercise) {
            case "1":
                alert("switch is a great command that can be used instead of if/else");
                break;
            case "2":
                alert("switch always needs a default option");
                break;
            case "3":
                alert("switch always needs a break");
                break;
            default:
                alert("invalid entry, select between 1, 2 or 3")
                prompt("choose again")
        };
}


var choice = prompt("You are in a dark room. There is a door to your left and right, which do you take?")
switch (choice) {
    case "left":
        choice = prompt("You are in a room with a bear. What do you do?")
        switch (choice) {
            case "run":
                alert("You run away from the bear and escape!")
                break
            case "fight":
                alert("You fight the bear and die.")
                break
            default:
                alert("You do nothing and the bear eats you.")
        }
        break
    case "right":
        choice = prompt("You are in a room with a lion. What do you do?")
        switch (choice) {
            case "run":
                alert("You run away from the lion and escape!")
                break
            case "fight":
                alert("You fight the lion and die.")
                break
            default:
                alert("You do nothing and the lion eats you.")
        }
        break
    default:
        alert("You do nothing and die.")
}

*/

/*
var myArray = [2,1,3,43];
myArray.sort()
alert(myArray);

var myArray = [1,2,"dog",true, [1,2,3]];
alert(myArray[myArray.length -1]);
alert(myArray[0]);

myArray.pop()
alert(myArray);

newArray = [0,'a','b','c','d','e','f','dog','cat']
newArray.splice(7,2);
alert(newArray);
*/

/*
var myArray = [1,2, 'dog',true, [1,2,3]];
for (var i = 0; i< myArray.length; i++){
    alert(myArray[i])
};


var myArray = [1,2, 'dog',true, [1,2,3]];
var num = 5;
for (var i = 1; i <= num; i++ ){
    console.log(i);
}
*/

var bookTitles = [
    'Too Loud a Solitude',
    'Things Fall Apart',
    'The Master and Margarita',
    'The Three Body Problem',
    'The Woman Destroyed',
    'Beloved',
    'The Tenant of Wildfell Hall',
    "Lady Chatterley's Lover",
];

bookTitles.sort();
var requestedTitle = "";
var libRequests = [];
alert ("Welcome to the library!\n\nPlease search for a book title when prompted.\n\nType `request` at the prompt to make a request for a book.\n\nYou can also type `display` at the prompt to display all available book titles.\n\nType `quit` at the prompt to quit the program.");

var response = "";
while (response != 'quit'){
    response = prompt("Search for a book title or make a request by typing request:");
    if (response == 'request') {
        requestedTitle = prompt("What book would you like to request?");
        libRequests.push(requestedTitle);
        alert("You have requested the following title:" + libRequests + ".");
        }
    else if (response == 'display') {
        for (var i = 0; i<bookTitles.length; i++) {
            alert(bookTitles[i]);
        }
    }
    else {
        var bookIndex = bookTitles.indexOf(response);
        if(response != 'quit'){
            if(bookIndex == -1) {
                alert("sorrym we dont have that book, you can request it though");
            }
            else{
                alert ("yes" + response + "is available to check out")
            }
        }
    }
}
