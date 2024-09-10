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
//FUNÇÃO DAS OPERAÇÕES
function soma(valor1, valor2) {
    return `${valor1} + ${valor2} = ${valor1 + valor2}`
}

function subtracao(valor1, valor2) {
    return `${valor1} - ${valor2} = ${valor1 - valor2}`
}

function multiplicação(valor1, valor2) {
    return `${valor1} x ${valor2} = ${valor1 * valor2}`
}

function divisao(valor1, valor2) {
    if (valor2 === 0) {
        return "Operação inválida! Não é possível dividir por zero.";
    }
    return `${valor1} / ${valor2} = ${(valor1 / valor2).toFixed(2)}`;
}

function potenciação(valor1, valor2) {
    return `${valor1} exp ${valor2} = ${valor1 ** valor2}`
}

function radiciação(valor1, valor2) {
    let operacao = "";
    if (valor2 == 2) {
        operacao = "quadrada";
    } else if (valor2 == 3) {
        operacao = "cúbica";
    } else {
        operacao = valor2.toString();
    }
    return `A raiz ${operacao} de ${valor1} = ${valor1 ** (1 / valor2)}`
} 
 
//FUNÇÃO DO MENU
function calculadora (){
    let texto_menu = `Qual operação você deseja?:
                    1 - soma
                    2 - subtração
                    3 - multiplicação
                    4 - divisão
                    5 - potenciação
                    6 - radiciação`;

    let operação_informada = parseInt(prompt(texto_menu));
    let valor1 = parseFloat(prompt("Informe o primeiro número"));
    let valor2 = parseFloat(prompt("Informe o segundo número"));
    let resultado = "";

    switch (operação_informada) {
        case 1:
            resultado = soma(valor1, valor2);
            break;
        case 2:
            resultado = subtracao(valor1, valor2);
            break;
        case 3:
            resultado = multiplicação(valor1, valor2);
            break;
        case 4:
            resultado = divisao(valor1, valor2);
            break;
        case 5:
            resultado = potenciação(valor1, valor2);
            break;
        case 6:
            resultado = radiciação(valor1, valor2);
            break;
        default:
            resultado = "Operação inválida";
            break;
    }

    alert(resultado);
}
calculadora();