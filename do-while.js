const exemplo = document.getElementById('exemplo')
let resultado = ''
let i = [
    {
        "nome": "Samuel",
        "email": "samuellgc@hotmail.com"
    },
    {
        "nome": "Samuel",
        "email": "samuellgc@hotmail.com"
    },
    {
        "nome": "Samuel",
        "email": "samuellgc@hotmail.com"
    },
    {
        "nome": "Samuel",
        "email": "samuellgc@hotmail.com"
    },
    {
        "nome": "Samuel",
        "email": "samuellgc@hotmail.com"
    }
]
for (elemento of i) {
    exemplo.innerHTML += `
        <p>${elemento.nome}</p>
        <p>${elemento.email}</p>
    `    
}

// for (x = 0; x <= 10; x++) {
//     if (x % 2 == 0) {
//         console.log(x, 'par')
//     } else {
//         console.log(x)
//     }
// }

// for (x = 0; x <= 10; x++) {
//     if (x % 2 == 0) {
//         console.log(x)
//     }
// }

for (x = 10; x <= 10 && x >= 0; x--) {
    console.log(x)
}
