var L03;
(function (L03) {
    document.addEventListener("DOMContentLoaded", main);
    L03.deck = []; //deck[index][color, value]
    let handCards = [];
    let playedCards = [];
    let card;
    let chosenColor;
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
    //Startkarte aufdecken + ziehstapel darstellen
    function startCard() {
        //Ablagestapel
        let r = Math.floor(Math.random() * (L03.deck.length - 1));
        //damit keine schwarze karte als erstes liegt
        if (L03.deck[r][0] == "black") {
            startCard();
            console.log("neue startKarte");
        }
        else {
            card = document.createElement("div");
            card.innerText = L03.deck[r][1];
            card.setAttribute("id", "trayCard");
            let cardColor = L03.deck[r][0];
            card.classList.add("card", cardColor);
            document.getElementById("tray").appendChild(card);
            playedCards.push(L03.deck[r]);
            L03.deck.splice(r, 1);
            //Ziehstapel
            let cardDeck = document.createElement("div");
            cardDeck.setAttribute("class", "card");
            cardDeck.innerText = "UNO";
            document.getElementById("pull").appendChild(cardDeck);
            cardDeck.addEventListener("click", takeCard);
        }
    } //startCard zu
    function takeCard() {
        drawCards(1);
    }
    //Karten ziehen
    function drawCards(_cardAmount) {
        for (let i = 0; i < _cardAmount; i++) {
            let r = Math.floor(Math.random() * (L03.deck.length - 1));
            card = document.createElement("div");
            card.setAttribute("class", "card");
            card.innerText = L03.deck[r][1];
            let cardColor = L03.deck[r][0];
            card.classList.add(cardColor);
            document.getElementById("player").appendChild(card);
            handCards.push(L03.deck[r]);
            L03.deck.splice(r, 1);
            card.addEventListener("click", putCardDown);
        }
    } //drawCards zu
    function putCardDown(_event) {
        let chosenCard = _event.target; //gedrückte spielerkarte
        let indexPlayer = Array.from(document.getElementById("player").children).indexOf(chosenCard); //index der gewählten spielerkarte
        let indexTray = playedCards.length - 1; //index der obersten karte
        //wenn schwarze oben liegt, ist gleich mit gewünschter Farbe?
        if (playedCards[indexTray][0] == "black") {
            if (handCards[indexPlayer][0] == chosenColor) {
                card = document.getElementById("trayCard");
                card.innerText = handCards[indexPlayer][1];
                let cardColor = handCards[indexPlayer][0];
                card.setAttribute("class", "card");
                card.classList.add(cardColor);
                card.style.border = " 0.05em solid black";
                document.getElementById("player").removeChild(chosenCard);
                playedCards.push(handCards[indexPlayer]);
                handCards.splice(indexPlayer, 1);
            }
        }
        else {
            //wenn spieler schwarz legt, farbwahl mit promt
            if (handCards[indexPlayer][0] == "black") {
                chosenColor = prompt("Welche Farbe wünschst du dir? ('red', 'green', 'blue' oder 'yellow')");
                card = document.getElementById("trayCard");
                card.innerText = handCards[indexPlayer][1];
                card.setAttribute("class", "card");
                card.classList.add("black");
                let style = "0.5em solid " + chosenColor;
                card.style.border = style;
                document.getElementById("player").removeChild(chosenCard);
                playedCards.push(handCards[indexPlayer]);
                handCards.splice(indexPlayer, 1);
            }
            else if (handCards[indexPlayer][0] == playedCards[indexTray][0] || handCards[indexPlayer][1] == playedCards[indexTray][1]) {
                card = document.getElementById("trayCard");
                card.innerText = handCards[indexPlayer][1];
                let cardColor = handCards[indexPlayer][0];
                card.setAttribute("class", "card");
                card.classList.add(cardColor);
                card.style.border = " 0.05em solid black";
                document.getElementById("player").removeChild(chosenCard);
                playedCards.push(handCards[indexPlayer]);
                handCards.splice(indexPlayer, 1);
            }
        }
    } //putCardDown zu
})(L03 || (L03 = {})); //namespace zu
//# sourceMappingURL=index.js.map