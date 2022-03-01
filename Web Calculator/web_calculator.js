function cal() {
    var num1 = Number(document.getElementById("number1").value)
    var num2 = Number(document.getElementById("number2").value)

    if (document.getElementById("addition").checked) {
        var num3 = num1 + num2
        return document.getElementById("results").innerHTML = num3
    }
    else if (document.getElementById("subtraction").checked) {
        var num3 = num1 - num2
        return document.getElementById("results").innerHTML = num3
    }
    else if (document.getElementById("multiplication").checked) {
        var num3 = num1 * num2
        return document.getElementById("results").innerHTML = num3
    }
    else if (document.getElementById("division").checked) {
        var num3 = num1 / num2
        return document.getElementById("results").innerHTML = num3
    }
    else if (document.getElementById("exponention").checked) {
        var num3 = num1 ** num2
        return document.getElementById("results").innerHTML = num3
    }
    else {
        return document.getElementById("results").innerHTML = "CHECK YOUR INPUT"
    }
}

