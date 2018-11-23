namespace A4 {

    document.addEventListener("DOMContentLoaded", init);

    let fieldset: HTMLElement;
    let legend: HTMLElement;
    let input: HTMLInputElement;
    let label: HTMLLabelElement;

    let product: Product[];

    interface CartProduct {
        name: string;
        price: number;
        group: string;
        amount: number;
    }

    let cart: CartProduct[] = [];

    /*__________________________________________________________  */
    function init(): void {
        createInputs();

        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    } //close init


    function handleChange(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;

        let chosenProduct: CartProduct = {
            name: target.getAttribute("id"),
            price: parseInt(target.getAttribute("price")),
            group: target.getAttribute("productGroup"),
            amount: 1
        };

        //        console.log("Changed " + target.name + " " + target.value + " to " + target.checked);

        //stepper bei checkboxes hinzufügen/entfernen
        if (target.type == "checkbox") {
            if (target.checked == true) {
                addStepper(target);
                refreshCart(chosenProduct, true);
            } else if (target.checked == false) {
                removeStepper(target);
                refreshCart(chosenProduct, false);
            }

        } else {

            let l: number = cart.length;
            if (l != 0) {
                for (let k: number = 0; k < l; k++) {
                    if (target.getAttribute("name") == cart[k].group) {
                        cart.splice(k, 1);
                        console.log("schon im cart"); 
                    }
                }
            }
            refreshCart(chosenProduct, true);
        }

        console.log(cart);

    } //close handleChange


    function refreshCart(_chosenProduct: CartProduct, _add: boolean): void {

        if (_add == true) {
            cart.push(_chosenProduct);
        } else {
            let ind: number = cart.indexOf(_chosenProduct);
            cart.splice(ind, 1);
        }

        //Übersicht in der Konsol    
        //        console.log("Ausgewähltes Produkt: ");
        //        console.log(_chosenProduct);
        //        console.log("Aktueller Warenkorb: ");
        //        console.log(cart);
        //        console.log("====================");

    } //close refreshCart

    function createInputs(): void {
        let div: Node;

        //Schleife für die Produktgruppe
        for (let key in products) {

            product = products[key]; //das einzelne Produkt als Interface

            fieldset = document.createElement("fieldset");
            legend = document.createElement("legend");
            legend.innerText = key.toUpperCase();
            fieldset.appendChild(legend);


            //Schleife für jedes einzelne Produkt
            for (let i: number = 0; i < product.length; i++) {

                //Allgemeinen Input definieren
                input = document.createElement("input");
                input.name = key;
                input.value = products[key][i].name;
                input.id = products[key][i].name;
                input.setAttribute("productGroup", key);
                input.setAttribute("productIndex", i.toString());
                input.setAttribute("price", products[key][i].price.toString());
                //Label (Beschriftung)
                label = document.createElement("label");
                label.setAttribute("for", products[key][i].name);
                label.innerText = products[key][i].name + " (" + products[key][i].price + "€)";
                //Ins HTML anhängen
                fieldset.appendChild(input);
                fieldset.appendChild(label);
                div = document.getElementById("products");
                div.appendChild(fieldset);
                //input typ definieren
                if (key == "trees" || key == "stands") {
                    input.type = "radio";
                } else {
                    input.type = "checkbox";
                }

                fieldset.appendChild(document.createElement("br"));
            } //schleife einzelnes Produkt ende
        } //schleife produktgruppe ende
    } //close createInputs


    function addStepper(_target: HTMLInputElement): void {
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

    function removeStepper(_target: HTMLInputElement): void {
        document.getElementById(_target.id + " stepper").remove();
    } //close removeStepper

} //close Namespace