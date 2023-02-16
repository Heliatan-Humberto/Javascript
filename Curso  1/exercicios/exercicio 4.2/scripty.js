function calcular() {
    var num = Number(document.querySelector('input#inumero').value)
    var res = document.querySelector('select#itabuada')
    var show  = document.querySelector('div#res')

    if(num < 0 ) {
        window.alert('Número invalido!')
    }
    else {
        show.style.display = `grid`
        let n  = 1
        res.innerHTML =  ``
       while (n <= 10) {
            let item = document.createElement('option')
            item.text = (`${num} x ${n} = ${num * n }`)
            res.appendChild(item)
            n++
       }
        
    }
}
function limpar () {
    res.style.display = `none`
}



