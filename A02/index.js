var L02;
(function (L02) {
    document.addEventListener("DOMContentLoaded", main);
    let deck = [];
    let color;
    let value;
    let card;
    function main() {
        createCards();
        createDivs();
    } //main zu
    function createDivs() {
        //for schleife prompt
        card = document.createElement("div");
        card.innerText = deck[1][1];
        document.getElementById("player").appendChild(card);
        card = document.createElement("div");
        card.innerText = deck[65][1];
        document.getElementById("player").appendChild(card);
        console.log(deck[7]);
        console.log(deck[7][0]);
    }
    function createCards() {
        for (let i = 0; i < 5; i++) {
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
                for (let k = 0; k < 4; k++) {
                    value = "+4";
                    deck.push([color, value]); // deck.push({color=color,value=value});
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
        //        for (let i: number = 0; i < allCards.length; i++)
        //            console.log(allCards[i]);
        console.log("Anzahl Karten: " + deck.length);
    } //createCards zu
})(L02 || (L02 = {})); //namespace zu
//# sourceMappingURL=index.js.map