console.log("Up and running!");

var cards = ['queen','queen','king','king']

var cardsInPlay = [" "];

var cardOne = cards[0];

cardsInPlay.push("cardOne");

console.log("User flipped queen");

var cardTwo = cards[2];

cardsInPlay.push("cardTwo");

console.log("User flipped king");

if ( cardsInPlay.length === 2 && cardsInPlay[1] === cardInPlay[2]) {
	alert("You found a match!");
}
else {
	alert("Sorry, try again.");
}