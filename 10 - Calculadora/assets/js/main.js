class calculadora{
    constructor(){

    }

    capturaValorBotao(valor){
        document.addEventListener('click', (e) =>{
            const el = e.target;
            if(el.classList.contains('btn-num')){
                this.inserirDisplay(el.innerHTML);
            }
            if(el.classList.contains('btn-igual')){
                this.inserirDisplay(eval(e.innerHTML))
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
        return display.value += valor;
    }
}

const calc = new calculadora();
calc.capturaValorBotao()