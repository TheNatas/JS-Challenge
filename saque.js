// Desenvolva um programa que simule a entrega de notas quando um cliente efetuar um saque em um caixa eletrônico. Os requisitos básicos são os seguintes:
// - Entregar o menor número de notas;
// - Só é possível sacar o valor solicitado com as notas disponíveis;
// - Notas disponíveis de R$ 100,00; R$ 50,00; R$ 20,00 e R$ 10,00

/* 
*/
const saque = (valor, notasDe100=0, notasDe50=0, notasDe20=0, notasDe10=0) => { // A função receberá o valor do saque. As quantidades de notas a serem entregues serão incrementadas conforme o valor do saque é subtraído pelas notas já somadas.
  if (valor%10 !== 0){ // Valores com centavos ou algarismos de 1 a 9 na casa das unidades não serão aceitos.
    return 'Não é possível sacar este valor';
  }
  if (valor >= 100){ // Para cada condição atendida, a função executará novamente com o valor subtraído e a nota a ser entregue incrementada.
    return saque(valor - 100, notasDe100+1, notasDe50, notasDe20, notasDe10); // Na volta da recursão, o retorno da função será retornado para a stack anterior que executou a função.
  }else
  if (valor >= 50){
    return saque(valor - 50, notasDe100, notasDe50+1, notasDe20, notasDe10);
  }else
  if (valor >= 20){
    return saque(valor - 20, notasDe100, notasDe50, notasDe20+1, notasDe10);
  }else
  if (valor >= 10){
    return saque(valor - 10, notasDe100, notasDe50, notasDe20, notasDe10+1);
  }
  return {notasDe100, notasDe50, notasDe20, notasDe10}; // O retorno da função será um objeto cujas propriedades tem o mesmo nome e valor dos parâmetros recebidos pela última execução.
};