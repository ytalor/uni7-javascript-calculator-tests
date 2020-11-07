const express = require("express");
const Calculadora = require("./CalculadoraService");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/sum", (request, response) => {
  console.log(request);
  const a = parseFloat(request.query.a);
  const b = parseFloat(request.query.b);

  if (isNaN(a) || isNaN(b))
    return response.status(422).json({ message: "Informe números" });

  const calc = new Calculadora();

  return response.status(200).json({
    a: a,
    b: b,
    sum: calc.soma(a, b),
  });
});

app.get("/history", (request, response) => {
  const calc = new Calculadora();
  const historico = calc.lerHistorico();

  return response.json({ history: historico });
});

app.listen((port = 8000), () => {
  console.log(`Server running on port || ${port}`);
});
