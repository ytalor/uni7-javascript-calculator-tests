const assert = require("assert");
const { Given, When, Then } = require("cucumber");
const Calculadora = require("../../CalculadoraService.js");

const calc = new Calculadora();

Given("the numbers 0.3 and 0.2", function () {
  number = [0.2, 0.3];
});

When("sum those numbers", function () {
  this.actualAnswer = calc.soma(0.3, 0.2);
});

Then("the result should be {float}", function (float) {
  assert.equal(this.actualAnswer, 0.5);
});
