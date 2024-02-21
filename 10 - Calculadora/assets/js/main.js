let display = document.querySelector('.display');

class calculadora{
    constructor(display){
        this.display = display;
    }

    iniciar(){
        this.capturaValorBotao()
        this.pegarEnter()
    }
    capturaValorBotao(){
        document.addEventListener('click', (e) =>{
            const el = e.target;
            display.focus()
            if(el.classList.contains('btn-num')){
                display.value += el.innerHTML
                display.focus()
            }
            if(el.classList.contains('btn-igual')){
                if(el.classList.contains('btn-igual')){
                    if(display.value === ''){
                        return
                    }else{
                        display.value = this.fazerCalculo()
                    }
                }
            }
            if(el.classList.contains('btn-clear')){
                display.value = ''
            }
            if(el.classList.contains('btn-apagar')){
                display.value = display.value.slice(0, -1)
            }
        })
    }

    pegarEnter(){
        document.addEventListener('keypress', (e) =>{
            const keyName = e.key
            const el = e.target
            //ajustar para pegar das funções, ficará mais pratico.
        })
    }

    fazerCalculo(){
        let valor = display.value
        const calc = eval(valor);
        return calc;
    }

}

const calc = new calculadora(display);
calc.iniciar()
