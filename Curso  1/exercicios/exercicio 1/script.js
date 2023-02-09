
function carregar() {

var time = document.querySelector('div#hora')
var img = document.querySelector('img#manha')
var data = new Date()
var horas = data.getHours()
var min  = data.getMinutes()
var fundo = document.querySelector('body#fundo')
var color1 = document.querySelector('header#manhacolor')
var color2 = document.querySelector('footer#manhacolor')

hora.innerHTML = `Agora são ${horas} horas e ${min} minutos.`
if (horas >= 0 && horas < 12) {
    img.src = 'imagens/manhã.jpg'
    fundo.style.background = '#e6e0d4'
    color1.style.color = 'black'
    color2.style.color = 'black'
}
else if (horas >= 12 && horas < 18) {
    img.src = 'imagens/tarde.jpg' 
    fundo.style.background  = '#1e9dba'
}

else if (horas > 23 ) {
    alert('Horário invalido')
}
else {
    img.src = 'imagens/noite.jpg'
    fundo.style.background = '#524064'
}
}