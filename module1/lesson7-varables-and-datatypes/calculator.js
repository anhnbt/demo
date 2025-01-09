const first = document.getElementById("first");
const second = document.getElementById("second");
const result = document.getElementById("result");

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function calculator(operator) {
    const a = parseInt(first.value);
    const b = parseInt(second.value);
    if (isNaN(a) || isNaN(b)) {
        result.innerHTML = "Vui lòng nhập dữ liệu đúng!";
        return;
    }
    switch (operator) {
        case "+":
            result.innerHTML = add(a, b);
            break;
        case "-":
            result.innerHTML = sub(a, b);
            break;
        case "*":
            result.innerHTML = mul(a, b);
            break;
        case "/":
            if (b === 0) {
                result.innerHTML = "Không chia được cho 0";
            } else {
                result.innerHTML = div(a, b);
            }
            break;
        default:
            result.innerHTML = "Sai!";
            break;
    }
}
