namespace A4 {

    document.addEventListener("DOMContentLoaded", init);

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


    function createInputs(): void {
        let fieldset: Node;

        //Trees
        for (let i: number = 0; i < trees.length; i++) {
            input = document.createElement("input");
            input.type = "radio";
            input.name = "TreeGroup";
            input.value = trees[i].name;
            input.id = trees[i].name;

            label = document.createElement("label");
            label.setAttribute("for", trees[i].name);
            label.innerText = trees[i].name + " (" + trees[i].price + "€)";

            fieldset = document.getElementById("trees");
            fieldset.appendChild(input);
            fieldset.appendChild(label);
            fieldset.appendChild(document.createElement("br"));
        }

        //Ornaments
        for (let i: number = 0; i < ornaments.length; i++) {

            input = document.createElement("input");
            input.type = "checkbox";
            input.name = "Ornament" + i;
            input.value = ornaments[i].name;
            input.id = ornaments[i].name;

            label = document.createElement("label");
            label.setAttribute("for", ornaments[i].name);
            label.innerText = ornaments[i].name + " (" + ornaments[i].price + "€)";

            fieldset = document.getElementById("ornaments");
            let ornamentDiv: HTMLElement = document.createElement("div");

            ornamentDiv.appendChild(input);
            ornamentDiv.appendChild(label);
            fieldset.appendChild(ornamentDiv);
            fieldset.appendChild(document.createElement("br"));
        }

    } //close createInputs
} //close Namespace