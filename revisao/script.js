function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    var diaSem = document.querySelector('div#dia')
    var day = data.getUTCDay()
    

    msg.innerHTML = `Hora atual ${hora} horas, ${minuto} minutos e  ${segundo} segundos`
    
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background ='#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.png'
        document.body.style.background ='#b9846f'
    } else {
        img.src = 'noite.png'
        document.body.background='#515154'
    }

    switch (day) {
        case 0:
            diaSem.innerHTML = 'Segunda-feira'
            break
        case 1:
            diaSem.innerHTML = 'Terça-feira'
            break
        case 2:
            diaSem.innerHTML = 'Quarta-feira'
            break
        case 3:
            diaSem.innerHTML = 'Quinta-feira'
            break
        case 4:
            diaSem.innerHTML = 'Sexta-feira'
            break
        case 5:
            diaSem.innerHTML = 'Sabado'
            break
        case 6:
            diaSem.innerHTML = 'Domingo'
    }

}
