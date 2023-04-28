// Get the result text input element
const resultInput = document.getElementById("result");

// Function to display numbers and operators on the result input
function display(value) {
    resultInput.value += value;
}

// Function to clear the last entry
function clearEntry() {
    resultInput.value = resultInput.value.slice(0, -1);
}

// Function to clear the entire input
function clr() {
    resultInput.value = "";
}

// Function to perform calculation based on the operator
/*function calculate(operator) {
    let result = resultInput.value;
    switch (operator) {
        case "=":
            resultInput.value = eval(result);
            break;
        case "%":
            resultInput.value = eval(result) / 100;
            break;
        default:
            resultInput.value += operator;
            break;
    }
}
*/
function calculate(operator) {
    let result = resultInput.value;
    if (operator === "=") {
        resultInput.value = eval(result);
    } else if (operator === "%") {
        resultInput.value = eval(result) / 100;
    } else {
        resultInput.value += operator;
    }
}

// Function to remove the last character from the input
function backspace() {
    resultInput.value = resultInput.value.slice(0, -1);
}