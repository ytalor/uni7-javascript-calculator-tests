const axios = require("axios");

async function soma() {
  const result = await axios.get("http://localhost:8000/sum?a=0.3&b=0.2");
  console.log(result.data.sum);
}

soma();
