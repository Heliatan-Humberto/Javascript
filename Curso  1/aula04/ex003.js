var idade = 80
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log(`não Pode Votar`)
}
else if (idade < 18 || idade > 65) {
    console.log('Voto não obrigatorio')
}
else if (idade => 18) {
        console.log('Pode Votar') 
}
