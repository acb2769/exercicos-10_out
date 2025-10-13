/*
25. Validação de Código de Cupom: O cupom é válido se a data de validade for no futuro OU 
o código for FRETEGRATIS.

dataValidadeFutura = false, codigoCupom = 'DESCONTO10'
*/

let dataValidadeFutura = false
let codigoCupom = 'DESCONTO10'

let validarCupom = true ? dataValidadeFutura === true || codigoCupom === 'FRETEGRATIS' : validarCupom = false 
 
console.log('Resposta esperada: ', validarCupom)
console.log('Validade futura?: ', dataValidadeFutura)
console.log("codigoCupom = 'FRETEGRATIS'? :", codigoCupom)