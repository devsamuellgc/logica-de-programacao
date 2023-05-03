/**
 * Repetições com FOR
 * 
 * For - Iterações sobre o índice
 * 
 * For...in - Iteração sobre os valores de um objeto
 * 
 * For...of - Iteração sobre os valores de diversos tipos de dados
 */

// For

const div = document.getElementById('exemplo')

const objeto = {
    "nome": "Samuel",
    "idade": 25,
    "profissao": "Professor"
}

const nomes = ['Samuel', 'Bernardo', 'Moana']

const usuarios = [objeto, objeto, objeto, objeto]

const arrayFor = [1, 2, 3, 4, 5, 6]
//                0, 1, 2, 3, 4, 5

for (let i = 0; i < usuarios.length; i++) {
    console.log(`valor: ${usuarios[i].profissao}`, `posição: ${i}`)
}

for (let prop in objeto) {
    console.log(`${prop}: ${objeto[prop]}`)
}
console.log(objeto['nome'], objeto['idade'], objeto['profissao'])

for (let nome of nomes) {
    console.log(nome)
}

for (let usuario of usuarios) {
    console.log(usuario.nome, usuario.idade, usuario.profissao)
}