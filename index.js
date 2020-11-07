const Calculadora = require('./CalculadoraService')

const operation = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])


const calc = new Calculadora() ;

if (operation == "soma") {
    console.log(calc.soma(num1, num2));
} else if (operation == "subtracao") {
    console.log(calc.subtracao(num1, num2));
} else if (operation == "multiplicacao") {
    console.log(calc.multiplicacao(num1, num2));
}  else if (operation == "divisao") {
    console.log(calc.divisao(num1, num2));
}