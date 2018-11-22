var A4;
(function (A4) {
    document.addEventListener("DOMContentLoaded", init);
    let fieldset;
    let legend;
    let input;
    let label;
    let cart = [];
    /*__________________________________________________________  */
    function init() {
        createInputs();
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    } //close init
    function handleChange(_event) {
        let target = _event.target;
        //        console.log("Changed " + target.name + " " + target.value + " to " + target.checked);
        //stepper bei checkboxes hinzufügen/entfernen
        if (target.type == "checkbox") {
            if (target.checked == true) {
                addStepper(target);
                refreshCart(target, true);
            }
            else if (target.checked == false) {
                removeStepper(target);
                refreshCart(target, false);
            }
        }
        else {
            refreshCart(target, true);
        }
    } //close handleChange
    function refreshCart(_target, _add) {
        let chosenProduct = {
            name: _target.getAttribute("id"),
            price: parseInt(_target.getAttribute("price")),
            group: _target.getAttribute("productGroup"),
            amount: 1
        };
        if (_add == true) {
            cart.push(chosenProduct);
        }
        else {
            let ind = cart.indexOf(chosenProduct);
            cart.splice(ind, 1);
        }
        //Übersicht in der Konsol    
        console.log("Ausgewähltes Produkt: ");
        console.log(chosenProduct);
        console.log("Aktueller Warenkorb: ");
        console.log(cart);
        console.log("====================");
    } //close refreshCart
    function createInputs() {
        let div;
        //Schleife für die Produktgruppe
        for (let key in A4.products) {
            let product = A4.products[key]; //das einzelne Produkt als Interface
            fieldset = document.createElement("fieldset");
            legend = document.createElement("legend");
            legend.innerText = key.toUpperCase();
            fieldset.appendChild(legend);
            //Schleife für jedes einzelne Produkt
            for (let i = 0; i < product.length; i++) {
                //Allgemeinen Input definieren
                input = document.createElement("input");
                input.name = key;
                input.value = A4.products[key][i].name;
                input.id = A4.products[key][i].name;
                input.setAttribute("productGroup", key);
                input.setAttribute("productIndex", i.toString());
                input.setAttribute("price", A4.products[key][i].price.toString());
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
    function addStepper(_target) {
        input = document.createElement("input");
        input.type = "number";
        input.name = "stepper";
        input.step = "1";
        input.min = "1";
        input.max = "30";
        input.value = "1";
        input.id = _target.id + " stepper";
        document.getElementById(_target.id).nextSibling.appendChild(input);
    } //close addStepper
    function removeStepper(_target) {
        document.getElementById(_target.id + " stepper").remove();
    } //close removeStepper
})(A4 || (A4 = {})); //close Namespace
//# sourceMappingURL=index.js.map