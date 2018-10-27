var L02;
(function (L02) {
    document.addEventListener("DOMContentLoaded", main);
    let deck = [];
    let handCards = [];
    let color;
    let value;
    let card;
    function main() {
        let startCards;
        startCards = parseInt(prompt("Mit wie vielen Karten möchtest du starten?", "5"));
        createCards();
        drawCards(startCards);
        startCard();
    } //main zu
    function createCards() {
        for (let i = 0; i < 5; i++) {
            switch (i) {
                case 0:
                    color = "red"; //red
                    break;
                case 1:
                    color = "green"; //green
                    break;
                case 2:
                    color = "blue"; //blue
                    break;
                case 3:
                    color = "yellow"; //yellow
                    break;
                case 4:
                    color = "black"; //black
                    break;
            }
            //black cards:
            if (color == "black") {
                for (let k = 0; k < 4; k++) {
                    value = "+4";
                    deck.push([color, value]);
                    value = "choose Color";
                    deck.push([color, value]);
                }
            }
            else {
                for (let j = 0; j < 10; j++) {
                    value = j.toString();
                    deck.push([color, value]);
                }
                for (let j = 1; j < 10; j++) {
                    value = j.toString();
                    deck.push([color, value]);
                }
                for (let j = 0; j < 2; j++) {
                    value = "+2";
                    deck.push([color, value]);
                    value = "skip";
                    deck.push([color, value]);
                    value = "reverse";
                    deck.push([color, value]);
                }
            }
        }
    } //createCards zu
    function drawCards(_cardNum) {
        for (let i = _cardNum; i > 0; i--) {
            let r = Math.floor(Math.random() * (deck.length - 1));
            card = document.createElement("div");
            card.innerText = deck[r][1];
            card.setAttribute("class", "card");
            let cardColor = deck[r][0];
            card.classList.add(cardColor);
            document.getElementById("player").appendChild(card);
            handCards.push(deck[r]);
            deck.splice(r, 1);
        }
        console.log(handCards);
    } //drawCards zu
    function startCard() {
        //Ablagestapel
        let r = Math.floor(Math.random() * (deck.length - 1));
        card = document.createElement("div");
        card.setAttribute("class", "card");
        card.innerText = deck[r][1];
        card.setAttribute("class", "card");
        let cardColor = deck[r][0];
        card.classList.add(cardColor);
        document.getElementById("tray").appendChild(card);
        deck.splice(r, 1);
        //Ziehstapel
        let cardDeck = document.createElement("div");
        cardDeck.setAttribute("class", "card");
        cardDeck.innerText = "UNO";
        document.getElementById("pull").appendChild(cardDeck);
    } //startCard zu
})(L02 || (L02 = {})); //namespace zu
//# sourceMappingURL=index.js.map