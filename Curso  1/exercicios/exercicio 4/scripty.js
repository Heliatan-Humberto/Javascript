function calcular()  {
    var num = Number(document.getElementById('inumero').value)
    let res = document.querySelector('select#itabuada')

    if (num < 0 ) {
        window.alert(`Número invalido.`)
    }
    else {
        let c = 1
        res.innerHTML = ``
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num * c}`
            res.appendChild(item)
            c++
        }
    }
}