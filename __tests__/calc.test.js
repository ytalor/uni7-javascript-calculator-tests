const { expect, it } = require("@jest/globals");
const { test } = require("picomatch");
const Calculadora = require("../CalculadoraService");

const calc = new Calculadora();

it("Test Soma 0.5", () => {
  expect(calc.soma(0.3, 0.2)).toBe(0.5);
});

it("Test soma 6.0", () => {
  expect(calc.soma(3.5, 2.5)).toBe(6.0);
});

it("Test soma 0.24", () => {
  expect(calc.soma(0.2, 0.04)).toBe(0.24);
});

it("Test soma 6.0", () => {
  expect(calc.soma(0.36, 0.04)).toBe(0.4);
});

it("Test soma 6.0", () => {
  expect(calc.soma(0.68, 0.04)).toBe(0.72);
});
