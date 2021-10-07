/*
Faça uma função que calcule a média simples (aritmética) de 3 valores quaisquer. Além dessa, faça uma outra função que receba nenhum ou vários valores e calcule a média aritmética simples desses valores.
*/

// 3 valores serão recebidos pela função, que retornará a média entre eles.
const calcMediaDe3 = (value1, value2, value3) => (value1 + value2 + value3) / 3;

// n valores serão recebidos pela função.
const calcMedia = (...values) => {
  if (values.length < 1) return 0; // Se nenhum valor for dado, o retorno será 0.
  let total = 0;
  for (let val of values)
    total += val; // Os valores serão somados, guardando o resultado em uma variável.
  
  return total / values.length; //  O resultado será dividido pelo número de valores fornecidos.
}