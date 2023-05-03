/**
 * Lógica - Local maior 18 anos
 * Variável IDADE é um número que é preciso receber ou definir
 * Se a idade for igual ou maior que 18 pode entrar
 * Se a idade for menor que 18 não pode entrar
 */

// const idade = prompt('Idade')

// if (idade >= 60) {
//     console.log('Não aguenta mais entrar')
// } else if (idade >= 18) {
//     console.log('Pode entrar')
// } else {
//     console.log('Não pode entrar')
// }

const nota1 = prompt('Nota 1')
const nota2 = prompt('Nota 2')
const media = (parseFloat(nota1) + parseFloat(nota2)) / 2

if (media === 10) {
    console.log('Aprovado com Distinção')
} else if (media >= 7) {
    console.log('Aprovado')
} else {
    console.log('Reprovado')
}