const formulario = document.querySelector('form')

const inNome = document.querySelector('#nome')
const inIdade = document.querySelector('#idade')
const inAltura = document.querySelector('#altura')
const inPeso = document.querySelector('#peso')
const inImc = document.querySelector('#reseutadoImc')

let dados = document.querySelectorAll('.pessoa')

const btnEviar = document.querySelector('#btnEnviar')
const btnLimpar = document.querySelector('#btnLimpar')

btnEnviar.addEventListener('click', function(e){
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
    const sit = situracaoDoPeso(imc)
    aviso.textContent = sit
})