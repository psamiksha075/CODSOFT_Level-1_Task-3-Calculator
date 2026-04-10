let display = document.getElementById("display");
let historyList = document.getElementById("historyList");

// Append value
function append(val) {
    display.value += val;
}

// Clear
function clearDisplay() {
    display.value = "";
}

// Delete
function del() {
    display.value = display.value.slice(0, -1);
}

// Calculate
function calculate() {
    try {
        let result = eval(display.value);
        addHistory(display.value + " = " + result);
        display.value = result;
    } catch {
        display.value = "Error";
    }
}

// Scientific functions
function func(type) {
    let val = parseFloat(display.value);

    if (isNaN(val)) return;

    if (type === "sin") display.value = Math.sin(val);
    if (type === "cos") display.value = Math.cos(val);
    if (type === "tan") display.value = Math.tan(val);
    if (type === "log") display.value = Math.log10(val);
    if (type === "sqrt") display.value = Math.sqrt(val);
}

// Factorial
function factorial() {
    let n = parseInt(display.value);
    if (isNaN(n) || n < 0) {
        display.value = "Error";
        return;
    }

    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }

    display.value = fact;
}

// History
function addHistory(text) {
    let li = document.createElement("li");
    li.textContent = text;
    historyList.prepend(li);
}

// Theme toggle
function toggleTheme() {
    document.body.classList.toggle("light");
}