const assert = require("assert");
const { Given, When, Then } = require("cucumber");
const Calculadora = require("../../CalculadoraService");

const calc = new Calculadora();

Given("the numbers {int} and {int}", function (int, int2) {
  this.int = Number(int);
  this.int2 = Number(int2);
});

When("sum thoses numbers", function () {
  actualAnswer = calc.soma(this.int, this.int2);
  console.log("actualAnswer:", this.actualAnswer);
});

When("subtract thoses numbers", function () {
  actualAnswer = calc.subtracao(this.int, this.int2);
  console.log("actualAnswer:", this.actualAnswer);
});

When("multiply thoses numbers", function () {
  actualAnswer = calc.multiplicacao(this.int, this.int2);
});

Then("the result should be {int}!", (expectedAnswer) => {
  assert.equal(actualAnswer, expectedAnswer);
});
