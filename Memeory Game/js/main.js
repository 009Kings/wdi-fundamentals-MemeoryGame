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

var flipCard = function() {
    var cardId = this.getAttribute("data-id");
    console.log("User flipped " + cards[cardId].rank);
    cardsInPlay.push(cards[cardId]);
    if (cardsInPlay.length === 2) {
        checkForMatch();
    }
}

if (cardsInPlay.length === 2 && cardsInPlay[0].rank === cardsInPlay[1].rank) {
    alert("You found a match!");
} else if (cardsInPlay.length === 2) {
    alert("No dice. Try again.");
}
//added After theDOM

var createBoard = function() {
    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement("img");
        cardElement.setAttribute("src", "images/back.png");
        cardElement.setAttribute("data-id", i);
        cardElement.addEventListener("click", flipCard);
        document.getElementById("game-board").appendChild(cardElement);
    }
};
createBoard();


/*console.log("flipped cards were of the suits " + cardsInPlay[0].suit + " and " + cardsInPlay[1].suit);
console.log(cardsInPlay[0].cardImage);
console.log(cardsInPlay[1].cardImage);*/