/* 
Desenvolva um programa que calcule o IMC (índice de massa corpórea) e mostre o resultado para o usuário.
Tabela Resultados:
Menor que 18: Abaixo do peso
Menor que 25: Peso normal
Maior que 25: Acima do peso
*/

// Os valores serão fornecidos pelo usuário:
const peso = prompt('Insira o seu peso (em kg): ');
const altura = prompt('Insira a sua altura (em metros): ');

const IMC = peso / (altura**2);

alert(
  IMC < 18 ? 'Abaixo do peso' : // Se a condição for suprida, esta mensagem será exibida. Senão, será testada a próxima condição.
  IMC < 25 ? 'Peso normal' : // Sendo essa condição suprida, esta mensagem será exibida. Senão, 
  'Acima do peso' // Esta mensagem será exibida.
);