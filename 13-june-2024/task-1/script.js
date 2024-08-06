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