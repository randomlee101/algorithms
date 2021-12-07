sum = (a, b) => {
    return a + b;
}

subtraction = (a, b) => {
    return a - b;
}

multiplication = (a, b) => {
    return a * b;
}

division = (a, b) => {
    return a / b;
}

operation = (a, b, sign) => {
    result = ""
    switch (sign) {
        case "+":
            result += sum(a, b)
            break;
        case "-":
            result += subtraction(a, b)
            break;
        case "*":
            result += multiplication(a, b)
            break;
        case "/":
            result += division(a, b)
            break;
        default:
            result += "No valid operation\n"
    }

    return result;
}

console.log(operation("1","2","-"))