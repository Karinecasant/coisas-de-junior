/*Você desenvolverá uma calculadora bem parecida com a anterior.
Ela tem a sugestão de mostrar o valor total do seu projeto.
Por exemplo:
Meu valor/hora: R$ 10,00
O projeto terá: 20 horas de desenvolvimento.
O valor apresentado deverá ser:*/

// Algoritmo:

// 1- Capturar os elementos html e guardar em variaveis
var valorHora = document.getElementById("valor-hora")
console.log(valorHora)

    var horasProjeto = document.getElementById("horas-projeto")
    console.log(horasProjeto)
    
        var resposta = document.getElementById("resposta")
        console.log(resposta)

// 2- ligar o clique do botao e mostrar no console que está funcionando
            function calcular(){
            console.log("o clique está funcionando")

// 3- O valor total do projeto refere-se à multiplicação do "valor-hora" * "horas-projeto" 
                var valorTotal = (valorHora.valueAsNumber * horasProjeto.valueAsNumber)
                console.log(valorTotal)

// 4- Usar toFixed para fixar o resultado com 2 casas / Uma 2ª opção seria coloca-lo no passo 3          
                    var fixado = valorTotal.toFixed(2)
                    console.log(fixado)

//5- Colocar o valor na tela e trocar resposta                
                        resposta.textContent = "R$ " + fixado
        }
