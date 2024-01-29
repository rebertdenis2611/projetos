const aumentar = document.querySelector('.aumentar')
const diminuir = document.querySelector('.diminuir')
const monitor = document.querySelector('.monitor')
const qtdSoma = parseInt(document.querySelector('.qtd-number'))
let contagem = 0 + qtdSoma.value


aumentar.addEventListener('click', () =>{
    contagem += 1 
    monitor.innerHTML = contagem 
})

diminuir.addEventListener('click', () =>{
    if(contagem <= 0) return
    contagem -= 1 
    monitor.innerHTML = contagem
})