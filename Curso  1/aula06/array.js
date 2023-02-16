var num = [0, 1, 2, 3 ]

num[4] = 4   // adiciona uma posição com valor.

num.push(5)  // adiciona um valor na posição final.

//    num.length == comprimento do array.
//    num.sort() == ordem crescente.
//    num.indexOf() == pesquisar a posição do valor dentro do vetor.

console.log(num)
console.log(`o vetor possue ${num.length} posições.`)
console.log(`o terceiro valor é ${num[2]}`)
console.log(`o primeiro valor é ${num[0]}`)

for (let pos = 0 ; pos < num.length; pos++ ) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

// igual mais diferente simplify:

for(let pos in num)  {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}