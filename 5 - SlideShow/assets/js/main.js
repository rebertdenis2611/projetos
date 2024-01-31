const slide = document.querySelector('.slide')

let imagem = [
    'assets/img/1.jpg',
    'assets/img/2.jpg',
    'assets/img/3.jpg'
]

count = 0
tempo = 2000

function mudarImagem(){
    if(count < 2){
        count++
    }else{
        count = 0
    }
    
    slide.src = imagem[count]
        
    setTimeout(mudarImagem, tempo)
}

mudarImagem()