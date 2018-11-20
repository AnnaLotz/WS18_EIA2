var A4;
(function (A4) {
    document.addEventListener("DOMContentLoaded", init);
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
    function createInputs() {
        let fieldset;
        //Trees
        for (let i = 0; i < A4.trees.length; i++) {
            input = document.createElement("input");
            input.type = "radio";
            input.name = "TreeGroup";
            input.value = A4.trees[i].name;
            input.id = A4.trees[i].name;
            label = document.createElement("label");
            label.setAttribute("for", A4.trees[i].name);
            label.innerText = A4.trees[i].name + " (" + A4.trees[i].price + "€)";
            fieldset = document.getElementById("trees");
            fieldset.appendChild(input);
            fieldset.appendChild(label);
            fieldset.appendChild(document.createElement("br"));
        }
        //Ornaments
        for (let i = 0; i < A4.ornaments.length; i++) {
            input = document.createElement("input");
            input.type = "checkbox";
            input.name = "Ornament" + i;
            input.value = A4.ornaments[i].name;
            input.id = A4.ornaments[i].name;
            label = document.createElement("label");
            label.setAttribute("for", A4.ornaments[i].name);
            label.innerText = A4.ornaments[i].name + " (" + A4.ornaments[i].price + "€)";
            fieldset = document.getElementById("ornaments");
            let ornamentDiv = document.createElement("div");
            ornamentDiv.appendChild(input);
            ornamentDiv.appendChild(label);
            fieldset.appendChild(ornamentDiv);
            fieldset.appendChild(document.createElement("br"));
        }
    } //close createInputs
})(A4 || (A4 = {})); //close Namespace
//# sourceMappingURL=index.js.map