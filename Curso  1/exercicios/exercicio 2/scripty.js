function resultado() {
    var data = new Date()
    var ano = data.getFullYear()
    var rano = document.getElementById('idade')
    var res = document.querySelector('div#res')
    var img = document.querySelector('img#foto')
    var idade = Number(rano.value)
    var s = ano - idade

    if (s < 0 || s > 130) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } 
    else {
        var rsex = document.getElementsByName('sexo')
        var genero  = ''
        if (rsex[0].checked) {
            genero = 'Homem'
            if (s >=0 && s < 10) {
                img.src = 'Fotos/foto-bebe-m.png'
            }
            else if (s < 21) {
                img.src  = 'Fotos/foto-jovem-m.png'
            }
            else if (s < 50) {
                img.src  = 'Fotos/foto-adulto-m.png'
            }
            else {
                img.src  = 'Fotos/foto-idoso-m.png'
            }
        }
        else  {
            genero = 'Mulher'
            if (s >=0 && s < 10) {
                img.src = 'Fotos/foto-bebe-f.png'
            }
            else if (s < 21) {
                img.src  = 'Fotos/foto-jovem-f.png'
            }
            else if (s < 50) {
                img.src  = 'Fotos/foto-adulto-f.png'
            }
            else {
                img.src  = 'Fotos/foto-idoso-f.png'
            }
        }
        foto.style.display = 'grid'
        campo.style.height = '45vh'
        res.style.textAlign = 'center'
        res.innerHTML= `Detectamos ${genero} com ${s} anos.`
    }
    
}