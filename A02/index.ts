namespace L02 {

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



    function drawCards(_cardAmount: number): void {

        for (let i: number = _cardAmount; i > 0; i--) {
            let r: number = Math.floor(Math.random() * (deck.length - 1));
            card = document.createElement("div");
            card.innerText = deck[r][1];
            card.setAttribute("class", "card");
            let cardColor: string = deck[r][0];
            card.classList.add(cardColor);

            document.getElementById("player").appendChild(card);
            handCards.push(deck[r]);
            deck.splice(r, 1);
        }

        console.log(handCards);

    } //drawCards zu

    function startCard(): void {

        //Ablagestapel
        let r: number = Math.floor(Math.random() * (deck.length - 1));
        card = document.createElement("div");
        card.setAttribute("class", "card");
        card.innerText = deck[r][1];
        card.setAttribute("class", "card");
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


    } //startCard zu

    /* Code von Anna Lotz:
       https://github.com/AnnaLotz?tab=repositories */

} //namespace zu