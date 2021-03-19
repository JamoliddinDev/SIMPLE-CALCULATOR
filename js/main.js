let button = document.querySelector('#btn')
let number1 = document.querySelector('#num1')
let number2 = document.querySelector('#num2')
let heading = document.querySelector('h1')
let select = document.querySelector('select')

button.addEventListener('click', function(event) {
    console.log(select.value)

    if (select.value === "+") {
        let sum = Number(number1.value) + Number(number2.value)
        return heading.textContent = sum
    }

    else if (select.value === "-") {
        let sum = Number(number1.value) - Number(number2.value)
        return heading.textContent = sum
    }
    else if (select.value === "*") {
        let sum = Number(number1.value) * Number(number2.value)
        return heading.textContent = sum
    }
    else if (select.value === "/") {
        let sum = Number(number1.value) / Number(number2.value)
        return heading.textContent = sum
    }
    
})

