namespace L02 {

    document.addEventListener("DOMContentLoaded", main);

    let deck: string[][] = [];
    let color: string;
    let value: string;

    let card: HTMLDivElement;


    function main(): void {
        
        let startCards: number;
        startCards = parseInt(prompt("Mit wie vielen Karten möchtest du starten?", "5"));

        createCards();
        drawCards(startCards);
    } //main zu

    function drawCards(_startnum: number): void {

        for (let i: number = _startnum; i > 0; i--) {
            let r: number = Math.floor(Math.random() * deck.length);
            card = document.createElement("div");
            card.innerText = deck[r][1];
            document.getElementById("player").appendChild(card);
        }

    }

    function createCards(): void {
        for (let i: number = 0; i < 5; i++) {
            switch (i) {
                case 0:
                    color = "#ff0000"; //red
                    break;
                case 1:
                    color = "#00ff00"; //green
                    break;
                case 2:
                    color = "#0000ff"; //blue
                    break;
                case 3:
                    color = "#ffff00"; //yellow
                    break;
                case 4:
                    color = "#000000"; //black
                    break;
            }

            //black cards:
            if (color == "#000000") {
                for (let k: number = 0; k < 4; k++) {
                    value = "+4";
                    deck.push([color, value]); // deck.push({color=color,value=value});
                    value = "choose Color";
                    deck.push([color, value]);
                }
                //colored cards:
            } else {
                for (let j: number = 0; j < 10; j++) {
                    value = j.toString();
                    deck.push([color, value]);
                }
                for (let j: number = 1; j < 10; j++) {
                    value = j.toString();
                    deck.push([color, value]);
                }
                for (let j: number = 0; j < 2; j++) {
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







} //namespace zu