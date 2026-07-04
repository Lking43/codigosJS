//🟢 Nível 1 — Básico

//1. Soma simples
//Crie uma função que receba dois números e retorne a soma deles.
//💡 Dica: use return (não só console.log).

/*function retornaSoma(num1, num2) {
  return num1 + num2;
}

console.log(retornaSoma(10, 12));*/

//2. Par ou ímpar
//Crie uma função que receba um número e retorne "Par" ou "Ímpar".
//💡 Dica: operador % (módulo).

/*function parOuImpar(numero) {
  if (numero % 2 === 0) {
    return "Par";
  } else return "Impar";
}

console.log(parOuImpar(3));*/

/*3. Maior número
Crie uma função que receba dois números e retorne o maior deles.

💡 Dica: use if.

function maiorNumero(n1, n2) {
  if (n1 > n2) {
    return n1;
  } else if (n1 === n2) {
    return `Ambos os Numeros são iguais: ${n1}`;
  } else {
    return n2;
  }
}

console.log(maiorNumero(31, 31));*/

//🟡 Nível 2 — Intermediário

/*
4. Calculadora básica
Crie uma função que receba:

dois números
uma operação (+, -, *, /)

E retorne o resultado.

💡 Dica: use vários if ou switch.

*/
/*
function calcularValores(valor1, valor2, operacao) {
  if (operacao === "+") {
    return valor1 + valor2;
  } else if (operacao === "-") {
    return valor1 - valor2;
  } else if (operacao === "*") {
    return valor1 * valor2;
  } else if (operacao === "/") {
    return valor1 + valor2;
  } else {
    return "Operação invalida!";
  }
}

console.log(calcularValores(6, 3, ""));
*/
/*
5. Média de notas
Crie uma função que receba 3 notas e retorne a média.

💡 Dica: (n1 + n2 + n3) / 3



function receberNotas(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

console.log(receberNotas(22, 23, 25));
*/

/*
6. IMC com classificação
Crie uma função que receba peso e altura e:

calcule o IMC
retorne a classificação (igual você já fez)

💡 Dica: pode separar em duas funções.*/

function calcularImc(peso, altura) {
  return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc >= 18.5 && imc <= 25) {
    return "Peso normal";
  } else if (imc > 25 && imc <= 30) {
    return "Acima do peso";
  } else if (imc > 30 && imc <= 40) {
    return "Obeso";
  } else {
    return "Obesidade Grave";
  }
}

function main() {
  const peso = 70;
  const altura = 1.85;

  const imc = calcularImc(peso, altura);
  console.log(classificarImc(imc));
}

main();
