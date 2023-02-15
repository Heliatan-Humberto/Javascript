function  calcular() {
    let start = Number(document.querySelector('input#iinicio').value)
    let end = Number(document.querySelector('input#ifim').value)
    let passo = Number(document.querySelector('input#ipasso').value)
    let res = document.querySelector('div#ires')
    
    if (passo == 0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Contagem...'
    } else {
        res.innerHTML = `contando: `
        if(start < end) {
            for(var c = start; c <= end; c += passo) {
                res.innerHTML += `${c} \u{1F449}`
            }
            }
        else {
            for(var c = start; c >= end; c -= passo) { 
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    } 
}
 