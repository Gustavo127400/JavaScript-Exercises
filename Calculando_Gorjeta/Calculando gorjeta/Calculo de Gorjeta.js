
let bill = parseInt(prompt("What is the value of the bill? "));
//Qual o valor da conta?
const calcTip = function () //Função calcular gorjeta
{
  let a = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
  // Condição Ternária. se a conta der entre 300 e 50, calculará 0.15% do valor. Senão 0.2
  return a.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
  // Retornando em valor monetário.
};

console.log(calcTip());
