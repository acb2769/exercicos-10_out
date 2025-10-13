/*
7 - Validação de Formulário: O formulário é válido se o campo "nome" não estiver vazio 
e o campo "idade" for um número.
nome = 'Maria', idade = 25

Resultado esperado: true ou false

typeof minhaVariavel === 'number'

*/

let nome = 'Maria'
let idade = 25
let validar = true ? (nome !== '') && (typeof idade === 'number'): validar = false

console.log("Resultado esperado: ", validar);
console.log("nome Vazio?: ", nome);
console.log("campo numerico?: ", idade);
