// index.js
const minimist = require('minimist');
const calculadora = require('./modulo interno');

// Parse dos argumentos da linha de comando
const args = minimist(process.argv.slice(2));

// Convertendo os argumentos para números
const num1 = parseInt(args.a);
const num2 = parseInt(args.b);

// Verificando se os argumentos são válidos
if (isNaN(num1) || isNaN(num2)) {
    console.log('Por favor, forneça números válidos.');
    process.exit(1);
}

// Chamando o método de soma do módulo interno
const resultado = calculadora.somar(num1, num2);

// Exibindo o resultado
console.log('A soma de', num1, 'e', num2, 'é igual a:', resultado);
