namespace L02 {

    let allCards: string[][] = [[], []];
    let color: string;
    let value: string;


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
                allCards.push([color], [value]);
            }
            for (let k: number = 0; k < 4; k++) {
                value = "choose Color";
                allCards.push([color], [value]);
            }
        //colored cards:
        } else {
            for (let j: number = 0; j < 10; j++) {
                //let v: number = 0;
                value = j.toString();
                allCards.push([color], [value]);
            }
            for (let j: number = 1; j < 10; j++) {
                //let v: number = 0;
                value = j.toString();
                allCards.push([color], [value]);
            }
        }
    }



    for (let i: number = 0; i < allCards.length; i++)
        console.log(allCards[i]);

    console.log(allCards.length / 2);




} //namespace zu