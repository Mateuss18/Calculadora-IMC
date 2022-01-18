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
