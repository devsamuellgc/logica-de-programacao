const inputValue = document.getElementById('titulo')
const valor1 = prompt('Valor 1')
const valor2 = prompt('Valor 2')

const multi = valor1 * valor2

inputValue.innerHTML = multi

console.log(multi)

const resto = valor1 % 2

if(resto === 0) {
    console.log(true)
} else {
    console.log(false)
}