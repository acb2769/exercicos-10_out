/*
3 - Compra Mínima: A compra pode ser finalizada se o valor total for maior que R$ 50,00 
OU a forma de pagamento for cartão de crédito.
valorTotal = 45, formaPagamento = 'cartão'

Resultado esperado: true ou false?
*/

const valorTotal = 45
var formaPagamento = 'cartão'
let validarcompra = false

if (valorTotal > 50 || formaPagamento == 'cartão'){
    (validarcompra = true)}
else{
    (validarcompra = false)}

console.log("Resultado esperado: ", validarcompra);
console.log("Valor Total da Compra: R$ ", valorTotal);
console.log("Forma de PAgamento: ", formaPagamento);