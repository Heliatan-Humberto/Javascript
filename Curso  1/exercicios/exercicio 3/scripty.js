function  calcular() {
    var start = Number(document.querySelector('input#iinicio').value)
    var end = Number(document.querySelector('input#ifim').value)
    var res = document.querySelector('div#ires')
    var conta  = start + 1

    if (start < end) {
        start++

        
        res.innerHTML = `${start}`
    } else {
        res.innerHTML = `fim`
    }

    
}