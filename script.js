let formulario = document.querySelector('form')

let inNome = document.querySelector('#nome')
let inIdade = document.querySelector('#idade')
let inAltura = document.querySelector('#altura')
let inPeso = document.querySelector('#peso')
let inImc = document.querySelector('#resultadoImc')

let aviso = document.querySelector('#aviso')
let dados = document.querySelectorAll('.pessoa')

let btnEnviar = document.querySelector('#btnEnviar')
let btnLimpar = document.querySelector('#btnLimpar')

btnEnviar.addEventListener('click', function (e) {
    //Pegando os values dos inputs
    const nome = inNome.value
    const idade = inIdade.value
    const altura = inAltura.value
    const peso = inPeso.value
    const imc = (peso / (altura * altura)).toFixed(1)

    console.log(nome)
    console.log(idade)
    console.log(altura)
    console.log(peso)
    console.log(imc)

    inImc.value = imc
    let sit = situracaoDoPeso(imc)
    aviso.textContent = sit

    let pessoa = {
        nome : nome,
        idade : idade,
        altura : altura,
        peso : peso,
        imc : imc,
        sit : sit
    }

    console.log(pessoa)
    dados[1].textContent = pessoa.nome
    dados[2].textContent = pessoa.idade + ' anos'
    dados[3].textContent = pessoa.altura + ' Kg'
    dados[4].textContent = pessoa.peso + ' m'
    dados[5].textContent = pessoa.imc + ' ' + pessoa.sit

    e.preventDefault()
})

// Função situação do peso
function situracaoDoPeso(imc){
    let situacao = ''
    if(imc < 18.5){
        situcao = 'Magreza'
    } else if (imc >= 18.5 && imc <= 24.9){
        situacao = 'Normal'
    } else if (imc >= 25 && imc <= 29.9){
        situacao = 'Sobrepeso'
    } else if (imc >= 30 && imc <= 34.9){
        situacao = 'Obesidade I'
    } else if (imc >= 35 && imc <= 39.9){
        situacao = 'Obesidade II'
    } else if (imc >= 40){
        situacao = 'Obesidade III'
    }else{
        situacao = 'Informe corretamente'
    }
    return situacao
}
