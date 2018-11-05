var L02;
(function (L02) {
    function createCards() {
        for (let i = 0; i < 5; i++) {
            switch (i) {
                case 0:
                    L02.color = "red"; //red
                    break;
                case 1:
                    L02.color = "green"; //green
                    break;
                case 2:
                    L02.color = "blue"; //blue
                    break;
                case 3:
                    L02.color = "yellow"; //yellow
                    break;
                case 4:
                    L02.color = "black"; //black
                    break;
            }
            //black cards:
            if (L02.color == "black") {
                for (let k = 0; k < 4; k++) {
                    L02.value = "+4";
                    L02.deck.push([L02.color, L02.value]);
                    L02.value = "choose Color";
                    L02.deck.push([L02.color, L02.value]);
                }
            }
            else {
                for (let j = 0; j < 10; j++) {
                    L02.value = j.toString();
                    L02.deck.push([L02.color, L02.value]);
                }
                for (let j = 1; j < 10; j++) {
                    L02.value = j.toString();
                    L02.deck.push([L02.color, L02.value]);
                }
                for (let j = 0; j < 2; j++) {
                    L02.value = "+2";
                    L02.deck.push([L02.color, L02.value]);
                    L02.value = "skip";
                    L02.deck.push([L02.color, L02.value]);
                    L02.value = "reverse";
                    L02.deck.push([L02.color, L02.value]);
                }
            }
        }
    }
    L02.createCards = createCards; //createCards zu
})(L02 || (L02 = {})); //namespace zu
//# sourceMappingURL=createCards.js.map