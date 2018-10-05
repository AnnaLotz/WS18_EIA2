var A00;
(function (A00) {
    document.addEventListener("DOMContentLoaded", greet);
    function greet() {
        let name = prompt("Wie heißt du?", "Dein Name");
        if (name == "Dein Name") {
            name = "misteriöser unbekannter";
        }
        console.log("Hallo " + name + ", wie geht es dir?");
        document.getElementById("helloBox").innerHTML = "Hallo " + name + ", wie geht es dir?";
    }
})(A00 || (A00 = {}));
//# sourceMappingURL=A00.js.map