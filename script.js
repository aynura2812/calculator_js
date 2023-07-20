let inputFirst = document.querySelector('.calculator-input-first')
let inputSecond = document.querySelector('.calculator-input-second')

//Кнопки

let buttonPlus = document.querySelector('.calculator-plus')
let buttonMinus = document.querySelector('.calculator-minus')
let buttonMultiply = document.querySelector('.calculator-multiply')
let buttonDivide = document.querySelector('.calculator-divide')
let buttonEquals = document.querySelector('.calculator-equals')

// Значения
let valueOne = null;
let valueTwo = null;
let result = null;

buttonPlus.addEventListener('click', function() {
    valueOne = inputFirst.value
    valueTwo = inputSecond.value

    result = Number(valueOne) + Number(valueTwo)

})

buttonMinus.addEventListener('click', function() {
    valueOne = inputFirst.value
    valueTwo = inputSecond.value

    result = Number(valueOne) - Number(valueTwo)

})

buttonMultiply.addEventListener('click', function() {
    valueOne = inputFirst.value
    valueTwo = inputSecond.value

    result = Number(valueOne) * Number(valueTwo)

})

buttonDivide.addEventListener('click', function() {
    valueOne = inputFirst.value
    valueTwo = inputSecond.value

    result = Number(valueOne) / Number(valueTwo)

})

buttonEquals.addEventListener('click', function() {
    alert('Результат:' + result)
    inputFirst.value = " "
    inputSecond.value = " "
})

