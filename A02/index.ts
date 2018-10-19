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
                color = "#000000";
                break;
        }

        for (let j: number = 0; j < 10; j++) {
            //let v: number = 0;
            value = j.toString();
            allCards.push([color], [value]);
        }

        for (let k: number = 0; k < 4; k++) {
            for (let l: number = 0; l < 2; l++) {
                if (l === 0) {
                    value = "+4";
                } else {
                    value = "choose Color";
                }
                allCards.push([color], [value]);
            }
        }
    }



    for (let i: number = 0; i < allCards.length; i++)
        console.log(allCards[i]);
    
    console.log(allCards.length / 2);




} //namespace zu