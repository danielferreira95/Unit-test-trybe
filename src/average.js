/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const arr = [1, 2, 3, 4, 5];

const verificaValor = (arrai) => {
 let valor = 0;
  for (let index = 0; index < arrai.length; index += 1) {
    if (typeof arrai[index] !== 'number') {
      valor += 1;
    } else { valor += 0; }
   } return valor; 
};

const looping = (ar) => {
  let media = 0;
for (let index = 0; index < ar.length; index += 1) {
  media += ar[index];
 } return media;
};

const average = (arra) => {
   const retorno = verificaValor(arra);
   let i = '';
  if (arra.length === 0 || retorno !== 0) {
      i = undefined;
   } else {
    i = Math.round(looping(arra) / arra.length);
} return i;
};
const tentei = [1, 2, 3, '4', 5];

console.log(average(arr));
console.log(average(tentei));
console.log(typeof tentei[1]);
  module.exports = average;
