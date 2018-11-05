namespace L03 {

    document.addEventListener("DOMContentLoaded", main);

    export let deck: string[][] = []; //deck[index][color, value]
    let handCards: string[][] = [];
    let playedCards: string[][] = [];
    export let color: string;
    export let value: string;
    let card: HTMLDivElement;
    let cardDeck: HTMLElement;
    let chosenColor: string;


    function main(): void {

        let startCards: number;
        let i: number = parseInt(prompt("Mit wie vielen Karten möchtest du starten?", "5"));
        if (i >= 1 && i < 108) {
            startCards = i;
        } else {
            startCards = 5;
        }

        createCards(); // -> createCards.ts
        drawCards(startCards);
        startCard();

    } //main zu


    //Startkarte aufdecken + ziehstapel darstellen
    function startCard(): void {

        //Ablagestapel
        let r: number = Math.floor(Math.random() * (deck.length - 1));

        //damit keine schwarze karte als erstes liegt
        if (deck[r][0] == "black") {
            startCard();
            console.log("neue startKarte");
        } else {
            card = document.createElement("div");
            card.innerText = deck[r][1];
            card.setAttribute("id", "trayCard");
            let cardColor: string = deck[r][0];
            card.classList.add("card", cardColor);
            document.getElementById("tray").appendChild(card);
            playedCards.push(deck[r]);
            deck.splice(r, 1);

            //Ziehstapel
            cardDeck = document.createElement("div");
            cardDeck.setAttribute("class", "card");
            cardDeck.innerText = "UNO";
            document.getElementById("pull").appendChild(cardDeck);

            //Listener
            cardDeck.addEventListener("click", takeCard);
            document.addEventListener("keydown", takeCard);

            let button: HTMLElement = document.getElementById("sort");
            button.addEventListener("click", sortCards);
        }
    } //startCard zu


    function takeCard(_event: KeyboardEvent): void {
        //leertaste gedrückt oder karte geclicked
        if (_event.keyCode == 32 || _event.target == cardDeck) {
            drawCards(1);
        }
    } //takeCard zu


    function drawCards(_cardAmount: number): void {

        for (let i: number = 0; i < _cardAmount; i++) {
            let r: number = Math.floor(Math.random() * (deck.length - 1));
            card = document.createElement("div");
            card.setAttribute("class", "card");
            card.innerText = deck[r][1];
            let cardColor: string = deck[r][0];
            card.classList.add(cardColor);
            document.getElementById("player").appendChild(card);
            handCards.push(deck[r]);
            deck.splice(r, 1);
            card.addEventListener("click", putCardDown);
        }
    } //drawCards zu


    function putCardDown(_event: MouseEvent): void {

        let chosenCard: HTMLElement = <HTMLElement>_event.target; //gedrückte spielerkarte -> HTML-Element
        let indexPlayer: number = Array.from(document.getElementById("player").children).indexOf(chosenCard); //index der gewählten spielerkarte
        let indexTray: number = playedCards.length - 1; //index der obersten karte

        //wenn spieler schwarz legt, farbwahl mit promt
        if (handCards[indexPlayer][0] == "black") {
            chosenColor = prompt("Welche Farbe wünschst du dir? ('red', 'green', 'blue' oder 'yellow')");
            card = <HTMLDivElement>document.getElementById("trayCard");
            card.innerText = handCards[indexPlayer][1];
            card.setAttribute("class", "card");
            card.classList.add("black");
            let style: string = "0.5em solid " + chosenColor;
            card.style.border = style;
            document.getElementById("player").removeChild(chosenCard);
            playedCards.push(handCards[indexPlayer]);
            handCards.splice(indexPlayer, 1);
            //wenn schwarze oben liegt, ist gleich mit gewünschter Farbe?
        } else if (playedCards[indexTray][0] == "black") {
            if (handCards[indexPlayer][0] == chosenColor) {
                card = <HTMLDivElement>document.getElementById("trayCard");
                card.innerText = handCards[indexPlayer][1];
                let cardColor: string = handCards[indexPlayer][0];
                card.setAttribute("class", "card");
                card.classList.add(cardColor);
                card.style.border = " 0.05em solid black";
                document.getElementById("player").removeChild(chosenCard);
                playedCards.push(handCards[indexPlayer]);
                handCards.splice(indexPlayer, 1);
            }
            //sonst prüfe, ob farben oder wert identisch    
        } else if (handCards[indexPlayer][0] == playedCards[indexTray][0] || handCards[indexPlayer][1] == playedCards[indexTray][1]) {
            card = <HTMLDivElement>document.getElementById("trayCard");
            card.innerText = handCards[indexPlayer][1];
            let cardColor: string = handCards[indexPlayer][0];
            card.setAttribute("class", "card");
            card.classList.add(cardColor);
            card.style.border = " 0.05em solid black";
            document.getElementById("player").removeChild(chosenCard);
            playedCards.push(handCards[indexPlayer]);
            handCards.splice(indexPlayer, 1);
        }
    } //putCardDown zu


    function sortCards(): void {
        handCards.sort();
        console.log(handCards);
        document.getElementById("player").innerHTML = "";

        for (let i: number = 0; i < handCards.length; i++) {
            card = document.createElement("div");
            card.setAttribute("class", "card");
            card.innerText = handCards[i][1];
            let cardColor: string = handCards[i][0];
            card.classList.add(cardColor);
            document.getElementById("player").appendChild(card);
            card.addEventListener("click", putCardDown);
        }
    } //sortCards zu

    /* Code von Anna Lotz:
       https://github.com/AnnaLotz?tab=repositories */
    

} //namespace zu