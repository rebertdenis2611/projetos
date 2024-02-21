const filterInput = document.querySelector('header input')
const cards = document.querySelectorAll('.cards li')

filterInput.addEventListener('input', filterCards)

function filterCards(){
    if(filterInput.value != ''){
        for(let card of cards){
            let title = card.querySelector('h2')
            title = title.textContent.toLowerCase()
            console.log(title)
            if(!title.includes(filterInput.value)){
                card.style.display = 'none'
            }else{
                card.style.display = 'block'
            }
        }
    }else{
        for(let card of cards){
            card.style.display = 'block'
        }
    }
    
}