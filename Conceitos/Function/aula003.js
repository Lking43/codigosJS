/*let nome = "Maria";

function escrevaMeuNome(nome) {
  return `meu nome é: ` + nome;
}

console.log(escrevaMeuNome(nome)); */

// 🧩 Desafio: Sistema de cálculo com funções

//let numero1 = 10;
//let numero2 = 2;
//let operacao =

function calcular(numero1, numero2, operacao) {
  if (operacao === "+") {
    return numero1 + numero2;
  } else if (operacao === "-") {
    return numero1 - numero2;
  } else if (operacao === "*") {
    return numero1 * numero2;
  } else if (operacao === "/") {
    if (numero2 === 0) {
      return "Erro: divisão por zero";
    }
    return numero1 / numero2;
  } else return "Operação inválida";
}

console.log(calcular(9, 0, "/"));
