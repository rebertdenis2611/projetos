class calculadora{
    constructor(){

    }

    capturaValorBotao(){
        document.addEventListener('click', (e) =>{
            const el = e.target;
            if(el.classList.contains('btn-num')){
                this.inserirDisplay(el.innerHTML);
            }
            if(el.classList.contains('btn-igual')){
                console.log(this.inserirDisplay())
            }
        })
    }

    fazerCalculo(valor){
        const calc = eval(valor);
        console.log(calc);
        return calc;
    }

    inserirDisplay(valor){
        const display = document.querySelector('.display');
        display.value += valor;
        return(eval(display.value))
    }
}

const calc = new calculadora();
calc.capturaValorBotao()