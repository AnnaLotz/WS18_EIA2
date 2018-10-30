var L03;
(function (L03) {
    document.addEventListener("DOMContentLoaded", main);
    L03.deck = []; //deck[index][color, value]
    let handCards = [];
    let playedCards = [];
    let card;
    function main() {
        let startCards;
        let i = parseInt(prompt("Mit wie vielen Karten möchtest du starten?", "5"));
        if (i >= 1 && i < 108) {
            startCards = i;
        }
        else {
            startCards = 5;
        }
        L03.createCards(); // -> createCards.ts
        drawCards(startCards);
        startCard();
    } //main zu
    function drawCards(_cardAmount) {
        for (let i = _cardAmount; i > 0; i--) {
            let r = Math.floor(Math.random() * (L03.deck.length - 1));
            card = document.createElement("div");
            card.innerText = L03.deck[r][1];
            card.setAttribute("class", "card");
            let cardColor = L03.deck[r][0];
            card.classList.add(cardColor);
            document.getElementById("player").appendChild(card);
            handCards.push(L03.deck[r]);
            L03.deck.splice(r, 1);
        }
        console.log(handCards);
    } //drawCards zu
    function startCard() {
        //Ablagestapel
        let r = Math.floor(Math.random() * (L03.deck.length - 1));
        card = document.createElement("div");
        card.setAttribute("class", "card");
        card.innerText = L03.deck[r][1];
        card.setAttribute("class", "card");
        let cardColor = L03.deck[r][0];
        card.classList.add(cardColor);
        document.getElementById("tray").appendChild(card);
        playedCards.push(L03.deck[r]);
        L03.deck.splice(r, 1);
        //Ziehstapel
        let cardDeck = document.createElement("div");
        cardDeck.setAttribute("class", "card");
        cardDeck.innerText = "UNO";
        document.getElementById("pull").appendChild(cardDeck);
    } //startCard zu
})(L03 || (L03 = {})); //namespace zu
//# sourceMappingURL=index.js.map