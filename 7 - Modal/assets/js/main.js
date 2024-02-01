const container = document.querySelector('.container');
const fechar = document.querySelector('.fechar')
const abrir = document.querySelector('.abrir')

function abriModal(){
    container.classList.add('abrir')
}

function fecharModal(){
    container.classList.remove('abrir')
}

abrir.addEventListener('click', abriModal)
fechar.addEventListener('click', fecharModal)