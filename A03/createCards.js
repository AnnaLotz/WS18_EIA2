var L03;
(function (L03) {
    function createCards() {
        for (let i = 0; i < 5; i++) {
            switch (i) {
                case 0:
                    L03.color = "red"; //red
                    break;
                case 1:
                    L03.color = "green"; //green
                    break;
                case 2:
                    L03.color = "blue"; //blue
                    break;
                case 3:
                    L03.color = "yellow"; //yellow
                    break;
                case 4:
                    L03.color = "black"; //black
                    break;
            }
            //black cards:
            if (L03.color == "black") {
                for (let k = 0; k < 4; k++) {
                    L03.value = "+4";
                    L03.deck.push([L03.color, L03.value]);
                    L03.value = "choose Color";
                    L03.deck.push([L03.color, L03.value]);
                }
            }
            else {
                for (let j = 0; j < 10; j++) {
                    L03.value = j.toString();
                    L03.deck.push([L03.color, L03.value]);
                }
                for (let j = 1; j < 10; j++) {
                    L03.value = j.toString();
                    L03.deck.push([L03.color, L03.value]);
                }
                for (let j = 0; j < 2; j++) {
                    L03.value = "+2";
                    L03.deck.push([L03.color, L03.value]);
                    L03.value = "skip";
                    L03.deck.push([L03.color, L03.value]);
                    L03.value = "reverse";
                    L03.deck.push([L03.color, L03.value]);
                }
            }
        }
    }
    L03.createCards = createCards; //createCards zu
})(L03 || (L03 = {}));
//# sourceMappingURL=createCards.js.map