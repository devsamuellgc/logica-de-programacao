// 1ª
const numero = 2
const resto = numero % 2

if (resto === 0) {
    console.log('Par')
} else {
    console.log('Impar')
}

//2ª
const idade = 18
if (idade >= 16) {
    console.log('Pode votar')
} else {
    console.log('Não pode votar')
}

//3ª
if (numero > 0) {
    console.log('Positivo')
} else if (numero < 0) {
    console.log('Negativo')
} else {
    console.log('Zero')
}

//4ª
const habilitacao = false
if (idade >= 18 && habilitacao == 'sim') {
    console.log('Pode dirigir')
} else if (idade < 18) {
    console.log('Não pode dirigir')
} else if (idade >= 18 && !habilitacao) {
    console.log('Necessário uma habilitação')
}

//5ª
if (numero === 2) {
    console.log('É número primo')
} else if (numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0) {
    console.log('Número não primo')
} else if (numero % numero === 0 && numero % 1 === 0) {
    console.log('É número primo')
}

//6ª
if (numero % 3 === 0 || numero % 5 === 0) {
    console.log('É múltiplo por 3 ou por 5')
} else {
    console.log('Não é múltiplo de 3 e de 5')
}

//7ª
const sexo = 'm'

if (idade >= 60 && sexo === 'f') {
    console.log('Mulher pode aposentar')
} else if (idade >= 65 && sexo === 'm') {
    console.log('Homem pode aposentar')
} else {
    console.log('Não pode aposentar')
}

//8ª
const ano = 2016

if (ano % 400 === 0 || ano % 4 === 0 && ano % 100 != 0) {
    console.log('Ano bissexto')
} else {
    console.log('Não é ano bissexto')
}

//9ª
const x = 10
const y = 5
const z = 3

if (x === y && y === z) {
    console.log('Triângulo Equilátero')
} else if (x === y || x === z || y === z) {
    console.log('Triângulo Isósceles')
} else {
    console.log('Triângulo escaleno')
}

//10ª
nota = 5

if (nota >= 6) {
    console.log('Aprovado')
} else {
    console.log('Reprovado')
}