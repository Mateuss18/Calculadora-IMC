var idade = document.getElementById("idade")
var altura = document.getElementById("altura")
var peso = document.getElementById("peso")
var resultadoImc = document.getElementById("resultadoImc")

document.getElementById("btnEnviar").addEventListener("click", validateForm);

function validateForm(){
    if(idade.value == '' || altura.value == '' || peso.value == ''){
        alert("Preencha todos os campos")
    }else{
        calcularIMC()
    }
}


function calcularIMC(){
    var Pessoa = [idade.value, altura.value, peso.value]

    var imc = Number( Pessoa[2] ) / ( Number( Pessoa[1] )/100 * Number( Pessoa[1] )/100 )

    resultadoImc.value = imc.toFixed(1)

    var resultado = ''
    if(imc < 18.5){
        resultado = 'Magreza'
    }
    else if(imc >= 18.5 && imc <= 24.9){
        resultado = 'Normal'
    }
    else if(imc >= 25 && imc <= 29){
        resultado = 'Sobrepeso'
    }
    else if(imc >= 30){
        resultado = 'Obesidade'
    }

    aviso.textContent = resultado
}
