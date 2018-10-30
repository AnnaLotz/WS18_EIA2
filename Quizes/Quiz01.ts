/* ====L02 ==== */

console.log(Math.floor(6.85));

let picture: HTMLElement = document.createElement("div");
picture.innerText = "Hier könnte ihre Werbung stehen!";
picture.setAttribute("class", "a");
picture.setAttribute("class", "b");
picture.classList.add("c");


console.log( picture.classList);




let anArray: string[] = ["a", "b", "c", "d", "e", "f", "g"];

anArray.splice(2, 3);

console.log(anArray);



/* =====L01===== 

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


/* =====L00=====
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