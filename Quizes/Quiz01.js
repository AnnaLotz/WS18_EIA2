/* === L08 ===

interface Object {
    [key: string]: number;
}

let eia2: Object = { a: 1, b: 2, c: 3 };

for (let key in eia2) {
    console.log(key + eia2[key]);
}


*/
/* ====L05====



//So wäre es z.B. richtig:
namespace MyProgramm {
    let text: string = "This is some Text."; //Variable klein schreiben, bezeichnenden englischen Namen wählen
    writeText(text); //Funtkionsnamen klein beginnen, weitere Wörter darin groß beginnen - auch beim funktion deklarieren
    
    function writeText(_givenText: string): void { //Übergabeparameter mit Unterstrich beginnen, ebenfalls englschen Namen wählen
        document.getElementsByTagName("body")[0].innerText = _givenText; //Übergabeparameter
    }
}


//Abgefragt/Falsch:
namespace MyProgramm {
    let A: string = "This is some Text."; //A nicht große schreiben, auch nicht in nächster Zeile; am besten einen bezeichnenderen Namen wählen
    Writetext(A); //Funtkionsnamen klein beginnen, weitere Wörter darin groß beginnen - auch beim funktion deklarieren
    
    function Writetext(übergabe: string): void { //ÜbergabeParameter mit Unterstrich beginnen, in nächster Zeile also auch; am bestenübergabe englisch
        document.getElementsByTagName("body")[0].innerText = übergabe;
    }
}


/* ====L04====

document.addEventListener("DOMContentLoaded", fnk);

function fnk(): void {
    document.getElementsByTagName("body")[0].addEventListener("keyup", up);
    document.getElementsByTagName("body")[0].addEventListener("keydown", down);
}

function up(_event: Event): void {
    document.getElementsByTagName("body")[0].innerHTML = "Hallo";
}

function down(): void {
    document.getElementsByTagName("body")[0].innerHTML = "Guten Tag";
}





    /* ====L03====
    
    console.log(Math.floor(6.85));
    
    let picture: HTMLElement = document.createElement("div");
    picture.innerText = "Hier könnte ihre Werbung stehen!";
    picture.setAttribute("class", "a");
    picture.setAttribute("class", "b");
    picture.classList.add("c");
    
    
    console.log(picture.classList);
    
    
    
    
    let anArray: string[] = ["a", "b", "c", "d", "e", "f", "g"];
    
    anArray.splice(2, 3);
    
    console.log(anArray);
    
    
    
    
    /* =====L02=====
    
    let bewertung: string = "B";
    
    switch (bewertung) {
        case "A":
            console.log("Sehr gut");
            break;
        case "B":
            console.log("Gut");
            break;
        case "C":
            console.log("Befriedigend");
            break;
        case "D":
            console.log("Ausreichend");
            break;
        default:
            console.log("Nicht Bestanden");
            break;
    }
    
    
    let a: number = 20;
    let b: number;
    
    b = a % 15;
    
    
    /* =====L01=====
    document.addEventListener("DOMContentLoaded", whatsTheWeatherLike);
    
    let season: string[] = ["spring", "summer", "autumn", "winter"];
    let weather: string;
    
    function whatsTheWeatherLike(): void {
    
        if (season[2] == "summer") {
            weather = "hot";
        } else if (season[2] == "autumn") {
            weather = "windy";
        } else if (season[2] == "winter") {
            weather = "cold";
        }
    
        console.log("The weather outside is " + weather + "!");
    
    }
    
        let a: string = "12";
    */
// }//namespace zu 
//# sourceMappingURL=Quiz01.js.map