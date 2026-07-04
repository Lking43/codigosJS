// 🛒 O Desafio: O Carrinho de Compras

const carrinho = {
  cliente: "Lucas",
  itens: ["Teclado", "Mouse", "Monitor"], //
  cupomDesconto: false,
};

function processarCompra(carrinho) {
  if (carrinho.itens.length === 0) {
    return `O carrinho de ${carrinho.cliente} está vazio`;
  } else if (carrinho.cupomDesconto) {
    return `A compra de ${carrinho.cliente} foi processada com desconto! Itens: ${carrinho.itens.join(", ")}`;
  } else {
    return `A compra de ${carrinho.cliente} foi processada sem desconto! Itens: ${carrinho.itens.join(", ")}`;
  }
}
console.log(processarCompra(carrinho));

// Código atualizado hoje!
