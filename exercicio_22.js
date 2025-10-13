/*
22.	Validação de Nome de Usuário: O nome de usuário é válido se tiver entre 5 e 20 caracteres (inclusive).
nome = 'joao'
*/

let nome = 'joao'

let validar = true ? nome.length >= 5 && nome.length <= 20 : validar = false

console.log('Resposta esperada', validar)
console.log('nome tem 5 caracteres?', (nome.length))
console.log('nome: ', nome)
