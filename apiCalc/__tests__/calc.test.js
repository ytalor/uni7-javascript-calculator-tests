const axios = require("axios");
const { expect, it } = require("@jest/globals");
const { test } = require("picomatch");
const Calculadora = require("../CalculadoraService");

const calc = new Calculadora();

it("Test Soma 0.5", async () => {
  const response = await axios.get("http://localhost:8000/sum/", {
    params: {
      a: 0.3,
      b: 0.2,
    },
  });
  const result = response.data.sum;

  expect(result).toBe(0.5);
});
