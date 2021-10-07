/*
Faça um programa que identifique se, em um determinado vetor, existem ou não valores repetidos.
*/
const hasRepeats = (arr) => {
  if (arr.length === 1) return false; // Se sobrou apenas 1 elemento, não tivemos nenhuma repetição.
  const elementToBeCompared = arr[0]; // O elemento a ser comparado será o 1° elemento do array recebido pela função.

  for (const elem of arr.slice(1)){ // Compara elementToBeCompared com cada elemento do array, iniciando pelo elemento seguinte a elementToBeCompared.
    if (elementToBeCompared === elem) return true; // Achada uma repetição, retorne true.
  }

  return hasRepeats(arr.slice(1)); // Não tendo uma repetição desse elemento, teste novamente tirando ele do array para fazer a comparação com o próximo.
};