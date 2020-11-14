const assert = require("assert");
const { Given, When, Then } = require("cucumber");
const Calculadora = require("../../CalculadoraService");

const calc = new Calculadora();

Given("the numbers {float} and {float}", function (float, float2) {
  this.num1 = parseFloat(float);
  this.num2 = parseFloat(float2);
});

When("sum thoses numbers", function () {
  actualAnswer = calc.soma(this.num1, this.num2);
  console.log("actualAnswer:", this.actualAnswer);
});

Then("the result should be {float}!", (expectedAnswer) => {
  assert.equal(actualAnswer, expectedAnswer);
});
