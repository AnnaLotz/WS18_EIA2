namespace A7 {

    document.addEventListener("DOMContentLoaded", init);

    let fieldset: HTMLElement;
    let legend: HTMLElement;
    let input: HTMLInputElement;
    let label: HTMLLabelElement;
    let readyToOrder: boolean;
    let shippingChosen: boolean = false;
    let dataToSend: boolean = false;


    let product: Product[];
    interface CartProduct {
        name: string;
        price: number;
        group: string;
        amount: number;
    }
    let cart: CartProduct[] = [];
    let cartPrice: number = 0;

    let inputs: NodeListOf<HTMLInputElement>;

    let queryUrl: string = "";
//    let address: string = "http://localhost:8100";
    let address: string = "https://eia2-257449.herokuapp.com";

    /*__________________________________________________________  */

    function init(): void {
        document.getElementById("check").addEventListener("click", checkOrder);
        document.getElementById("ajax").addEventListener("click", handleClickOnAsync);
        document.getElementById("response").style.display = "none";
        createInputs();
        displayCart();
        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    } //close init

    function handleClickOnAsync(_event: Event): void {

        document.getElementById("responseDiv").innerHTML = "";
        queryUrl = "";
        inputs = document.getElementsByTagName("input");
        for (let i: number = 0; i < inputs.length; i++) {
            input = inputs[i];
            if (input.checked == true) {
                if (input.type == "radio") {
                    queryUrl += input.value + "=1&";
                    dataToSend = true;
                } else if (input.type == "checkbox") {
                    let associatedStepper: HTMLInputElement = <HTMLInputElement>document.getElementById(input.id + " stepper");
                    queryUrl += input.value + "=" + associatedStepper.value + "&";
                    dataToSend = true;
                }
            } else if (input.type == "text") {
                if (input.value != "") {
                    queryUrl += input.name + "=" + input.value + "&";
                }
            }
        }
        if (dataToSend == false) {
            alert("Es sind keine Daten eingegangen");
        } else {
            sendRequestWithCustomData();
        }

    } //close handleClickOnAsync

    function sendRequestWithCustomData(): void {
        document.getElementById("response").style.display = "initial";
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", address + "?" + queryUrl, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    } //close sendRequestWithCustomData

    function handleStateChange(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = <XMLHttpRequest>_event.target;
        console.log(xhr.readyState);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);

            document.getElementById("responseDiv").innerHTML += xhr.response;
        }
    } //close handleStateChange

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
                label.innerText = products[key][i].name + " (" + products[key][i].price + " €)";
                //Ins HTML anhängen
                fieldset.appendChild(input);
                fieldset.appendChild(label);
                div = document.getElementById("products");
                div.appendChild(fieldset);
                //input typ definieren
                if (key == "shipping") {
                    input.type = "radio";
                } else if (key == "trees" || key == "stands") {
                    input.type = "radio";
                } else {
                    input.type = "checkbox";
                    input.name = ""; //damit kein wert in der query steht, Objekt wird über den stepper übergeben
                }

                fieldset.appendChild(document.createElement("br"));
            } //schleife einzelnes Produkt ende
        } //schleife produktgruppe ende
    } //close createInputs

    function handleChange(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        //stepper bei checkboxes hinzufügen/entfernen
        if (target.type == "checkbox") {
            if (target.checked == true) {
                addStepper(target);
            } else if (target.checked == false) {
                removeStepper(target);
            }
        }

        //Warenkorb leeren und komplett neu befüllen
        cart = [];
        inputs = document.getElementById("products").getElementsByTagName("input");
        let chosenProduct: CartProduct;
        let currentAmount: number;

        for (let i: number = 0; i < inputs.length; i++) {
            let input: HTMLInputElement = inputs[i];

            if (input.checked == true) {
                if (input.type == "checkbox") {
                    let associatedStepper: HTMLInputElement = <HTMLInputElement>document.getElementById(input.id + " stepper");
                    currentAmount = parseInt(associatedStepper.value);
                } else {
                    currentAmount = 1;
                }

                chosenProduct = {
                    name: input.getAttribute("id"),
                    price: Number(input.getAttribute("price")),
                    group: input.getAttribute("productGroup"),
                    amount: currentAmount
                };
                cart.push(chosenProduct);
            }
        }

        calcPrice();
        displayCart();
    } //close handleChange

    function displayCart(): void {
        let cartProductsDiv: HTMLElement = document.getElementById("cartProducts");
        cartProductsDiv.innerHTML = "";
        let content: string = "";
        for (let i: number = 0; i < cart.length; i++) {
            content += cart[i].name;
            if (cart[i].amount != 1) {
                content += " *" + cart[i].amount;
            }
            content += "<br>";
        }
        content += "<hr>";
        content += "Gesamtpreis: ";
        cartProductsDiv.innerHTML = content;

        let cartPriceDiv: HTMLElement = document.getElementById("cartPrice");
        cartPriceDiv.innerHTML = "";
        let priceContent: string = "";
        for (let i: number = 0; i < cart.length; i++) {
            let price: number = cart[i].amount * Number(cart[i].price);
            priceContent += price.toFixed(2) + "€";
            priceContent += "<br>";

        }
        priceContent += "<hr>";
        priceContent += cartPrice.toFixed(2) + "€";
        cartPriceDiv.innerHTML = priceContent;
    } //close displayCart

    function calcPrice(): void {
        cartPrice = 0;
        for (let i: number = 0; i < cart.length; i++) {
            cartPrice += cart[i].price * cart[i].amount;
        }
    } //close calcPrice

    function checkOrder(): void {
        readyToOrder = true;
        let inputs: NodeListOf<HTMLInputElement> = document.getElementById("shopper").getElementsByTagName("input");
        for (let i: number = 0; i < inputs.length; i++) {
            let input: HTMLInputElement = inputs[i];
            if (input.value == "") {
                readyToOrder = false;
            }
        }

        for (let i: number = 0; i < cart.length; i++) {
            if (cart[i].group == "shipping") {
                shippingChosen = true;
            }
        }
        if (shippingChosen == true) {
            if (readyToOrder == false) {
                alert("Bitte Lieferadresse vollständig ausfüllen");
            } else {
                alert("Alle Angaben korrekt");
            }
        } else {
            alert("Bitte Versandart auswählen");
        }

    } //close  checkOrder

    function addStepper(_target: HTMLInputElement): void {
        input = document.createElement("input");
        input.type = "number";
        input.name = "stepper " + _target.id;
        input.step = "1";
        input.min = "1";
        input.max = "30";
        input.value = "1";
        input.id = _target.id + " stepper";
        input.setAttribute("product", _target.id);
        document.getElementById(_target.id).nextSibling.appendChild(input);
    } //close addStepper

    function removeStepper(_target: HTMLInputElement): void {
        document.getElementById(_target.id + " stepper").remove();
    } //close removeStepper

} //close Namespace  