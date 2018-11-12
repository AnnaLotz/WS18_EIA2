var Uno;
(function (Uno) {
    function createCards() {
        for (let i = 0; i < 5; i++) {
            switch (i) {
                case 0:
                    Uno.color = "red"; //red
                    break;
                case 1:
                    Uno.color = "green"; //green
                    break;
                case 2:
                    Uno.color = "blue"; //blue
                    break;
                case 3:
                    Uno.color = "yellow"; //yellow
                    break;
                case 4:
                    Uno.color = "black"; //black
                    break;
            }
            //black cards:
            if (Uno.color == "black") {
                for (let k = 0; k < 4; k++) {
                    Uno.value = "+4";
                    Uno.deck.push([Uno.color, Uno.value]);
                    Uno.value = "choose Color";
                    Uno.deck.push([Uno.color, Uno.value]);
                }
            }
            else {
                for (let j = 0; j < 10; j++) {
                    Uno.value = j.toString();
                    Uno.deck.push([Uno.color, Uno.value]);
                }
                for (let j = 1; j < 10; j++) {
                    Uno.value = j.toString();
                    Uno.deck.push([Uno.color, Uno.value]);
                }
                for (let j = 0; j < 2; j++) {
                    Uno.value = "+2";
                    Uno.deck.push([Uno.color, Uno.value]);
                    Uno.value = "skip";
                    Uno.deck.push([Uno.color, Uno.value]);
                    Uno.value = "reverse";
                    Uno.deck.push([Uno.color, Uno.value]);
                }
            }
        }
    }
    Uno.createCards = createCards; //createCards zu
})(Uno || (Uno = {})); //namespace zu
//# sourceMappingURL=createCards.js.map