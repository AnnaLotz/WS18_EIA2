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



//    let a: string = "12";