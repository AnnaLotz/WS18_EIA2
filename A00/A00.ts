namespace A00 {

    document.addEventListener("DOMContentLoaded", greet);

    function greet(): void {
        let name: string = prompt("Wie heißt du?", "Dein Name");
        
        if (name == "Dein Name" || name == null) {
            name = "misteriöser unbekannter";
        }       
        console.log("Hallo " + name + ", viel Erfolg bei EIA2!");
        document.getElementById("helloBox").innerHTML = "Hallo " + name + ", viel Erfolg bei EIA2!";
    }

}