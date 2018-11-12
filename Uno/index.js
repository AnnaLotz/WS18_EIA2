var Uno;
(function (Uno) {
    document.addEventListener("DOMContentLoaded", main);
    Uno.deck = []; //deck[index][color, value]
    let handCards = [];
    let trayCards = [];
    let card;
    let cardDeck;
    let chosenColor;
    function main() {
        Uno.createCards(); // -> createCards.ts
        let startCards;
        let i = parseInt(prompt("Mit wie vielen Karten möchtest du starten?", "5"));
        if (i >= 1 && i < 108) {
            startCards = i;
        }
        else {
            startCards = 5;
        }
        drawCards(startCards);
        startCard();
    } //main zu
    //Startkarte aufdecken + ziehstapel darstellen
    function startCard() {
        //Ablagestapel
        let r = Math.floor(Math.random() * (Uno.deck.length - 1));
        //damit keine schwarze karte als erstes liegt
        if (Uno.deck[r][0] == "black") {
            startCard();
        }
        else {
            card = document.createElement("div");
            card.innerText = Uno.deck[r][1];
            card.setAttribute("id", "trayCard");
            let cardColor = Uno.deck[r][0];
            card.classList.add("card", cardColor);
            document.getElementById("tray").appendChild(card);
            trayCards.push(Uno.deck[r]);
            Uno.deck.splice(r, 1);
            //Ziehstapel
            cardDeck = document.createElement("div");
            cardDeck.setAttribute("class", "card");
            cardDeck.classList.add("id", "pullCard");
            cardDeck.innerText = "UNO";
            document.getElementById("pull").appendChild(cardDeck);
            //Listener
            cardDeck.addEventListener("click", takeCard);
            document.addEventListener("keydown", takeCard);
            let button = document.getElementById("sort");
            button.addEventListener("click", sortCards);
        }
    } //startCard zu
    function takeCard(_event) {
        //leertaste gedrückt oder karte geclicked
        if (_event.keyCode == 32 || _event.target == cardDeck) {
            drawCards(1);
        }
    } //takeCard zu
    function drawCards(_cardAmount) {
        for (let i = 0; i < _cardAmount; i++) {
            if (Uno.deck.length == 0) {
                document.getElementById("pull").innerHTML = "";
            }
            else {
                let r = Math.floor(Math.random() * (Uno.deck.length - 1));
                card = document.createElement("div");
                card.setAttribute("class", "card");
                card.innerText = Uno.deck[r][1];
                let cardColor = Uno.deck[r][0];
                card.classList.add(cardColor);
                document.getElementById("player").appendChild(card);
                handCards.push(Uno.deck[r]);
                Uno.deck.splice(r, 1);
                card.addEventListener("click", putCardDown);
            }
        }
    } //drawCards zu
    function putCardDown(_event) {
        let chosenCard = _event.target; //gedrückte spielerkarte -> HTML-Element
        let indexChosenCard = Array.from(document.getElementById("player").children).indexOf(chosenCard); //index der gewählten spielerkarte
        let indexTray = trayCards.length - 1; //index der obersten karte
        //wenn spieler schwarz legt, farbwahl mit promt
        if (handCards[indexChosenCard][0] == "black") {
            chosenColor = prompt("Welche Farbe wünschst du dir? ('red', 'green', 'blue' oder 'yellow')");
            displayChosenCard(indexChosenCard, chosenCard, true);
        }
        else if (trayCards[indexTray][0] == "black") {
            if (handCards[indexChosenCard][0] == chosenColor) {
                displayChosenCard(indexChosenCard, chosenCard, false);
            }
        }
        else if (handCards[indexChosenCard][0] == trayCards[indexTray][0] || handCards[indexChosenCard][1] == trayCards[indexTray][1]) {
            displayChosenCard(indexChosenCard, chosenCard, false);
        }
    } //putCardDown zu
    function displayChosenCard(_indexChosenCard, _chosenCard, _blackCard) {
        card = document.getElementById("trayCard");
        card.innerText = handCards[_indexChosenCard][1];
        let cardColor = handCards[_indexChosenCard][0];
        card.setAttribute("class", "card");
        card.classList.add(cardColor);
        if (_blackCard == true) {
            let style = "0.5em solid " + chosenColor;
            card.style.border = style;
        }
        else {
            card.style.border = " 0.05em solid black";
        }
        document.getElementById("player").removeChild(_chosenCard);
        trayCards.push(handCards[_indexChosenCard]);
        handCards.splice(_indexChosenCard, 1);
    } //displayCard zu
    function sortCards() {
        handCards.sort();
        console.log(handCards);
        document.getElementById("player").innerHTML = "";
        for (let i = 0; i < handCards.length; i++) {
            card = document.createElement("div");
            card.setAttribute("class", "card");
            card.innerText = handCards[i][1];
            let cardColor = handCards[i][0];
            card.classList.add(cardColor);
            document.getElementById("player").appendChild(card);
            card.addEventListener("click", putCardDown);
        }
    } //sortCards zu
})(Uno || (Uno = {})); //namespace zu
//# sourceMappingURL=index.js.map