//Pegando os elementos e transformando em variaveis
var idade = document.getElementById("idade")
var altura = document.getElementById("altura")
var peso = document.getElementById("peso")
var resultadoImc = document.getElementById("resultadoImc")

document.getElementById("btnEnviar").addEventListener("click", validateForm);
document.getElementById("btnLimpar").addEventListener("click", limparForm);

//Validação do formulario
function validateForm(){
    if(idade.value == '' || altura.value == '' || peso.value == ''){
        alert("Preencha todos os campos")
    }else{
        calcularIMC()
    }
}

//Função para fazer o calculo do IMC
function calcularIMC(){
    var Pessoa = [idade.value, altura.value, peso.value]

    var imc = Number( Pessoa[2] ) / ( Number( Pessoa[1] )/100 * Number( Pessoa[1] )/100 )

    resultadoImc.value = imc.toFixed(1)

    function situacaoPeso(imc){
        let situacao = ''
        if(imc < 18.5){
            situacao = 'Magreza'
        }
        else if(imc >= 18.5 && imc <= 24.9){
            situacao = 'Normal'
        }
        else if(imc >= 25 && imc <= 29){
            situacao = 'Sobrepeso'
        }
        else if(imc >= 30){
            situacao = 'Obesidade'
        }

        return situacao
    }

   let situacaoDoPeso = situacaoPeso(imc)
    aviso.textContent = situacaoDoPeso
}

//Função para limpar a area de situacao do peso
function limparForm(){
    aviso.textContent = ''
}
