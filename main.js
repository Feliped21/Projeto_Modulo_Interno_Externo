//main.sj

const readline = require('readline');
const calculadora = require('./modulo interno');

//Configurando o readline
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

// Perguntando ao usuário os números
rl.question('Digite o primeiro número: ', (num1) => {
    rl.question('Digite o segundo número: ', (num2) => {
        //Convertendo os números para inteiros
        num1 = parseInt(num1);
        num2 = parseInt(num2);  

        //Verificando se os números são válidos
        if (isNaN(num1) || isNaN(num2)) {
            console.log('Por favor, forneça números válidos.');
            rl.close();
            return;
        }

        //Chamando o método de soma do módulo interno
        const resultado = calculadora.somar(num1, num2);

        //Exibindo o resultado 
        console.log('A soma de', num1, 'e', num2, 'é igual a:', resultado);

        //Fechando o readline
        rl.close();
    });
});
