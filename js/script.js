const output = document.getElementById("output")
const inputElement = document.getElementById("input")
const selectOneElement = document.getElementById("selection_1")
const selectTwoElement = document.getElementById("selection_2")
const buttonConvert = document.getElementById("result")
const buttonReset = document.getElementById("reset")
const howto = document.getElementById("howto")
const error = document.getElementById("error")

function setFocusToTextBox() {
    document.getElementById("input").focus();
}

buttonConvert.addEventListener("click", () => {
    const input = parseFloat(inputElement.value)
    const selectOne = selectOneElement.value
    const selectTwo = selectTwoElement.value
    if (isNaN(input)) {
        document.getElementById("error").innerHTML = `* Nilai harus dalam bentuk angka!`
        return
    } else if (selectOne === selectTwo) {
        error.innerHTML = `* Satuan tidak boleh sama!`
        return
    }
    error.innerHTML = ``
    let result = temperatureConverter(input, selectOne, selectTwo).toFixed(2)
    output.value = result
    let formula = getConvertionFormula(input, selectOne, result, selectTwo)
    document.getElementById("howto").innerHTML = formula
})

buttonReset.addEventListener("click", () => {
    error.innerHTML = ``
    inputElement.value = 0
    output.value = `32.00`
    howto.innerHTML = `(0°C × 9/5) + 32 = 32.00°F`
    selectOneElement.options[0].selected = true
    selectTwoElement.options[1].selected = true
})

const temperatureConverter = (input, selectOne, selectTwo) => {
    let result

    switch (selectOne) {
        case "Celsius":
            switch (selectTwo) {
                case "Fahrenheit":
                    result = (input * 9 / 5) + 32
                    break;
            }

            break;

        case "Fahrenheit":
            switch (selectTwo) {
                case "Celsius":
                    result = (input - 32) * 5 / 9
                    break;
            }

            break;
    }

    return result
}

const getConvertionFormula = (input, selectOne, result, selectTwo) => {
    let formula = ""
    switch (selectOne) {
        case "Celsius":
            switch (selectTwo) {
                case "Fahrenheit":
                    formula = `(${input}°C × 9/5) + 32 = ${result}°F`
                    break;
            }
            break;

        case "Fahrenheit":
            switch (selectTwo) {
                case "Celsius":
                    formula = `(${input}°F - 32) × 5/9 = ${result}°C`
                    break;
            }
            break;
    }
    return formula
}