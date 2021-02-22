//Atividade: Criar calculadora de salario total 

//salario
var salario = document.getElementById("ganho-mes")
console.log(salario)

//horasDia
    var horasDia = document.getElementById("horas-dia")
    console.log(horasDia)

//resposta
        var resposta = document.getElementById("resposta")
        console.log(resposta)
        /*pegar resultado
        mostrar que está ligado no console*/

//testar clique
            function calcularValorHora (){
            console.log("o clique está funcionando")

//calcular total horas
                var totalDeHoras = horasDia.valueAsNumber *22
                console.log(totalDeHoras)
                /*pegar qtidade de horas por dia x qtidade dias mes
                calcula o valor total de horas no mes de acordo com o que é digitado no input de quantidade de horas/dia, 
                considerando que sao 22 dias uteis no mes e guarda na variavel totalDeHoras*/

//calcular divisao salario pelo total de horas e guardar em uma variavel
                    var valorHora = salario.valueAsNumber/totalDeHoras
                    console.log(valorHora)
                    /*calcula resultado final e converte para duas casas
                    toFixed = passar numeros grandes para quantidade que quero (2 casas)*/

//mostra resultado de valorHora com 2 casas decimais na tela                   
                        var fixado = valorHora.toFixed(2)
                        console.log(fixado)

//colocar valor na tela com valor fixado concatenando "R$"
                            resposta.textContent = "R$" + fixado
                            /*trocar resultado obtido na tela*/
}
