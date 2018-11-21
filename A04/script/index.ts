namespace A4 {

    document.addEventListener("DOMContentLoaded", init);

    let fieldset: HTMLElement;
    let legend: HTMLElement;
    let input: HTMLInputElement;
    let label: HTMLLabelElement;


    /*__________________________________________________________  */
    function init(): void {
        createInputs();

        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    } //close init


    function createInputs(): void {
        let div: Node;
        let groupAmount: number;
        let productsInGroupAmount: number;

        //Schleife für die Produktgruppe
        for (let key in products) {

            let product: Product[] = products[key]; //das einzelne Produkt als Interface
            groupAmount = key.length; //menge der Produktgruppen, also Bäume, Kugeln...
            productsInGroupAmount = product.length; //Menge der Produkte in einer Gruppe, also Tanne, Fichte...
            console.log(key);

            fieldset = document.createElement("fieldset");
            legend = document.createElement("legend");
            legend.innerText = key;
            fieldset.appendChild(legend);

            //Schleife für jedes einzelne Produkt
            for (let i: number = 0; i < productsInGroupAmount; i++) {

                //Allgemeinen Input definieren
                input = document.createElement("input");
                input.name = key;
                input.value = products[key][i].name;
                input.id = products[key][i].name;
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

    function handleChange(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;

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

    function addStepper(_target: HTMLInputElement): void {
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

    function removeStepper(_target: HTMLInputElement): void {
        _target.parentElement.removeChild(input);
    } //close removeStepper

} //close Namespace