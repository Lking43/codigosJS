//O Desafio: O Sistema de Missões de um RPG

const jogador = {
  nome: "Neymar",
  missoesConcluidas: ["Matar Dragão", "Salvar Vila"], // ["Matar Dragão", "Salvar Vila"]
  contaPremium: true, // usar valor booleano
};

function checarStatusJogador(jogador) {
  if (jogador.missoesConcluidas.length === 0) {
    return `O jogador ${jogador.nome} ainda é um iniciante e não completou missões.`;
  } else if (jogador.contaPremium) {
    return `O jogador Premium ${jogador.nome} já completou as missões com bônus de XP! Missões: ${jogador.missoesConcluidas.join(", ")} `;
  } else {
    return `O jogador comum ${jogador.nome} já completou as missões padrão. Missões:  ${jogador.missoesConcluidas.join(", ")}`;
  }
}
console.log(checarStatusJogador(jogador));
