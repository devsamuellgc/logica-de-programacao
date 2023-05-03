// const titulo = document.querySelector('#titulo');
// titulo.innerHTML = 'Olá mundo!';

// if (!titulo) {
//     console.log(false)
// } else {
//     console.log(true)
// }

// const tipo = undefined

// if (titulo === String) {
//     console.log(true);
// } else if (titulo === Boolean) {
//     console.log(true);
// } else {
//     console.log('outro');
// }

/**
 * Tipos de dados:
 * Números -> Number float/integer
 * Verdadeiro ou falso -> Boolean
 * Caracteres (números, caracteres especiais, letras) -> String
 * Não existe -> Null
 * Não identificado -> Undefined
 */

/**
 * Identificar quanto a pessoa vai receber de mesada
 * Se a idade for menor que 15 e maior que 10 a mesada é igual 150
 * Se a idade for maior que 14 e menor que 20 a mesada é igual 300
 * No mas, não recebe.
 * < (menor) > (maior) == (igual) <= (Menor ou igual) >= (Maior ou igual)
 * || (ou) && (E)
 * 
 * Receber a idade (input)
 * Verificar a idade
 * Retornar o resultado/mensagem (output)
 */

const idade = prompt('Coloque sua idade');

if (idade > 10 && idade < 15) {
    console.log('Mesada igual a R$ 150,00')
} else if (idade > 14 && idade < 20) {
    console.log('Mesada igual a R$ 300,00')
} else if (idade < 11) {
    console.log('Muito novo pra receber mesada')
} else if (idade > 19) {
    console.log('Muito velho pra receber mesada')
}