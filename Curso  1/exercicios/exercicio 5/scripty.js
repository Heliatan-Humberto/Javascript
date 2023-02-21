
let n1 = []
n1.sort()

function adicionar() {
    var num = Number(document.querySelector('input#inumero').value)
    var res = document.querySelector('select#iresposta')
    var show = document.querySelector('select#iresposta')
    var resposta = document.querySelector('div#res')
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
    resposta.innerHTML = ''
}

function finalizar() {
    var resposta = document.querySelector('div#res')
    resposta.innerHTML  = ''
    
    let n = n1
    n.sort()

    if (n == 0) {
        window.alert('Defina um valor')
    }
    else {

    let totalcadastrado = n.length
    let menor = n[0]
    let maior = n[totalcadastrado -1]
    let total = 0

    for (let soma = 0; soma < n1.length; soma++ ) {
        total += n1[soma] 
    }
    
    let media = total / totalcadastrado

    resposta.innerHTML += `<p> O total de valores cadastrado é ${totalcadastrado} </p>`
    resposta.innerHTML += `<p> O menor valor é ${menor} </p>`
    resposta.innerHTML += `<p> O maior valor é ${maior} </p>`         
    resposta.innerHTML += `<p> A soma dos valores é ${total} </p>`
    resposta.innerHTML += `<p> A média dos valores é ${media} </p>`
}
}

