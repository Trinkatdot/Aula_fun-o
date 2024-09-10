/*Refatore o Exercício 10 da calculadora simples e faça uma 
exercicio10_v2.js onde terá uma função para cada item do menu e o caso 
do denominador não ser zero.
1. Soma somar(num1 , num2)
2. Subtração subtrair(num1 , num2)
3. Multiplicação multiplicar(num1 , num2)
4. Divisão dividir(num, den) e verificarDenominador(num2)
5. Potenciação calcularPotencia(base, expoente)
6. Radiciação calcularRaiz(numero, raiz)
*/

//ENTRADA DE DADOS
function calculadora() {
    let texto_menu = `Qual operação você deseja?:
                    1 - soma
                    2 - subtração
                    3 - multiplicação
                    4 - divisão
                    5 - potenciação
                    6 - radiciação`;

    let operacao_informada = parseInt(prompt(texto_menu));
    let valor1 = parseFloat(prompt("Informe o primeiro número"));
    let valor2 = parseFloat(prompt("Informe o segundo número"));

    let resultado = operacao (operacao_informada, valor1, valor2);
    alert(resultado);
}
calculadora();

//FUNÇÃO PARA OPERAÇÕES 
function operacao (tipo, valor1, valor2){
    switch (tipo){
        case 1: 
            return `${valor1} + ${valor2} = ${valor1 + valor2}`;
        case 2:
            return `${valor1} - ${valor2} = ${valor1 - valor2}`;
        case 3: 
            return `${valor1} x ${valor2} = ${valor1 * valor2}`;
        case 4:
            return valor2 === 0 ? "Operação inválida! Não é possível dividir por zero." : `${valor1} / ${valor2} = ${(valor1 / valor2).toFixed(2)}`;
        case 5:
            return `${valor1} exp ${valor2} = ${valor1 ** valor2}`;
        case 6:
            let tipoRaiz = valor2 == 2 ? "quadrada" : valor2 == 3 ? "cúbica" : valor2;
            return `A raiz ${tipoRaiz} de ${valor1} = ${valor1 ** (1 / valor2)}`;
        default:
            return "Operação inválida";
    }
}