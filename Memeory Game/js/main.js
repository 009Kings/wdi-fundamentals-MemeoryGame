console.log("Up and running!");

var cards = [
    {
        rank: "Queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "Queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "King",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "King",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
];
var cardsInPlay = [];

var checkForMatch = function() {
    if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
        console.log("You found a match!")
    } else {
        console.log("Sorry, try again.")
    }
}

var flipCard = function(cardId) {
    console.log("User flipped " + cards[cardId].rank);
    cardsInPlay.push(cards[cardId]);
    if (cardsInPlay.length === 2) {
        checkForMatch();
    }
}
flipCard(0);
flipCard(2);

if (cardsInPlay.length === 2 && cardsInPlay[0].rank === cardsInPlay[1].rank) {
    alert("You found a match!");
} else if (cardsInPlay.length === 2) {
    alert("No dice. Try again.");
}

console.log("flipped cards were of the suits " + cardsInPlay[0].suit + " and " + cardsInPlay[1].suit);
console.log(cardsInPlay[0].cardImage);
console.log(cardsInPlay[1].cardImage);