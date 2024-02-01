const gerar = document.querySelector('.gerar-pdf')
const texto = 'Isso é um teste de PDF'


function gerarPdf(){
    var doc = new jsPDF()
    doc.text(texto, 10, 10)
    doc.save('a4.pdf')
}

gerar.addEventListener('click', gerarPdf)

//revisar o que o código está fazendo.
