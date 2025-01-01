// CALCULATOR PROGRAM

const display = document.getElementById("display");

// Displays the value of the button on the display
function appendToDisplay(input) {
    display.value += input;
}

// Clears the display
function clearDisplay() {
    display.value = '';
}

// Backspace functionality
function backspace() {
    display.value = display.value.slice(0, -1);
}

// Calculates, with ability to catch an error
function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "ERROR :(";
    }
}