/*
Faça um programa que identifique se, em um determinado vetor, existem ou não valores repetidos.
*/

Array.prototype.hasRepeats = function(){ // Definindo a função como um método de array
  return this.length !== new Set(this).size; // 'this' refere-se ao array que chamou o método.
  /* 
  Sets aceitam apenas valores únicos, então se construirmos um usando os valores do array e o 
  seu tamanho for diferente de array.length, isso significa que havia algum elemento repetido. 
  */
};