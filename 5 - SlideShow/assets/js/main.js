const slide = document.querySelector('.slide')
let imagem = [
    'assets/img/1.jpg',
    'assets/img/2.jpg'
]

let count = 0

function mudarImagem(){
    setTimeout(() =>{
        count++
        slide.src = imagem[count]
    },1000)
}

if(count !== 3){
    mudarImagem()
}

