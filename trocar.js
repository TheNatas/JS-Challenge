/*
Dada duas variáveis A e B, sendo A = 3 e B = 5, escreva um código, SEM utilizar uma terceira variável, capaz de trocar o valor entre elas. Ao fim deste exemplo, as variáveis deverão ser iguais a: A = 5 e B = 3.
*/
let A = 3;
let B = 5;

const trocar = (a, b) => [b,a]; // A função receberá os dois valores e retornará na ordem inversa dentro de um array.

[A,B] = trocar(A,B); // O retorno da função será desestruturado para as duas variáveis.