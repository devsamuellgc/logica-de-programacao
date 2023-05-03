// Exercícios repetições

const div = document.getElementById('exemplo')
const prods = document.getElementById('produtos')

/**
 * 1º Criação da tabuada
 * Receber um valor tipo number
 * Muitiplicar esse valor de 1 até 10
 * Retornar o resultado
 */

const num = 5

const tabuadaValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let valor of tabuadaValue) {
    console.log(`${valor} x ${num} = ${valor * num}`)
}

for (let i = 0; i < tabuadaValue.length; i++) {
    console.log(`${tabuadaValue[i]}: ${tabuadaValue[i] * num}`)
    div.innerHTML += `<p>${tabuadaValue[i]} x ${num} = ${tabuadaValue[i] * num}</p>`
}

/**
 * 2º Estoque total
 * Array de objetos (produtos)
 * Cada objeto deverá ter as seguintes propriedades: nome, qtd, preco
 * Retornar: Estoque total nome - R$ qtd * preco
 */

const produtos = [
    {
        "nome": "Teclado",
        "qtd": 25,
        "preco": 10
    },
    {
        "nome": "Mouse",
        "qtd": 10,
        "preco": 59.99
    },
    {
        "nome": "Placa de vídeo",
        "qtd": 3,
        "preco": 850
    },
    {
        "nome": "Headset",
        "qtd": 7,
        "preco": 250
    },
    {
        "nome": "Cadeira",
        "qtd": 6,
        "preco": 1150
    }
]

for (let produto of produtos) {
    let total = produto.preco * produto.qtd
    prods.innerHTML += `
        <p> 
            Estoque total ${produto.nome} - 
            ${total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} 
        </p>
    `
}