namespace A00 {

    document.addEventListener("DOMContentLoaded", greet);

    function greet(): void {
        let name: string = prompt("Wie heißt du?", "Dein Name");
        console.log("Hallo " + name + ", wie geht es dir?");
        document.getElementById("helloBox").innerHTML = "Hallo " + name + ", wie geht es dir?";
    }

}