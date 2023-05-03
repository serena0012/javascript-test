function required() {
    const inputText = document.getElementById("text1");
    if (inputText.value.length === 0) {
        inputText.style.border = "2px solid red";
        alert("Error! You cannot enter an empty text");
        return false;
    } else {
        inputText.style.border = "4px solid orange";
        alert("Success! Your info has been saved");
        return true;
    }
}
