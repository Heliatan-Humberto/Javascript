
let n1 = []

function adicionar() {
    var num = Number(document.querySelector('input#inumero').value)
    var res = document.querySelector('select#iresposta')
    var show = document.querySelector('div#res')
    
    if(num <=0 || num > 100) {
        window.alert('valor invalido!')
    }
    else {
        show.style.display = `block`
        n1.push(num)
        let item = document.createElement('option')
        item.text = (`Valor ${num} foi adicionado.`)
        res.appendChild(item)
        
    }
}


function finalizar() {
    var resposta = document.querySelector('div#res')

    let n = n1
    n.sort()

    let totalcadastrado = n.length
    let menor = n[0]
    let maior = n[totalcadastrado - 1]
    let total = 0

    for (let soma = 0; soma < n1.length; soma++ ) {
        total += n1[soma] 
    }
    
    let media = total / totalcadastrado


    const paragrafo = document.createElement('p')
    const texto = document.createTextNode(`Ao todo temos ${totalcadastrado} números cadastrados.`)
    const texto2 = document.createTextNode(`O menor número é ${menor}`)
    const texto3 = document.createTextNode(`O maior número é ${maior}`)
    const texto4 = document.createTextNode(`A soma dos Valores é igual a ${total}`)
    const texto5 = document.createTextNode(`A média dos números é ${media}`)
    
    paragrafo.appendChild(texto) 
    paragrafo.appendChild(texto2)
    paragrafo.appendChild(texto3)
    paragrafo.appendChild(texto4)
    paragrafo.appendChild(texto5)
    
    resposta.innerHTML += paragrafo.innerHTML            
    
}

function limpar() {
    
}