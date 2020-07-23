function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
        //var hora = 20
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos e ${segundos} segundos.`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'manha.png'
    } else if (hora > 12 && hora < 18) {
        //boa tarde
        img.src = 'tarde.png'
    } else {
        // boa noite
        img.src = 'noite.png'
    }
}