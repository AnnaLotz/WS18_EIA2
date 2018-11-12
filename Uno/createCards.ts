namespace Uno {

    export function createCards(): void {
        for (let i: number = 0; i < 5; i++) {
            switch (i) {
                case 0:
                    color = "red"; //red
                    break;
                case 1:
                    color = "green"; //green
                    break;
                case 2:
                    color = "blue"; //blue
                    break;
                case 3:
                    color = "yellow"; //yellow
                    break;
                case 4:
                    color = "black"; //black
                    break;
            }

            //black cards:
            if (color == "black") {
                for (let k: number = 0; k < 4; k++) {
                    value = "+4";
                    deck.push([color, value]);
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

    
    /* Code von Anna Lotz:
       https://github.com/AnnaLotz?tab=repositories */

} //namespace zu