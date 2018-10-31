var L03;
(function (L03) {
    document.addEventListener("DOMContentLoaded", main);
    L03.deck = []; //deck[index][color, value]
    let handCards = [];
    let handCardsIndex = 0;
    let index;
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
    //Startkarte aufdecken + zeihstapel darstellen
    function startCard() {
        //Ablagestapel
        let r = Math.floor(Math.random() * (L03.deck.length - 1));
        card = document.createElement("div");
        card.setAttribute("class", "card");
        card.innerText = L03.deck[r][1];
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
        cardDeck.addEventListener("click", takeCard);
    } //startCard zu
    function takeCard() {
        drawCards(1);
    }
    //Karten ziehen
    function drawCards(_cardAmount) {
        for (let i = 0; i < _cardAmount; i++) {
            let r = Math.floor(Math.random() * (L03.deck.length - 1));
            card = document.createElement("div");
            card.innerText = L03.deck[r][1];
            card.setAttribute("class", "card");
            let cardColor = L03.deck[r][0];
            card.classList.add(cardColor);
            document.getElementById("player").appendChild(card);
            handCards.push(L03.deck[r]);
            L03.deck.splice(r, 1);
            card.addEventListener("click", putCardDown);
        }
    } //drawCards zu
    function putCardDown(_event) {
        console.log("removeCard");
        let chosenCard = _event.target;
        index = Array.from(document.getElementById("player").children).indexOf(chosenCard);
        card.innerText = handCards[index][1];
        card.setAttribute("class", "card");
        let cardColor = handCards[index][0];
        card.classList.add(cardColor);
        document.getElementById("tray").appendChild(card);
        playedCards.push(handCards[index]);
        handCards.splice(index, 1);
        console.log(index);
        document.getElementById("player").removeChild(chosenCard);
        //abfrage ob übereinstimmt mit letzem element aus playedCards[], dann legen
    } //putCardDown zu
})(L03 || (L03 = {})); //namespace zu
//# sourceMappingURL=index.js.map