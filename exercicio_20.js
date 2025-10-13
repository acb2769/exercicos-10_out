/*
20.	Validação de Número de Telefone: O número de telefone é válido 
se tiver 9 dígitos e for um número inteiro.
numero = 987654321

*/

let numero = '987654321'


let validar = true ? (numero % 1 === 0) && numero.length === 9 : validar = false

console.log('resposta esperada: ', validar)
console.log('numero é inteiro?', (numero % 1 === 0))
console.log('numero tem 9 digitos?', numero.length)