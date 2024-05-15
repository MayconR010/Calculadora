//entrada do usuário.
let num1 = prompt('digite o número : ');
let convert1 = parseFloat(num1);

let operador = prompt ('o operador da conta: ');

let num2 = prompt('digite o outro número da conta: ');
let convert2 = parseFloat(num2);
let resultado;

//conversão dos operadores que estavam em strings.
switch(operador) {
    case '+':
        resultado = convert1 + convert2;
    break;
    case '-':
        resultado = convert1 - convert2;
    break;
    case '*':
        resultado = convert1 * convert2;
    break;
    case '/':
        resultado = convert1 / convert2;
    break;
    default:
         console.log('operação impossivel !');
}

console.log(`a operação dos números ${num1} ${operador} ${num2} equivale a ${resultado}.`);