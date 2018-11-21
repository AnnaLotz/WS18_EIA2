var A4;
(function (A4) {
    document.addEventListener("DOMContentLoaded", init);
    let fieldset;
    let legend;
    let input;
    let label;
    /*__________________________________________________________  */
    function init() {
        createInputs();
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    } //close init
    function createInputs() {
        let div;
        let groupAmount;
        let productsInGroupAmount;
        //Schleife für die Produktgruppe
        for (let key in A4.products) {
            let product = A4.products[key]; //das einzelne Produkt als Interface
            groupAmount = key.length; //menge der Produktgruppen, also Bäume, Kugeln...
            productsInGroupAmount = product.length; //Menge der Produkte in einer Gruppe, also Tanne, Fichte...
            console.log(key);
            fieldset = document.createElement("fieldset");
            legend = document.createElement("legend");
            legend.innerText = key;
            fieldset.appendChild(legend);
            //Schleife für jedes einzelne Produkt
            for (let i = 0; i < productsInGroupAmount; i++) {
                //Allgemeinen Input definieren
                input = document.createElement("input");
                input.name = key;
                input.value = A4.products[key][i].name;
                input.id = A4.products[key][i].name;
                //Label (Beschriftung)
                label = document.createElement("label");
                label.setAttribute("for", A4.products[key][i].name);
                label.innerText = A4.products[key][i].name + " (" + A4.products[key][i].price + "€)";
                //Ins HTML anhängen
                fieldset.appendChild(input);
                fieldset.appendChild(label);
                div = document.getElementById("products");
                div.appendChild(fieldset);
                //input typ definieren
                if (key == "trees" || key == "stands") {
                    input.type = "radio";
                }
                else {
                    input.type = "checkbox";
                }
                fieldset.appendChild(document.createElement("br"));
            } //schleife einzelnes Produkt ende
        } //schleife produktgruppe ende
    } //close createInputs
    function handleChange(_event) {
        let target = _event.target;
        console.log("Changed " + target.name + " to " + target.value);
        if (this.id == "ornaments") {
            console.log("Changed " + target.name + " to " + target.checked);
            if (target.type == "checkbox") {
                if (target.checked == true)
                    addStepper(target);
                else if (target.checked == false) {
                    removeStepper(target);
                }
            }
        }
    } //close handleChange
    function addStepper(_target) {
        input = document.createElement("input");
        input.type = "number";
        input.name = "stepper";
        input.step = "1";
        input.min = "1";
        input.max = "30";
        input.value = "1";
        input.id = _target.name + "stepper";
        _target.parentElement.appendChild(input);
    } //close addStepper
    function removeStepper(_target) {
        _target.parentElement.removeChild(input);
    } //close removeStepper
})(A4 || (A4 = {})); //close Namespace
//# sourceMappingURL=index.js.map