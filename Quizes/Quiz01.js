document.addEventListener("DOMContentLoaded", whatsTheWeatherLike);
let season = ["spring", "summer", "autumn", "winter"];
let weather;
function whatsTheWeatherLike() {
    if (season[2] == "summer") {
        weather = "hot";
    }
    else if (season[2] == "autumn") {
        weather = "windy";
    }
    else if (season[2] == "winter") {
        weather = "cold";
    }
    console.log("The weather outside is " + weather + "!");
}
//    let a: string = "12"; 
//# sourceMappingURL=Quiz01.js.map