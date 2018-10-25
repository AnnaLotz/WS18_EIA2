var L02;
(function (L02) {
    document.addEventListener("DOMContentLoaded", main);
    let deck = [];
    let color;
    let value;
    function main() {
        let startCards;
        startCards = parseInt(prompt("Mit wie vielen Karten möchtest du starten?", "5"));
        createCards();
        drawCards(startCards);
    } //main zu
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
    function drawCards(_startnum) {
        let card;
        for (let i = _startnum; i > 0; i--) {
            let r = Math.floor(Math.random() * (deck.length - 1));
            card = document.createElement("div");
            card.innerText = deck[r][1];
            card.style.background = deck[r][0];
            //wenn farbe Schwarz oder blau: schriftfarbe weiß
            if (deck[r][0] == "#000000" || deck[r][0] == "#0000ff")
                card.style.color = "white";
            document.getElementById("player").appendChild(card);
            deck.splice(r, 1);
        }
    } //drawCards zu
})(L02 || (L02 = {})); //namespace zu
//# sourceMappingURL=index.js.map