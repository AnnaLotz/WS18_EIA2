var A00;
(function (A00) {
    document.addEventListener("DOMContentLoaded", greet);
    function greet() {
        let name = prompt("Wie heißt du?", "Dein Name");
        if (name == "Dein Name" || name == null) {
            name = "misteriöser unbekannter";
        }
        console.log("Hallo " + name + ", viel Erfolg bei EIA2!");
        document.getElementById("helloBox").innerHTML = "Hallo " + name + ", viel Erfolg bei EIA2!";
    }
})(A00 || (A00 = {}));
//# sourceMappingURL=A00.js.map