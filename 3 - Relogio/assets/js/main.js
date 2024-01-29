const mostraHora = document.querySelector('.hora')
const mostraMinutos = document.querySelector('.minutos')
const mostraSegundos = document.querySelector('.segundos')

function hora(){
    setInterval(() => {
        let data = new Date();
        mostraHora.innerHTML = `${formatarHora(data.getHours())} :`
        mostraMinutos.innerHTML = `${formatarHora(data.getMinutes())} :`
        mostraSegundos.innerHTML = `${formatarHora(data.getSeconds())}`
    }, 1000);
}

function formatarHora(time){
    return time < 10 ? '0'+time : time
}

hora()
