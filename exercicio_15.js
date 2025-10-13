/*
15 - Validação de CEP: O CEP é válido se tiver 8 dígitos numéricos e não for nulo.
cep = '12345678', cepNaoNulo = true

Resultado esperado: true ou false?
*/

let cep = '12345678'
let cepNaoNulo = true
let cepNumeros = /[0-9]/.test(cep)

let validar = true ? cepNumeros==true && cep.length==8 && cepNaoNulo == true : validar = false

console.log('CEP valido', validar)
console.log('cep tem 8 numeros?', (cep.length))
console.log('cep só tem numeros?', cepNumeros, cep)
console.log('cep não é nulo?', cepNaoNulo)