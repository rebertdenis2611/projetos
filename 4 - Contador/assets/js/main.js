const aumentar = document.querySelector('.aumentar')
const diminuir = document.querySelector('.diminuir')
const monitor = document.querySelector('.monitor')
const aumentarDiminuir = document.querySelector('.aumentar-ou-diminuir')
let contagem = 0



aumentar.addEventListener('click', () =>{
    contagem += 1
    monitor.innerHTML = contagem
    aumentarDiminuir.innerHTML = 'AUMENTANDO!!'
    aumentarDiminuir.style.color = 'BLACK'

})

diminuir.addEventListener('click', () =>{
    if(contagem <= 0) return
    contagem -= 1 
    monitor.innerHTML = contagem
    
    if(contagem === 0){
        aumentarDiminuir.innerHTML = 'ZEROU!!'
        aumentarDiminuir.style.color = 'BLACK'
    }else{
        aumentarDiminuir.innerHTML = 'DIMINUINDO!!'
        aumentarDiminuir.style.color = 'RED'
    }
    
})