/* 
Faça um programa para calcular o valor de uma viagem.

voce tera 5 variaveis sendo elas:

1- preço do etanol;
2- preço da gasolina;
3- O tipo de combustivel que está no seu carro;
4- Gasto médio de combustivel do carro por KM;
5- Distancia em KM da viagem;

Imprima no console o valor que sera gasto para realizar esta viagem.

*/

const precoEtanol = 4.7;
const precoGasolina = 6.51;
const tipoDeCombustivel = "Gasolina";
const consumocarro = 29;
const distanciaViagem = 84;

const gastoPorViagem = (distanciaViagem / consumocarro) * precoGasolina;

if (tipoDeCombustivel) {
  console.log("valor gasto com Gasolina");
} else {
  console.log("valor gasto com outro tipo de combustivel");
}

console.log(gastoPorViagem.toFixed(2));
