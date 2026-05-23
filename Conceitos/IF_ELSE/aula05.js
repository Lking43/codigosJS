/*
🧠 Exercício 1 — Par ou Ímpar

Crie um código que receba um número e diga se ele é par ou ímpar.

💡 Dica:

Existe um operador que pega o resto da divisão
Se o resto for 0… já sabe 👀



const par = 2;
const impar = 3;

if (impar === 2) {
  console.log("Numero Par!");
} else {
  console.log("Numero Impar!");
}*/

/*🧠 Exercício 5 — Login simples

Crie um sistema que:

Receba um usuário e senha
Se for:
usuário: "admin"
senha: "1234"
Mostra: "Acesso permitido"
Senão: "Acesso negado"

💡 Dica:

Vai precisar usar AND (&&)
Compare texto com texto (string) */

let usuario = "lucas";
let senha = "1234";

if (usuario === "admin" && senha === "1234") {
  console.log("Acesso permitido");
} else if (senha != "1234" && usuario === "admin") {
  console.log("Senha incorreta, tente novamente...");
} else if (usuario != "admin" && senha === "1234") {
  console.log("Usuario incorreto, tente novamente...");
} else {
  console.log("Acesso Negado");
}
