const historico = [];

class Calculadora {
  soma(num1, num2) {
    const valor = num1 + num2;
    const result = parseFloat(valor.toFixed(2));
    this.salvaHistorico(result);
    return result;
  }

  subtracao(num1, num2) {
    const valor = num1 - num2;
    const result = round(valor, 2);
    this.salvaHistorico(result);
    return result;
  }

  multiplicacao(num1, num2) {
    const valor = num1 * num2;
    const result = round(valor, 2);
    this.salvaHistorico(result);
    return result;
  }

  divisao(num1, num2) {
    const valor = num1 / num2;
    const result = round(valor, 2);
    this.salvaHistorico(result);
    return result;
  }

  salvaHistorico(valor) {
    historico.push(valor);
  }

  lerHistorico() {
    return historico;
  }
}

module.exports = Calculadora;
