function number(value) {
    document.calcul.result.value += value;
}

function remv() {
    document.calcul.result.value = "";
}

function BACKSPC() {
    var a = document.calcul.result.value;
    document.calcul.result.value = a.slice(0, -1);
}

function addOpenBracket() {
    let currentValue = document.calcul.result.value;
    if (currentValue === "" || /[\+\-\*\/\(]$/.test(currentValue)) {
        document.calcul.result.value += "(";
    } else {
        document.calcul.result.value += "*(";
    }
}

function addCloseBracket() {
    document.calcul.result.value += ")";
}

function pi() {
    document.calcul.result.value += Math.PI;
}

function e() {
    document.calcul.result.value += Math.E;
}

function sin() {
    let valueInDegrees = eval(document.calcul.result.value);
    document.calcul.result.value = Math.sin(toRadians(valueInDegrees));
}

function cos() {
    let valueInDegrees = eval(document.calcul.result.value);
    document.calcul.result.value = Math.cos(toRadians(valueInDegrees));
}

function tan() {
    let valueInDegrees = eval(document.calcul.result.value);
    document.calcul.result.value = Math.tan(toRadians(valueInDegrees));
}

function square() {
    document.calcul.result.value = Math.pow(eval(document.calcul.result.value), 2);
}

function cubed() {
    document.calcul.result.value = Math.pow(eval(document.calcul.result.value), 3);
}

function sqrt2() {
    document.calcul.result.value = Math.sqrt(eval(document.calcul.result.value));
}

function factorial(n) {
    if (n < 0) return "Error";
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function factorialButton() {
    try {
        let value = eval(document.calcul.result.value);
        document.calcul.result.value = factorial(value);
    } catch (error) {
        document.calcul.result.value = "Error";
    }
}

function log() {
    try {
        let value = eval(document.calcul.result.value);
        document.calcul.result.value = Math.log10(value);
    } catch (error) {
        document.calcul.result.value = "Error";
    }
}

function equal() {
    
    try {
        document.calcul.result.value = eval(document.calcul.result.value);
    } catch (error) {
        document.calcul.result.value = "Error";
    }
}

// Helper function to convert degrees to radians
function toRadians(degrees) {
    return degrees * Math.PI / 180;
}

