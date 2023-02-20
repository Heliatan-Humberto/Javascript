
function adicionar() {
    var num = Number(document.querySelector('input#inumero').value)
    var res = document.querySelector('select#iresposta')

    if(num <=0 || num > 100) {
        window.alert('valor invalido!')
    }
    else {
        let item = document.createElement('option')
        item.text = (`Valor ${num} foi adicionado.`)
        res.appendChild(item)
    }
}



