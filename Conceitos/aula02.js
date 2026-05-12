/* 🚀 MINI PROJETO: Calculadora de Gasto com Combustível
🎯 Objetivo

Criar um programa em Node.js que:

calcula consumo do carro
calcula gasto por dia
toma decisões com if
usa operadores e variáveis */


let kmPorDia = 84;
let consumoCarro = 14;
let precoGasolina = 6.51;

console.log(`Eu rodo ${kmPorDia} Km por dia.`);

console.log(`Meu carro faz ${consumoCarro} Km/l.`);

let litrosPorDia = kmPorDia / consumoCarro;
let gastoDiario  = precoGasolina / consumoCarro * kmPorDia;
let gastoSemanal = gastoDiario * 5;
let gastoMensal  = gastoDiario * 25;

console.log(`Eu gasto ${litrosPorDia.toFixed(1)} litros por dia.`);

console.log(`Gasto diário: R$${gastoDiario.toFixed(2)}`);

console.log(`Gasto Semanal: R$${gastoSemanal.toFixed(2)} `);

console.log(`Gasto Mensal: R$${gastoMensal.toFixed(2)} `);


if (gastoDiario < 35) {
    console.log("Gasto baixo")
}else if (gastoDiario >= 50) {
    console.log("Gasto moderado")
}else {
    console.log("Gasto alto")
};

