/*
1.	Validação de Login: O usuário pode logar se o e-mail não estiver vazio E a senha tiver no mínimo 8 caracteres.
email = 'teste@email.com', senha = '12345678'
Resultado esperado: true ou false?
*/

let email = "teste@email.com";
let senha = "12345678";

let minhavalidacao = ((email !== " ") && (senha.length >= 8)); 

console.log("Resultado esperado: ", minhavalidacao);
console.log("email não vazio: ", email);
console.log("Senha minima de 8 caracteres: ", senha);
