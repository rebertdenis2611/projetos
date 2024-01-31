const anterior = document.querySelector('#anterior')
const playPause = document.querySelector('#play-pause')
const proximo = document.querySelector('#proximo')
const audio = document.querySelector('#audio-capitulo')
const faixa = document.querySelector('.faixa')

let musicaTocando = 0
let count = 1

function iniciarMusica(){
    if(musicaTocando === 0){
        musicaTocando = 1
        audio.play()
        playPause.classList.add('bi-pause-circle-fill')
        playPause.classList.remove('bi-play-circle-fill')
    }else{
        musicaTocando = 0
        audio.pause()
        playPause.classList.add('bi-play-circle-fill')
        playPause.classList.remove('bi-pause-circle-fill')
    }
}

function proximaMusica(){
    if(count === 10) return
    count++
    audio.src = `books/dom-casmurro/${count}.mp3`
    faixa.innerHTML = `Faixa ${count}`
    audio.play()
    playPause.classList.remove('bi-play-circle-fill')
    playPause.classList.add('bi-pause-circle-fill')
}

function voltarMusica(){
    if(count === 1) return
    count--
    audio.src = `books/dom-casmurro/${count}.mp3`
    faixa.innerHTML = `Faixa ${count}`
    audio.play()
    playPause.classList.remove('bi-play-circle-fill')
    playPause.classList.add('bi-pause-circle-fill')
}



playPause.addEventListener('click', iniciarMusica)
proximo.addEventListener('click', proximaMusica)
anterior.addEventListener('click', voltarMusica)