namespace L03 {

    document.addEventListener("DOMContentLoaded", main);

    export let deck: string[][] = []; //deck[index][color, value]
    let handCards: string[][] = [];
    let playedCards: string[][] = [];
    export let color: string;
    export let value: string;
    let card: HTMLDivElement;


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

    //Startkarte aufdecken + zeihstapel darstellen
    function startCard(): void {

        //Ablagestapel
        let r: number = Math.floor(Math.random() * (deck.length - 1));
        card = document.createElement("div");
        card.setAttribute("class", "card");
        card.setAttribute("id", "trayCard");
        card.innerText = deck[r][1];
        let cardColor: string = deck[r][0];
        card.classList.add(cardColor);
        document.getElementById("tray").appendChild(card);
        playedCards.push(deck[r]);
        deck.splice(r, 1);

        //Ziehstapel
        let cardDeck: HTMLElement = document.createElement("div");
        cardDeck.setAttribute("class", "card");
        cardDeck.innerText = "UNO";
        document.getElementById("pull").appendChild(cardDeck);

        cardDeck.addEventListener("click", takeCard);

    } //startCard zu



    function takeCard(): void {
        drawCards(1);
    }

    //Karten ziehen
    function drawCards(_cardAmount: number): void {

        for (let i: number = 0; i < _cardAmount; i++) {
            let r: number = Math.floor(Math.random() * (deck.length - 1));
            card = document.createElement("div");
            card.innerText = deck[r][1];
            card.setAttribute("class", "card");
            let cardColor: string = deck[r][0];
            card.classList.add(cardColor);
            document.getElementById("player").appendChild(card);
            handCards.push(deck[r]);
            deck.splice(r, 1);

            card.addEventListener("click", putCardDown);
        }

    } //drawCards zu


    function putCardDown(_event: MouseEvent): void {
        console.log("removeCard");
        let chosenCard: HTMLElement = <HTMLElement>_event.target;
        let index: number = Array.from(document.getElementById("player").children).indexOf(chosenCard);
        card.innerText = handCards[index][1];
        card.setAttribute("class", "card");
        let cardColor: string = handCards[index][0];
        card.classList.add(cardColor);       

        document.getElementById("player").removeChild(chosenCard);
        playedCards.push(handCards[index]);
        console.log(playedCards);
        handCards.splice(index, 1);

        //abfrage ob übereinstimmt mit letzem element aus playedCards[], dann legen

    } //putCardDown zu




} //namespace zu