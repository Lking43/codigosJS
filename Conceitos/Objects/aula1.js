// 💻 O Desafio: O Medidor de Velocidade do Super-Herói

const heroi = {
  nome: "Superman",
  velocidade: 10,
  voa: true,
};

function velocidadeHeroi(heroi) {
  if (heroi.velocidade >= 10) {
    return `${heroi.nome} é incrivelmente rapido!`;
  } else {
    return `${heroi.nome} tem uma velocidade normal.`;
  }
}

function heroiVoa(heroi) {
  if (heroi.voa) {
    return `${heroi.nome} pode voar!`;
  } else {
    return `${heroi.nome} só anda pelo chão.`;
  }
}

console.log(velocidadeHeroi(heroi));
console.log(heroiVoa(heroi));
