const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o primeiro número: ', (num1) => {
    rl.question('Digite o segundo número: ', (num2) => {
        rl.question('Digite a operação desejada (+, -, *, /): ', (op) => {
            const number1 = parseFloat(num1);
            const number2 = parseFloat(num2);
            let result;

            switch (op) {
                case '+':
                    result = number1 + number2;
                    break;
                case '-':
                    result = number1 - number2;
                    break;
                case '*':
                    result = number1 * number2;
                    break;
                case '/':
                    result = number1 / number2;
                    break;
                default:
                    console.log('Operação inválida!');
                    rl.close();
                    return;
            }

            console.log(`O resultado da operação é: ${result}`);
            rl.close();
        });
    });
});