/*
9 - Validação de Senha: A senha é considerada forte se tiver mais de 8 caracteres 
e incluir um símbolo ou um número.
senha = 'senha123', temSimbolo = false, temNumero = true

Resultado esperado: true ou false?

*/
let Senha = "senha123";

let temLetras = /[a-zA-Z]/.test(Senha); 
let temNumeros = /[0-9]/.test(Senha); 
let temEspeciais = /[^\w]/.test(Senha); 

let validar = true ? (Senha.length > 8) && (temNumeros == /[0-9]/.test(Senha) || temEspeciais == /[^\w]/.test(Senha)) : validar = false

console.log("Senha Forte?", validar);
console.log("Tem mais de 8 caracteres?", (Senha.length > 8));
console.log("Tem letras?", temLetras);
console.log("Tem números?", temNumeros);
console.log("Tem caracteres especiais?", temEspeciais);

