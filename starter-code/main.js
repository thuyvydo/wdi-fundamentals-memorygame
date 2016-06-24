
// variables
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

// on page load create board
document.addEventListener("DOMContentLoaded", function(event) { 
	createBoard(cards);
});

// check if two cards are in play
function isTwoCards() {
	if (this.getAttribute('data-card') === 'king')
		this.innerHTML = '<img src="king.png" alt="King of Spades">';
	else
		this.innerHTML = '<img src="queen.png" alt="Queen of Spades">';

	cardsInPlay.push(this.getAttribute('data-card'));

	if (cardsInPlay.length === 2) {
		if (isMatch(cardsInPlay)) alert("You found a match!");
		else alert("Sorry try again");
		cardsInPlay = [];

		var flip = document.getElementsByClassName('card');
		for (var i = 0; i < flip.length; i++)
			flip[i].innerHTML = "";
	}

}

// check if the two cards are a match or nah
function isMatch(cards) {
	return cards[0] === cards[1] ? true : false;
}

// initialize board
function createBoard(cards) {
	var board = document.getElementById('game-board');

	for (var i = 0; i < cards.length; i++) {
		var card = document.createElement('div');
		card.className = 'card';
		card.setAttribute('data-card', cards[i]);
		card.addEventListener('click', isTwoCards)
		board.appendChild(card);
	}
}