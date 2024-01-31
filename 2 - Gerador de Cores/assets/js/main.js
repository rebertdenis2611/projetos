const botao = document.querySelector('.button');

botao.addEventListener('click', e =>{
    trocaCor()
});

function rand(x=1, y=255){
    return Math.floor(Math.random() * (x + y) - x) 
}

function trocaCor(){
    const fundo = document.querySelector('.fundo-cor')
    fundo.style.backgroundColor = `rgb(${rand()}, ${rand()}, ${rand()})`
}

