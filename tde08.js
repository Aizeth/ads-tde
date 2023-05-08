function pegaPares() {
    for(let i = 0; i <= 100; i++) {
        if(i%2 == 0) {
            console.log(i)
        }
    }
}

function somaArray(arr) {
    let soma = 0
    for(let i = 0; i < arr.length; i++) {
        soma += arr[i]
    }
    return soma
}

function removeNegativo(arr) {
    let vetor = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] >= 0) {
            vetor.push(arr[i])
        }
    }
    return vetor
}

function multiplicarArray(arr) {
    let novo = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] >= 0) {
            novo.push(arr[i] * 2)
        }
    }
    return novo
}

function somaPar(a, b) {
    return new Promise(function(resolve, reject) {
        let resultado = a + b
        if(resultado%2 === 0) {
            resolve('Valor é par')

        } else {
            reject('Valor é impar')
        }
    })
}

pegaPares()

const teste = [2, 4, 6, 8]
const resultado = somaArray(teste)
console.log("Soma dos número do array = " + resultado)

const negative =  [-1, 1, -2, 2, -3, 3]
const noNegative = removeNegativo(negative)
console.log(noNegative)

const normalArr = [1, 2, 3, 4, 5]
const multiplicado = multiplicarArray(normalArr)
console.log(multiplicado)

somaPar(1, 2)
.then(function(res) {
    console.log(res)

}).catch(function(err) {
    console.log(err)
})