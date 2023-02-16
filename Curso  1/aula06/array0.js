var num = [0, 1, 2, 3 ]

num[4] = 4

num.push(5)

let pos = num.indexOf(5) 

if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
}
else {
    console.log(`O valor está na posição ${pos}`)
}