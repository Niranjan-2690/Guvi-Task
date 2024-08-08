function appendToDisplay(nums) {
    document.getElementById("display").value += nums;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteValue() {
    document.getElementById("display").value = display.value.slice(0, -1)
}

function calculate() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (error) {
        alert("Invalid input");
        document.getElementById("display").value = "";
    }
}

function percentage(){
    document.getElementById('display').value = (display.value)/100
}



// Keyboard event listener
document.addEventListener('keydown', function(event) {
    const display = document.getElementById("display");
    
    // Check if the key pressed is a number (0-9) or an operator (+, -, *, /, %)
    if ((event.key >= '0' && event.key <= '9') || 
        ['+', '-', '*', '/', '%'].includes(event.key)) {
        appendToDisplay(event.key);
    }
    
    // Check for 'Enter' key to calculate
    if (event.key === 'Enter') {
        calculate();
    }

    // Check for 'Backspace' to delete the last character
    if (event.key === 'Backspace') {
        deleteValue();
    }

    // Check for 'Escape' to clear the display
    if (event.key === 'Escape') {
        clearDisplay();
    }
});